// TODO: add attributes fiels for NFT minting
import React, { useState, useContext } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  styled,
} from "@mui/material";
import { SIGN_FILE } from "../../queries/files";
import { SOSOL_HOST_ID } from "../../utils/ids";
import { actions, Wallet } from "@metaplex/js";
import { displayError } from "../../utils";
import { uniqBy } from "lodash";
import { uploadFile } from "../../utils";
import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { ThemeContext } from "../../contexts/theme";

const { mintNFT } = actions;

const ImageInput = styled("input")({
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
  const { theme } = useContext(ThemeContext);
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();
  const wallet = anchorWallet as Wallet;
  const { enqueueSnackbar } = useSnackbar();
  const [signFileMutation] = useMutation(SIGN_FILE);

  // TODO: need to use metaplex/js/packages/cli/src/helpers/upload/arweave-bundle.ts
  // for uploads to store data on arweave and creators pays storage fees on mint

  const [isMinting, setMinting] = useState<boolean>(false);
  const [fileName, setFileName] = useState("");
  const defaultAttrState = {
    name: "",
    symbol: "",
    description: "",
    external_url: "",
    image: "",
    animation_url: undefined,
    attributes: undefined,
    seller_fee_basis_points: 500,
    // collection: { name: "", family: "BoomArmy" },
    properties: {
      files: [] as FileObj[],
      category: MetadataCategory.Image,
      creators: [{ address: SOSOL_HOST_ID.toBase58(), share: 100 }],
    },
  };
  const [attributes, setAttributes] = useState(defaultAttrState);

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
        attr.properties.creators.push({
          address: wallet?.publicKey?.toBase58(),
          share: 0,
        });
        attr.properties.files = uniqBy(attr.properties.files, "uri");
        attr.properties.creators = uniqBy(attr.properties.creators, "address");
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
      if (!attributes.image) throw new Error("You need to upload an image");
      if (!attributes.name) throw new Error("You need to add a name");
      if (!attributes.description)
        throw new Error("You need to add a description");
      const uri = (await handleURIUpload()) as string;

      const _nft = await mintNFT({
        connection,
        wallet,
        uri,
        maxSupply: 1,
      });

      setAttributes(defaultAttrState);
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
          <FormLabel
            sx={{ color: theme.primaryColor, marginBottom: 2 }}
            component="legend"
          >
            Create an NFT
          </FormLabel>
          <FormGroup>
            <Box mb={2}>
              <label htmlFor="contained-button-file">
                <ImageInput
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
            </Box>
            <Box mb={2}>
              {attributes.image && (
                <img
                  src={attributes.image}
                  alt="Preview for NFT upload"
                  width="250"
                />
              )}
            </Box>
            <Box mb={2}>
              <TextField
                // error={inputError}
                required
                id="input-name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                  style: { color: theme.secondaryColor },
                }}
                InputProps={{
                  style: { color: theme.secondaryColor },
                }}
                value={attributes.name}
                size="small"
                onChange={(e) => {
                  // setInputError(false);
                  setAttributes((attr) => ({ ...attr, name: e.target.value }));
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                // error={inputError}
                required
                id="input-description"
                label="Description"
                rows={4}
                InputLabelProps={{
                  shrink: true,
                  style: { color: theme.secondaryColor },
                }}
                InputProps={{
                  style: { color: theme.secondaryColor },
                }}
                value={attributes.description}
                size="small"
                onChange={(e) => {
                  // setInputError(false);
                  setAttributes((attr) => ({
                    ...attr,
                    description: e.target.value,
                  }));
                }}
              />
            </Box>
            <Box mb={2}>
              <Button
                disabled={isMinting}
                variant="contained"
                onClick={() => mint()}
              >
                Mint NFT
              </Button>
            </Box>
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};
