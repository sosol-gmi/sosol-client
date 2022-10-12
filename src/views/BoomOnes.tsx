import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  FormGroup,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Face6Icon from "@mui/icons-material/Face6";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useWallet } from "@solana/wallet-adapter-react";
import dayjs from "dayjs";
import { ThemeContext } from "../contexts/theme";
import { useContext, useEffect, useState } from "react";
import { AuctionLabel } from "../components/Auctions/AuctionLabel";
import { UserAvatar } from "../components/UserAvatar";
import { useSnackbar } from "../contexts/snackbar";
import { PublicKey } from "@solana/web3.js";
import { CandyShop, fetchAuctionsByShopAddress } from "@liqnft/candy-shop-sdk";
import { AuctionStatus } from "@liqnft/candy-shop-types";
import { shortenAddress } from "../utils/utils";
import { AuctionCountdown } from "../components/Auctions/AuctionCountdown";

const ORDER_FETCH_LIMIT = 12;
const BMA_TICK_SIZE = 1000000000;
const DEFAULT_LIST_AUCTION_STATUS = [
  AuctionStatus.CREATED,
  AuctionStatus.STARTED,
  AuctionStatus.EXPIRED,
  AuctionStatus.COMPLETE,
];

interface ListBase<T> {
  success: boolean;
  msg: undefined | string;
  result: T[];
  totalCount: number;
  count: number;
  offset: number;
}

interface Auction {
  auctionAddress: string;
  tokenAccount: string;
  candyShopAddress: string;
  tokenMint: string;
  sellerAddress: string;
  startingBid: string;
  startTime: string;
  biddingPeriod: string;
  highestBid: string;
  tickSize: string;
  buyNowPrice: string | null;
  status: AuctionStatus;
  highestBidBuyer?: string;
  highestBidPrice?: string;
  userBid?: boolean;
  totalBid?: number;
  nftUri?: string;
  name: string;
  symbol: string;
  description?: string;
  sellerFeeBasisPoint: number;
  image?: string;
  animationUrl?: string;
  attributes?: NftAttribute[];
  externalUri?: string;
  properties?: NftProperties;
}

interface NftCreator {
  address: string;
  share: number;
  verified?: number;
}
interface NftFiles {
  uri: string;
  type: string;
}

interface NftProperties {
  files: NftFiles[];
  category: string;
  creators: NftCreator[];
}
interface NftAttribute {
  value: string;
  trait_type: string;
}

