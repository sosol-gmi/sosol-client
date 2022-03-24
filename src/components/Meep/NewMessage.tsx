import Button from "../../styles/Button";
import { AttributionLink } from "../Giphy/AttributionLink";
import { Box } from "@mui/system";
import {
  ChannelFeedDocument,
  FeedDocument,
  useNewTweetMutation,
} from "../../generated/graphql";
import { EmojiPicker } from "../Emojis/EmojiPicker";
import { ImageBox } from "../ImageBox";
import { NFTPicker } from "../NFT/NFTPicker";
import { NFTTweet } from "../NFT/NFTTweet";
import { SIGN_FILE } from "../../queries/files";
import { SearchModal } from "../Giphy/SearchModal";
import { Stack, Avatar, TextareaAutosize } from "@mui/material";
import { TWEET } from "../../queries/tweet";
import { USER } from "../../queries/client";
import { UploadFileIcon } from "../Icons";
import { VideoContainer } from "../Giphy/VideoContainer";
import { displayError, uploadFile } from "../../utils";
import { styled } from "@mui/material/styles";
import { useInput } from "../../hooks/useInput";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useState } from "react";

interface Props {
  feed?: any;
  parentTweet?: string | undefined;
  channel?: string | undefined;
  ref: React.MutableRefObject<HTMLDivElement | undefined>;
}

export const NewMessage: React.FC<Props> = ({ feed, parentTweet, channel }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [gif, setGif]: any = useState(null);
  const [nftData, setNftData] = useState(null);
  const [tweetFiles, setTweetFiles]: any = useState([]);
  const tweet = useInput("");

  const [newTweetMutation, { loading }] = useNewTweetMutation({
    refetchQueries: [
      FeedDocument,
      ChannelFeedDocument,
      {
        query: TWEET,
        variables: { id: parentTweet },
      },
    ],
  });
  const [signFileMutation] = useMutation(SIGN_FILE);

  const createGifInput = (gif: any) => ({
    title: gif.title,
    fixedHeightUrl: gif.images.fixed_height.mp4,
    originalUrl: gif.images.original.mp4,
  });

  const handleNewTweet = async (e: any) => {
    e.preventDefault();

    // a tweet can have no text body if it has a gif
    if (!tweet.value && !gif && !tweetFiles.length && !nftData)
      return enqueueSnackbar("Write something...", { variant: "info" });

    const tags = tweet.value.split(" ").filter((str) => str.startsWith("#"));
    const mentions = tweet.value
      .split(" ")
      .filter((str) => str.startsWith("@"));

    try {
      await newTweetMutation({
        variables: {
          text: tweet.value,
          tags,
          mentions,
          gif: gif ? createGifInput(gif) : null,
          nft: nftData,
          files: tweetFiles,
          parentTweet,
          channel,
        },
      });

      setNftData(null);
      enqueueSnackbar("Your tweet has been posted", { variant: "success" });
    } catch (err) {
      console.log(err);
      return displayError(err, enqueueSnackbar);
    }

    tweet.setValue("");
    setTweetFiles([]);
    setGif(null);
  };

  const handleTweetFiles = async (e: any) => {
    try {
      if (tweetFiles.length >= 4) {
        return enqueueSnackbar("You can only upload a maximum of 4 files", {
          variant: "error",
        });
      }

      const file = e.target.files[0];
      const { data } = await signFileMutation({
        variables: {
          file: file.name,
          type: file.type,
        },
      });
      const signedUrl = data.signFileUrl;
      const imageData = await uploadFile(file, signedUrl, enqueueSnackbar);
      const imageUrl = imageData?.config?.url?.split("?")[0];
      setTweetFiles([...tweetFiles, imageUrl]);
    } catch (error) {
      console.log(error);
    } finally {
      // reset value so the input event handler can trigger again
      e.target.value = null;
    }
  };

  const { data } = useQuery(USER);

  const mapTweetFiles = (url: string, index: number) => ({
    url,
    id: `preview-${index}`,
  });

  return (
    <Box>
      <Avatar src={data?.me?.avatar} />
      <form onSubmit={handleNewTweet}>
        <TextareaAutosize
          placeholder="What's happening?"
          value={tweet.value}
          onChange={tweet.onChange}
        />

        {gif && (
          <Box sx={{ marginBottom: 2 }}>
            <Stack direction="column">
              <VideoContainer
                gif={createGifInput(gif)}
                onClose={() => setGif(null)}
              />
              <AttributionLink src={gif.url} />
            </Stack>
          </Box>
        )}

        {nftData && <NFTTweet nftData={nftData} />}

        {!!tweetFiles.length && (
          <ImageBox files={tweetFiles.map(mapTweetFiles)} />
        )}

        <EmojiPicker
          emojiHandler={(pickedEmoji: any) =>
            tweet.setValue(tweet.value + pickedEmoji.native)
          }
        />

        {!tweetFiles.length && !nftData && <SearchModal setGif={setGif} />}

        {!gif && !nftData && (
          <>
            <label htmlFor="file-input">
              <span className="file-upload-icon">
                <UploadFileIcon />
              </span>
            </label>
            <input
              id="file-input"
              accept="image/*"
              type="file"
              onChange={handleTweetFiles}
            />
          </>
        )}

        {!tweetFiles.length && !gif && <NFTPicker setNftData={setNftData} />}
        <Button sm="true" disabled={loading}>
          Post
        </Button>
      </form>
    </Box>
  );
};
