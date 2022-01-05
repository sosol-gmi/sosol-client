import React, { useState, useEffect } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  styled,
} from "@mui/material";
import { SIGN_FILE } from "../../queries/files";
import { actions, Wallet } from "@metaplex/js";
import { displayError } from "../../utils";
import { uploadFile } from "../../utils";
import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { SOSOL_HOST_ID } from "../../utils/ids";

const { mintNFT } = actions;

const Input = styled("input")({
  display: "none",
});

enum MetadataCategory {
  Audio = "audio",
  Video = "video",
  Image = "image",
}

enum AWSBucket {
  NFT = "nft",
}

interface FileObj {
  uri: String;
  type: String;
}

export const NFTMint: React.FC = (props) => {
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();
  const wallet = anchorWallet as Wallet;
  const { enqueueSnackbar } = useSnackbar();
  const [signFileMutation] = useMutation(SIGN_FILE);

  // TODO: need to use metaplex/js/packages/cli/src/helpers/upload/arweave-bundle.ts
  // for uploads to store data on arweave and creators pays storage fees on mint

  const [isMinting, setMinting] = useState<boolean>(false);
  const [fileName, setFileName] = useState("");
  const [attributes, setAttributes] = useState({
    name: "Testing",
    symbol: "",
    description: "A test for sosol",
    external_url: "",
    image: "",
    animation_url: undefined,
    attributes: undefined,
    seller_fee_basis_points: 500,
    properties: {
      files: [] as FileObj[],
      category: MetadataCategory.Image,
      creators: [
        { address: SOSOL_HOST_ID.toBase58(), share: 100 },
        { address: wallet.publicKey.toBase58(), share: 0 },
      ],
    },
  });

  useEffect(() => {
    console.log("************", attributes);
  }, [attributes]);

  const handleImageUpload = async (e: any) => {
    try {
      const file = e?.target?.files[0];
      // Rename the file so upload is unique
      const blob = file.slice(0, file.size, file.type);
      const renamed = new File(
        [blob],
        `${wallet.publicKey.toBase58()}-${file.name}`,
        { type: file.type }
      );

      const { data } = await signFileMutation({
        variables: {
          file: renamed.name,
          type: renamed.type,
          bucket: AWSBucket.NFT,
        },
      });
      const signedUrl = data.signFileUrl;
      const imageData = await uploadFile(renamed, signedUrl, enqueueSnackbar);
      const imageUrl = imageData?.config?.url?.split("?")[0] as string;

      setFileName(renamed.name);
      setAttributes((attr) => {
        attr.properties.files.push({ uri: imageUrl, type: file?.type });
        return { ...attr, image: imageUrl };
      });
    } catch (error) {
      console.log(error);
    } finally {
      // reset value so the input event handler can trigger again
      e.target.value = null;
    }
  };

  const handleURIUpload = async () => {
    var JSONAttr = JSON.stringify(attributes);
    const blob = new Blob([JSONAttr], { type: "application/json" });
    const blobFile = new File([blob], `${fileName}.json`);
    const { data } = await signFileMutation({
      variables: {
        file: blobFile.name,
        type: blobFile.type,
        bucket: AWSBucket.NFT,
      },
    });
    const signedUrl = data.signFileUrl;
    const fileData = await uploadFile(blob, signedUrl, enqueueSnackbar);
    const fileUrl = fileData?.config?.url?.split("?")[0];
    return fileUrl;
  };

  const mint = async () => {
    setMinting(true);
    try {
      const uri = (await handleURIUpload()) as string;

      const _nft = await mintNFT({
        connection,
        wallet,
        uri,
        maxSupply: 1,
      });

      enqueueSnackbar(`Successful mint: ${_nft.txId}`, {
        variant: "success",
      });
    } catch (e: any) {
      console.log(e);
      displayError(e, enqueueSnackbar);
    } finally {
      setMinting(false);
    }
  };
  return (
    <>
      <Box>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Create an NFT</FormLabel>
          <FormGroup>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleImageUpload}
              />
              <Button
                variant="contained"
                component="span"
                endIcon={<PhotoCamera />}
              >
                Upload NFT Image
              </Button>
            </label>
            <Button
              disabled={isMinting}
              variant="contained"
              onClick={() => mint()}
            >
              Mint NFT
            </Button>
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};