export const BoomOnes = () => {
  const { theme } = useContext(ThemeContext);
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [accordionPanel, setAccordionPanel] = useState("bids");
  const [auctionNFT, setAuctionNFT] = useState<Auction>();

  const [bid, setBid] = useState<number>(
    auctionNFT?.highestBid
      ? (Number(auctionNFT?.highestBid) + Number(auctionNFT?.tickSize)) /
          BMA_TICK_SIZE
      : 1
  );

  const wallet = useWallet();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    const candyShop = new CandyShop({
      candyShopCreatorAddress: new PublicKey(
        "G1p59D3CScwE9r31RNFsGm3q5xZapt6EXHmtHV7Jq5AS"
      ),
      treasuryMint: new PublicKey(
        "boomh1LQnwDnHtKxWTFgxcbdRjPypRSjdwxkAEJkFSH"
      ),
      candyShopProgramId: new PublicKey(
        "csbMUULiQfGjT8ezT16EoEBaiarS6VWRevTw1JMydrS"
      ),
      env: "mainnet-beta",
      settings: {
        currencySymbol: "BMA",
        currencyDecimals: 9,
      },
    });
    if (wallet.connected) {
      (async () => {
        try {
          const auction = await fetchAuctionsByShopAddress(
            candyShop.candyShopAddress,
            {
              offset: 0,
              limit: ORDER_FETCH_LIMIT,
              status: DEFAULT_LIST_AUCTION_STATUS,
              walletAddress: wallet.publicKey?.toBase58(),
            }
          );
          console.log(auction, dayjs.unix(new Date().getTime() / 1000).unix());
          setAuctionNFT(auction.result[0]);
        } catch (error) {
          console.info(`fetch candy machine info, error= `, error);
        }
      })();
    }
  }, []);

  const handleShare = (text: string) => {
    navigator.clipboard.writeText(text);
    setAnchorEl(null);
    enqueueSnackbar("Copied to clipboard", { variant: "success" });
  };

  const bids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const open = Boolean(anchorEl);
  const id = open ? "share-popper" : undefined;
  return (
    <Grid
      container
      spacing={1}
      mt={2}
      px={2}
      sx={{ height: "calc(100vh - 100px)", overflowY: "scroll" }}
    >
      <Grid item xs={12}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h2" sx={{ lineHeight: 1.5 }}>
            {auctionNFT?.name}
          </Typography>
          <Link>
            <IconButton
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              sx={{
                backgroundColor: theme.accentColor,
                color: theme.primaryColor,
                "&:hover": {
                  backgroundColor: theme.accentColor,
                  opacity: 0.8,
                },
              }}
            >
              <ShareIcon />
            </IconButton>
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              placement={"left-start"}
            >
              <Box
                sx={{
                  border: `1px solid ${theme.blue.light}`,
                  borderRadius: "8px",
                  p: 1,
                  mr: 1,
                  bgcolor: theme.background2,
                }}
              >
                <IconButton
                  type="button"
                  size="small"
                  onClick={() => handleShare("Boom is copying")}
                  sx={{
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  <TwitterIcon
                    sx={{ fontSize: 16, color: theme.accentColor }}
                  />
                </IconButton>
                <IconButton
                  type="button"
                  size="small"
                  onClick={() => handleShare("Boom is copying")}
                  sx={{
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  <ContentCopyIcon
                    sx={{ fontSize: 16, color: theme.accentColor, ml: 2 }}
                  />
                </IconButton>
              </Box>
            </Popper>
          </Link>
        </Box>
        <Box display="flex" justifyContent={"space-between"} mt={2}>
          <Typography mt={2} variant="h4">
            <CollectionsIcon
              sx={{ color: theme.accentColor, verticalAlign: "middle" }}
            />{" "}
            {auctionNFT?.symbol}
          </Typography>
          <Stack mt={1} spacing={1} direction="row">
            <Chip
              label={auctionNFT && shortenAddress(auctionNFT?.sellerAddress)}
              variant="outlined"
              icon={
                <Face6Icon
                  sx={{ "&.MuiChip-icon": { color: theme.accentColor } }}
                />
              }
            />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ overflow: "hidden" }}>
          <img src={auctionNFT?.image} width="100%" alt="Boom Heroes #420" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          p={2}
          sx={{
            border: `1px solid ${theme.secondaryColor}`,
            backgroundColor: theme.background2,
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <AuctionLabel
              label="Leader"
              content={
                <Chip
                  label="@harkl"
                  variant="outlined"
                  icon={
                    <UserAvatar
                      // avatar={user?.avatar}
                      // isNFT={user?.data?.avatarMint}
                      sx={{ width: "23px", height: "23px", ml: "3px" }}
                    />
                  }
                />
              }
            />
            <AuctionLabel
              label="Time left"
              content={
                <Typography
                  pt={0.5}
                  variant="h3"
                  component={"p"}
                  display={"inline"}
                  ml={0.5}
                >
                  {auctionNFT && (
                    <AuctionCountdown
                      endTime={dayjs.unix(
                        Number(auctionNFT.startTime) +
                          Number(auctionNFT.biddingPeriod)
                      )}
                    />
                  )}
                </Typography>
              }
            />
            <AuctionLabel
              label="Leading bid"
              content={
                <Typography pt={0.5} variant="h3" component={"p"}>
                  {auctionNFT?.highestBid
                    ? `💥${auctionNFT.highestBid}`
                    : `No bid`}
                </Typography>
              }
            />
          </Box>
          <FormGroup row={true} sx={{ width: "100%", pt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  id="bid"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  label="Bid"
                  name="bid"
                  required
                  type="number"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                    style: { color: theme.secondaryColor },
                  }}
                  InputProps={{
                    style: { color: theme.secondaryColor },
                  }}
                  value={bid}
                  onChange={(e) => {
                    setBid(Number(e.target.value));
                  }}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" size="large" sx={{ width: "100%" }}>
                  <Typography display={"inline"}>Bid at</Typography>
                  <Typography
                    display={"inline"}
                    sx={{ fontWeight: 600 }}
                    ml={0.5}
                  >
                    💥
                    {bid}
                  </Typography>
                  <Typography display={"inline"} ml={0.5}>
                    BMA
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </FormGroup>
          <Box mt={3} display="flex" justifyContent={"center"}>
            <Link
              href="https://dex.aldrin.com/swap?base=USDC&quote=BMA"
              target={"_blank"}
            >
              <Typography variant={"body2"}>
                Don't have any 💥BMA? Get some here.
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mt={1}>
          <Accordion
            expanded={accordionPanel === "bids"}
            onChange={() =>
              setAccordionPanel(accordionPanel !== "bids" ? "bids" : "")
            }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="bids-content"
              id="bids-header"
            >
              <Typography variant="h6">Bid History</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ p: 0, maxHeight: "300px", overflow: "scroll" }}
            >
              <List>
                {bids.map((bid, index) => (
                  <ListItem
                    key={bid + index}
                    sx={{ borderTop: `1px solid ${theme.tertiaryColor2}` }}
                  >
                    <ListItemAvatar>
                      <UserAvatar
                      // avatar={user?.avatar}
                      // isNFT={user?.data?.avatarMint}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography display={"inline"}>@harkl</Typography>
                          <Box>
                            <Typography
                              display={"inline"}
                              color={theme.secondaryColor}
                            >
                              bid
                            </Typography>{" "}
                            <Typography display={"inline"}>💥345</Typography>
                          </Box>
                        </Box>
                      }
                      secondary="5 hours ago"
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box mt={1}>
          <Accordion
            expanded={accordionPanel === "description"}
            onChange={() =>
              setAccordionPanel(
                accordionPanel !== "description" ? "description" : ""
              )
            }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="description-content"
              id="description-header"
            >
              <Typography variant="h6">Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {auctionNFT?.description || "No description present"}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box mt={1}>
          <Accordion
            expanded={accordionPanel === "details"}
            onChange={() =>
              setAccordionPanel(accordionPanel !== "details" ? "details" : "")
            }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="details-content"
              id="details-header"
            >
              <Typography variant="h6">Details</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: "hidden" }}>
              <ul>
                <li>
                  Mint address <strong>{auctionNFT?.tokenMint}</strong>
                </li>
                <li>On-chain Collection 6XxjK ... zNr</li>
                <li>Token address 5XgEo ... 7Hp</li>
                <li>Owner 4n8hb ... HyC</li>
                <li>Creator Royalties 9.99%</li>
                <li>Transaction Fee 2%</li>
                <li>Listing/Bidding/Cancel Free</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box mt={1}>
          <Accordion
            expanded={accordionPanel === "metadata"}
            onChange={() =>
              setAccordionPanel(accordionPanel !== "metadata" ? "metadata" : "")
            }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="metadata-content"
              id="metadata-header"
            >
              <Typography variant="h6">Metadata</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: "hidden" }}>
              <pre>
                {JSON.stringify(
                  {
                    item: "one",
                    name: "Boom Hero #420",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing",
                  },
                  null,
                  2
                )}
              </pre>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography mt={2} variant={"h4"}>
          Promo box
        </Typography>
      </Grid> */}
    </Grid>
  );
};
