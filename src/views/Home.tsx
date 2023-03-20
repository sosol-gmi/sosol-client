import React from "react";
import { FeedList } from "../components/FeedList";
import {
  useFeedQuery,
  Tweet,
  useNewMeepsCountQuery,
} from "../generated/graphql";

export const Home: React.FC = () => {
  const {
    loading,
    error,
    data,
    fetchMore,
    refetch: refetchData,
  } = useFeedQuery({
    variables: {
      offset: 0,
      limit: 10,
      global: true,
    },
  });

  console.log("data", data);

  const { data: newMeepsCount, refetch: refetchCount } = useNewMeepsCountQuery({
    variables: {
      date: data?.feed[0].createdAt,
    },
    pollInterval: 60000,
  });

  return (
    <>
      <FeedList
        loading={loading}
        error={error}
        data={data?.feed as Array<Tweet>}
        fetchMore={fetchMore}
        refetchData={refetchData}
        refetchCount={refetchCount}
        newMeeps={newMeepsCount?.newMeepsCount}
      />
    </>
  );
};
