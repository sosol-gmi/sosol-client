import { useEffect, useState, useContext, useCallback } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import {
  Box,
  Button,
  Chip,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { ReactComponent as NFTIcon } from "../../icons/nft.svg";
import { ThemeContext } from "../../contexts/theme";
import { styled } from "@mui/system";
import { useConnection } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useSnackbar } from "notistack";
import { camelizeKeys, displayError } from "../../utils";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

// export interface NFTObject {
//   publicKey: string;
//   name: string;
//   externalUrl: string;
//   symbol: string;
//   description: string;
//   sellerFeeBasisPoints: number;
//   image: string;
//   attributes?: AttributesEntity[] | null;
//   collection: Collection;
//   properties: Properties;
// }
// interface AttributesEntity {
//   traitType: string;
//   value: string;
// }
// interface Collection {
//   name: string;
//   family: string;
// }
// interface Properties {
//   files?: FilesEntity[] | null;
//   category: string;
//   creators?: CreatorsEntity[] | null;
// }
// interface FilesEntity {
//   uri: string;
//   type: string;
// }
// interface CreatorsEntity {
//   address: string;
//   share: number;
// }

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  & .MuiInputBase-input {
    padding: 10px 12px;
    width: 100%;
  }
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const NFTPicker: React.FC<{
  setNftData: React.Dispatch<React.SetStateAction<any>>;
}> = ({ setNftData }) => {
  const [nftForm, toggleNftForm] = useState(false);
  const [nftInput, setNftInput] = useState("");
  const [metadata, setMetadata] = useState<any>(null);
  const [validKey, setValidKey] = useState<null | Boolean>(null);
  const { theme } = useContext(ThemeContext);
  const handleClose = () => {
    setNftInput("");
    setMetadata(null);
    setNftData(null);
    toggleNftForm(false);
  };
  const { connection } = useConnection();
  const { enqueueSnackbar } = useSnackbar();

  const handleSelect = () => {
    setNftInput("");
    setNftData(metadata);
    setMetadata(null);
    toggleNftForm(false);
  };

  const fetchSetMeta = useCallback(
    async (connection: Connection, key: PublicKey) => {
      const mintMeta = await Metadata.findMany(connection, { mint: key });
      const uri = mintMeta[0].data.data.uri;
      if (uri) {
        const data: any = await fetch(uri)
          .then((response) => response.json())
          .then((data) => camelizeKeys(data));
        data.publicKey = key.toString();
        setMetadata({
          publicKey: data.publicKey,
          name: data.name,
          symbol: data.symbol,
          description: data.description,
          externalUrl: data.externalUrl,
          sellerFeeBasisPoints: data.sellerFeeBasisPoints,
          image: data.image,
          attributes: data.attributes,
          collection: data.collection,
          properties: data.properties,
        });
        setValidKey(true);
      }
    },
    []
  );

  useEffect(() => {
    (async () => {
      try {
        if (!nftInput) return;
        const key = new PublicKey(nftInput);
        const acc = await connection.getParsedAccountInfo(key);
        // @ts-ignore: error in types
        if (acc && acc.value.data.parsed.info.mint) {
          // @ts-ignore: error in types
          const mintKey = new PublicKey(acc.value.data.parsed.info.mint);
          await fetchSetMeta(connection, mintKey);
        }
        // @ts-ignore: error in types
        if (Math.floor(acc?.value?.data?.parsed.info.supply) === 1) {
          await fetchSetMeta(connection, key);
        }
      } catch (error) {
        console.log(error);
        setValidKey(false);
        if (nftInput.length > 42) {
          displayError(error, enqueueSnackbar);
        }
      }
    })();
  }, [nftInput, validKey, connection, enqueueSnackbar, fetchSetMeta]);

  const Wrapper = styled("span")`
    & .nft-pick {
      margin-right: 2rem;
      width: 26px;
      height: 26px;
      display: inline-block;
      & svg {
        width: 26px;
        cursor: pointer;
        & path {
          fill: ${theme.accentColor};
        }
      }
    }
  `;

  return (
    <Wrapper>
      <span className="nft-pick" onClick={() => toggleNftForm(!nftForm)}>
        <NFTIcon />
      </span>

      {nftForm && (
        <>
          <StyledModal
            open={nftForm}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box
              sx={{
                position: "absolute",
                minWidth: 600,
                maxWidth: 600,
                overflowX: "hidden",
                overflowY: "hidden",
                height: "auto",
                top: "10rem",
                color: theme.primaryColor,
                background: theme.background,
                padding: "1rem",
              }}
            >
              <Stack
                direction="column"
                sx={{ height: "100%" }}
                key="StackInput"
              >
                <InputLabel
                  shrink
                  htmlFor="nft-input"
                  sx={{ color: theme.primaryColor }}
                >
                  NFT Public Key
                </InputLabel>
                <InputBase
                  placeholder="eg. 43QrHJ2csgLsRUhXW7WHQecZhRLFHW88sazGvUT65vYj"
                  id="nft-input"
                  value={nftInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNftInput(e.currentTarget.value);
                  }}
                  endAdornment={
                    validKey !== null && (
                      <InputAdornment
                        position="end"
                        sx={{ paddingRight: "0.5rem" }}
                      >
                        {validKey === true ? (
                          <CheckIcon color="success" />
                        ) : (
                          <ClearIcon color="error" />
                        )}
                      </InputAdornment>
                    )
                  }
                  sx={{
                    border: `1px solid ${theme.secondaryColor}`,
                    color: theme.primaryColor,
                    borderRadius: "4px",
                  }}
                />
              </Stack>
              {metadata && (
                <>
                  <Stack
                    direction="column"
                    sx={{
                      height: "100%",
                      borderTop: "1px solid",
                      marginTop: "1rem",
                      paddingTop: "1rem",
                    }}
                    key={metadata.publicKey}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        width="150"
                        height="150"
                        className="thumb"
                        src={metadata.image}
                        alt={metadata.name}
                      />
                      <Box ml={2}>
                        <Stack direction="column" key="StackMeta">
                          <Box mb={1}>
                            <Typography variant="body1">
                              {metadata.name}
                            </Typography>
                          </Box>
                          <Box mb={2}>
                            <Typography variant="body2">
                              {metadata.description}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                            }}
                          >
                            {metadata.attributes &&
                              // @ts-ignore
                              metadata.attributes.map((attr) => (
                                <Box
                                  mr={1}
                                  mb={1}
                                  key={attr.traitType + attr.value}
                                >
                                  <Chip
                                    label={attr.traitType + " | " + attr.value}
                                    color="info"
                                    variant="outlined"
                                  />
                                </Box>
                              ))}
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                  </Stack>
                  <Box
                    sx={{
                      borderTop: "1px solid",
                      marginTop: "1rem",
                      paddingTop: "1rem",
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Button variant="contained" onClick={handleSelect}>
                      Select
                    </Button>
                    <Box mr={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </StyledModal>
        </>
      )}
    </Wrapper>
  );
};
