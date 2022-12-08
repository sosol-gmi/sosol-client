import "linkify-plugin-hashtag";
import "linkify-plugin-mention";
import * as linkify from "linkifyjs";
import Linkify from "linkify-react";
import React, { useContext } from "react";
import moment from "moment";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { CommentIcon } from "../Icons";
import { EmojiTweet, Retweet, ShowTweet } from "./index";
import { ImageBox } from "../ImageBox";
import { LAMPORTS_PER_SOL } from "../../constants/math";
import { Link } from "react-router-dom";
import { List as ReactionsList } from "../Reactions/List";
import { NFTTweet } from "../NFT/NFTTweet";
import { Theme, ThemeContext } from "../../contexts/theme";
import { TipCreator } from "../TipCreator";
import { TweetQuery, Reaction, Tweet } from "../../generated/graphql";
import { UrlMetaData } from "../UrlMeta/UrlMetaData";
import { UserAvatar } from "../UserAvatar";
import { VideoContainer } from "../Giphy/VideoContainer";
import { setDate } from "../../utils";
import { styled } from "@mui/material/styles";
import { useReaction } from "../../hooks/useReaction";
import { HARKL_ID } from "../../utils/utils";

interface Props {
  tweet: TweetQuery["tweet"];
}

export const TweetThread: React.FC<Props> = ({ tweet }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { childTweets } = tweet;
  // slice array to 3 tweets
  const slicedChildTweets = childTweets?.slice(0, 3);
  const isThreaded = (slicedChildTweets && slicedChildTweets.length > 0) ?? false;
  
  return (
    <Grid item>
      <ShowTweet key={tweet.id} tweet={tweet as Tweet} threaded={isThreaded}/>
      {slicedChildTweets?.length ?
        slicedChildTweets.map(
          (tweet) =>
            tweet && (
              <Grid item xs={12} key={tweet.id}>
                <ShowTweet key={tweet.id} tweet={tweet as Tweet} threaded={isThreaded}/>
              </Grid>
            )
        ) : null}
      {(tweet.user && childTweets?.length && childTweets.length > 3) ? (
        <Grid item xs={12}>
          <Box mx={2} mt={1}>
            <Link
              style={{ cursor: "pointer", color: theme.accentColor }}
              to={`/${tweet.user.handle}/status/${tweet.id}`}
            >
              Show this thread
            </Link>
          </Box>
        </Grid>
      ) : null}
    </Grid>
  );
};
