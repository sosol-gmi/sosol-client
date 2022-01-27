import React from "react";
import { CustomResponse } from "./CustomResponse";
import styled from "styled-components";
import { Loader } from "./Loader";
import { ShowTweet } from "./Tweet";
import { ApolloError } from "@apollo/client";
import { FeedQuery, Tweet } from "../generated/graphql";
import { Box } from "@mui/system";

const Wrapper = styled.div`
  margin-bottom: 7rem;
`;

interface Props {
  loading: boolean;
  error: ApolloError | undefined;
  data: FeedQuery | undefined;
}

export const FeedList: React.FC<Props> = ({ loading, error, data }) => {
  if (loading)
    return (
      <Box sx={{ marginTop: "1rem" }}>
        <Loader />
      </Box>
    );
  if (error) return <CustomResponse text={error.message} />;

  // logout the user if removed from db
  if (data === undefined) {
    localStorage.clear();
  }

  return (
    <Wrapper>
      {data?.feed?.length ? (
        data.feed.map((tweet) => (
          <ShowTweet
            key={tweet.id}
            tweet={tweet as Tweet}
          />
        ))
      ) : (
        <CustomResponse text="Follow some people to get some feed updates" />
      )}
    </Wrapper>
  );
};
