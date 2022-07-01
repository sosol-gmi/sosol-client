import "linkify-plugin-hashtag";
import "linkify-plugin-mention";
import * as linkify from "linkifyjs";
import Linkify from "linkify-react";
import React, { useContext } from "react";
import moment from "moment";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { CommentIcon } from "../Icons";
import { EmojiTweet, Retweet } from "./index";
import { ImageBox } from "../ImageBox";
import { LAMPORTS_PER_SOL } from "../../constants/math";
import { Link } from "react-router-dom";
import { List as ReactionsList } from "../Reactions/List";
import { NFTTweet } from "../NFT/NFTTweet";
import { ThemeContext } from "../../contexts/theme";
import { TipCreator } from "../TipCreator";
import { TweetQuery, Reaction } from "../../generated/graphql";
import { UrlMetaData } from "../UrlMeta/UrlMetaData";
import { UserAvatar } from "../UserAvatar";
import { VideoContainer } from "../Giphy/VideoContainer";
import { setDate } from "../../utils";
import { styled } from "@mui/material/styles";
import { useReaction } from "../../hooks/useReaction";

interface Props {
  tweet: TweetQuery["tweet"];
}

const IconsStack = styled(Stack)((props) => ({
  "& svg": {
    width: "18px",
    height: "18px",
    "& path": {
      fill: props.theme.secondaryColor,
    },
  },
  "& :hover svg path": {
    fill: props.theme.accentColor,
  },
}));

const TweetBody = styled(Typography)((props) => ({
  a: { color: props.theme.accentColor },
}));

export const ShowTweet: React.FC<Props> = ({ tweet }: Props) => {
  const {
    id,
    text,
    // tags,
    user,
    files,
    gif,
    nft,
    // isTweetMine,
    isRetweet,
    retweetsCount,
    reactions,
    commentsCount,
    tipsCount,
    createdAt,
  } = tweet;

  const { theme } = useContext(ThemeContext);
  const { handleReaction } = useReaction({ tweetId: id });
  const handle = user && user.handle;

  const extractUrls = linkify.find(text).filter((u) => u.type === "url");
  const targetUrl = extractUrls[0]?.href;

  const linkifyOptions = {
    target: { url: "_blank" },
    formatHref: { hashtag: (href: any) => `explore?type=TAGS&term=${href.substring(1)}` },
  };
  return (
    <Grid
      item
      xs={12}
      mt={2}
      sx={{ position: "relative", padding: "0 1em", display: "flex" }}
    >
      <Box mr={2}>
        <Link to={`/${handle}`}>
          <UserAvatar
            className="avatar"
            avatar={user?.avatar as string}
            isNFT={user?.data?.avatarIsNFT ?? false}
          />
        </Link>
      </Box>
      <Box mt={1}>
        <Box display="flex">
          <Link to={`/${handle}`}>
            <Box display="flex" mr={1}>
              <Typography sx={{ fontWeight: "600", mr: 0.5 }}>
                {user && user.consumerName}
              </Typography>
              <Typography>{`@${handle}`}</Typography>
            </Box>
          </Link>
          <Link to={`/${handle}/status/${id}`} className="secondary">
            <Typography sx={{ color: theme.secondaryColor }}>
              {" "}
              {moment(setDate(createdAt)).fromNow()}
            </Typography>
          </Link>
        </Box>
        <Linkify options={linkifyOptions}>
          <TweetBody mb={0.75} sx={{ wordBreak: "break-word" }}>
            {text}
          </TweetBody>
        </Linkify>
        <UrlMetaData url={targetUrl} />
        <Box>
          {gif && <VideoContainer gif={gif} />}
          {nft && <NFTTweet nftData={nft} />}
          {files && !!files.length && (
            <ImageBox files={files} disablelightbox={false} />
          )}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          {reactions && reactions.length > 0 && (
            <ReactionsList
              reactions={reactions as Reaction[]}
              // @ts-ignore
              handleReaction={handleReaction}
              tweetId={id}
            />
          )}
          <IconsStack
            ml={0.7}
            spacing={3}
            direction="row"
            alignItems={"baseline"}
          >
            <Box pt={0.6}>
              <EmojiTweet handleReaction={handleReaction} />
            </Box>

            <Link to={`/${handle}/status/${id}`}>
              <Box display="flex" alignItems={"center"}>
                <CommentIcon />
                <Typography ml={0.5} sx={{ color: theme.secondaryColor }}>
                  {commentsCount ? commentsCount : null}
                </Typography>
              </Box>
            </Link>

            <Retweet
              id={id}
              isRetweet={isRetweet}
              retweetsCount={retweetsCount}
            />

            <TipCreator
              userPubKey={user?.publicAddress}
              tipAmount={tipsCount && parseInt(tipsCount) / LAMPORTS_PER_SOL}
              tweetId={id}
              userId={user?.id}
            />

            {/* {isTweetMine ? <DeleteTweet id={id} /> : null} */}
          </IconsStack>
        </Box>
      </Box>
    </Grid>
  );
};
