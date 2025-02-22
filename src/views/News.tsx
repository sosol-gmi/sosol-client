import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { CustomResponse } from "../components/CustomResponse";
import { Loader } from "../components/Loader";
import { NewsItem } from "../components/NewsItem";
import { alpha, Box, Grid, Typography, useTheme } from "@mui/material";
import { headerOffset } from "../utils/boom-web3/constants";
import { useSearchTweetsQuery } from "../generated/graphql";

export const News = () => {
  const theme = useTheme();
  const { data, loading, fetchMore } = useSearchTweetsQuery({
    variables: { term: "#news", type: "TAGS", limit: 20 },
  });

  if (loading)
    return (
      <Box mt={4}>
        <Loader />
      </Box>
    );

  return data?.searchTweets?.length ? (
    <Grid>
      <Grid item xs={12} sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            backgroundColor: alpha(theme.background2, 0.9),
            width: "100%",
            padding: "1rem",
            zIndex: 1,
          }}
        >
          <Typography variant="h3">Solana News</Typography>
        </Box>
      </Grid>
      <Grid
        container
        id="tweetScroll"
        sx={{
          maxHeight: headerOffset,
          overflow: "auto",
        }}
      >
        <Box mt={8}>
          <InfiniteScroll
            dataLength={data?.searchTweets?.length}
            next={() =>
              fetchMore({
                variables: {
                  offset: data?.searchTweets?.length ?? 0,
                },
              })
            }
            hasMore={true}
            scrollableTarget="tweetScroll"
            loader={
              loading && (
                <Box sx={{ marginTop: "1rem" }}>
                  <Loader />
                </Box>
              )
            }
          >
            {data?.searchTweets.map((meep) => (
              <NewsItem meep={meep} key={meep.id} />
            ))}
          </InfiniteScroll>
        </Box>
      </Grid>
    </Grid>
  ) : (
    <CustomResponse text="No Meeps found in the news feed" />
  );
};
