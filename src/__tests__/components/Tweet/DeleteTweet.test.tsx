import React from "react";
import { MasterTweet } from "../../../components/Tweet/MasterTweet";
import renderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import {
  TOGGLE_REACTION,
  TWEET,
  DELETE_TWEET,
} from "../../../queries/tweet/index";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

export const __mocks__: any = [
  {
    request: {
      query: DELETE_TWEET,
      variables: {
        id: "cl084xdy815761s0n5omoxoem0",
      },
    },
    result: {
      data: {},
      errors: "An error occurred",
    },
  },
];

const Tweet: any = {
  id: "cl084xdy815761s0n5omoxoem0",
  text: "testing after changes in input converted to ts",
  tags: [],
  isTweetMine: true,
  commentsCount: 1,
  retweetsCount: 0,
  isRetweet: false,
  tipsCount: "0",
  createdAt: "1646139451616",
  parentTweet: null,
  files: [],
  gif: null,
  nft: null,
  user: {
    id: "ckzny1iv10031lmn568gj3b3n",
    publicAddress: "JBZ52cKhHiFJdzQBNWnp3Xy2jHgDgkhWwSLWoNgLNxD4",
    avatar: "",
    handle: "shy-cloud-4965",
    consumerName: "shy-cloud-4965",
    __typename: "User",
  },
  reactions: [
    {
      id: "cl0c774p371312s0n533u0b29k",
      emojiId: "+1",
      skin: 1,
      isMine: true,
      count: 1,
      __typename: "Reaction",
    },
  ],
  __typename: "Tweet",
};

test("Delete Tweet Snapshot testing ...", async () => {
  let rendered;
  await act(async () => {
    rendered = render(
      <MockedProvider mocks={__mocks__} addTypename={false}>
        <SnackbarProvider>
          <MasterTweet />
        </SnackbarProvider>
      </MockedProvider>
    );
  });
  expect(rendered).toMatchSnapshot();
});
