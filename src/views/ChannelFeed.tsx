import React, { useContext, useEffect, useRef, useState } from "react";
import { MeepFeed } from "../components/MeepFeed";
import { NewMessage } from "../components/Message/NewMessage";
import {
  TypingSubscription,
  useGetChannelByIdQuery,
  useGetCollectionQuery,
  useTypingSubscription,
  useUpdateTypingStatusMutation,
} from "../generated/graphql";
import { useParams } from "react-router-dom";
import { useChannelData } from "../hooks/useChannelData";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  debounce,
  useTheme,
} from "@mui/material";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { UserContext } from "../contexts/user";
import { TypingDots } from "../components/TypingDots";
import { BOOM_CHANNEL_ID, BOOM_COLLECTION_MINT_PUBLIC_KEY } from "../utils/ids";
import { CollectionStats } from "../components/Channel/CollectionStats";
// import { CollectionGallery } from "../components/Channel/CollectionGallery";
import { headerOffset } from "../utils/boom-web3/constants";
import { getRandomFromArr } from "../utils";
import { Loader } from "../components/Loader";

function formatUserHandles(users: TypingSubscription["typing"]) {
  if (users?.length === 1) {
    return `@${users[0].user?.handle}`;
  } else {
    const handles = users?.map((user) => `@${user.user?.handle}`);
    const lastHandle = handles?.pop();
    return handles?.join(", ") + " and " + lastHandle;
  }
}

export const ChannelFeed: React.FC = () => {
  const [validNFT, setValidNFT] = useState(false);
  const [hero, setHero] = useState({
    price: 1,
    tokenMint: "4hVEfTPk5eLhX9tP4ENaySkjYfWnrePzMdjcH6A1DUJE",
    rarity: {
      moonrank: {
        rank: 0,
      },
    },
    extra: {
      img: "https://arweave.net/gZSfTkhEe7pbu5Cnp2W9EkO6wk3bVmFYkjIlJBoqy5M?ext=png",
    },
  });
  const { channelId } = useParams();
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const scrollRef = useRef<HTMLDivElement>();
  const { user } = useContext(UserContext);
  const theme = useTheme();
  useChannelData();

  const [updateTypingStatusMutation] = useUpdateTypingStatusMutation();
  const { data: typingdata } = useTypingSubscription({
    variables: { channelId: BOOM_CHANNEL_ID },
  });
  const { data: { getCollection: collection } = {} } = useGetCollectionQuery({
    variables: {
      name: "boomheroes",
    },
  });
  const { loading, error, data, fetchMore, refetch } = useGetChannelByIdQuery({
    variables: {
      channelId: channelId as string,
      offset: 0,
      limit: 10,
    },
    fetchPolicy: "network-only",
    pollInterval: 10000,
  });

  let typingTimeout: any;
  const handleTyping = () => {
    const userId = user?.id;
    if (userId) {
      clearTimeout(typingTimeout);
      updateTypingStatusMutation({
        variables: { channelId: BOOM_CHANNEL_ID, isTyping: true },
      });

      // User stopped typing
      typingTimeout = setTimeout(() => {
        updateTypingStatusMutation({
          variables: { channelId: BOOM_CHANNEL_ID, isTyping: false },
        });
      }, 10000);
    }
  };
  const debouncedTypingHandler = debounce(handleTyping, 500);

  useEffect(() => {
    (async () => {
      if (data) {
        setValidNFT(true);
      }
      if (error?.message) {
        setValidNFT(false);
      }
    })();
  }, [publicKey, connection, data, error]);

  useEffect(() => {
    if (collection) {
      setHero(getRandomFromArr(collection.listings));
    }
  }, [collection]);

  useEffect(() => {
    refetch({
      channelId: channelId as string,
      offset: 0,
    });
    scrollRef?.current?.scrollIntoView();
  }, [channelId]);

  if (loading) return <Loader />;

  return validNFT ? (
    <Box>
      <MeepFeed
        loading={loading}
        error={error}
        data={data?.getChannelById}
        fetchMore={fetchMore}
        scrollRef={scrollRef}
      />
      <Box sx={{ position: "relative" }}>
        {typingdata?.typing && typingdata?.typing.length ? (
          <Stack
            p={1}
            sx={{
              backgroundColor: theme.blue.darkest,
              position: "absolute",
              top: -36,
              width: "100%",
            }}
            direction="row"
            spacing={0.5}
          >
            <Typography display="inline" variant="body2">
              {formatUserHandles(typingdata.typing)} is typing <TypingDots />
            </Typography>
          </Stack>
        ) : null}
        <NewMessage
          channel={channelId}
          scrollRef={scrollRef}
          typingHandler={debouncedTypingHandler}
        />
      </Box>
    </Box>
  ) : (
    <Box sx={{ overflow: "auto", maxHeight: headerOffset }}>
      <Typography variant="h2" p={2} textAlign="center">
        Welcome to the Boom Heroes DAO
      </Typography>
      <Box maxWidth="100%" sx={{ position: "relative" }}>
        <img src={hero.extra.img} width="100%" />
        <Button
          variant="contained"
          size="small"
          sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          href={`https://magiceden.io/item-details/${hero.tokenMint}`}
          target="_blank"
        >
          <Box display="inline" pt={0.9} mr={0.5}>
            <img src="/assets/magic-eden-logo.png" width="16px" />
          </Box>
          Rank {hero.rarity.moonrank.rank} | ◎{hero.price}
        </Button>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "1rem",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
          }}
        >
          <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
            <strong>Description:</strong> The #BoomDAODAO is the first Solana
            native social DAO where everything happens on a single site directly
            on-chain.
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
            <strong>Goals:</strong> This DAOs primary focus is to design the the
            way forward for Boom DAOs in the Solana ecosystem, and to build a
            community of like-minded individuals who are passionate about the
            future of Solana.
          </Typography>
          <CollectionStats info={collection?.info} />
          <Divider sx={{ pt: "1rem", mb: "1rem" }} />
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginBottom: "1rem" }}
          >
            <Button
              variant="contained"
              href="https://www.tensor.trade/trade/boomheroes"
              target="_blank"
            >
              #BoomHeroes on Tensor
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <CollectionGallery listings={collection?.listings} /> */}
    </Box>
  );
};
