import { Box, Typography } from "@mui/material";
import { Emoji } from "emoji-mart";
import { HARKL_ID } from "../../utils/utils";
import { HerofiedIcon } from "../Icons";
import { Link } from "react-router-dom";
import { Mention } from "../../generated/graphql";
import { ThemeContext } from "../../contexts/theme";
import { UserAvatar } from "../UserAvatar";
import { useContext } from "react";
import moment from "moment";
import { setDate } from "../../utils";
import { ShowTweet } from "../Tweet";

export const Notification = ({ mention }: { mention: Mention }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box p={2} sx={{ borderBottom: `1px solid ${theme.tertiaryColor}` }}>
      {mention.user && (
        <Box display={"flex"}>
          <Box mr={0.5} position="relative">
            <Link to={`/${mention.user.handle}`}>
              <UserAvatar
                className="avatar"
                avatar={mention.user?.avatar as string}
                isNFT={mention.user?.data?.avatarMint}
                sx={{
                  width: "1.1rem",
                  height: "1.1rem",
                  marginTop: "0.2rem",
                }}
              />
            </Link>
          </Box>
          <Link to={`/${mention.user.handle}`}>
            <Typography
              display={"inline"}
              variant="body2"
              color={theme.secondaryColor}
              sx={{ fontWeight: "600", mr: 0.5 }}
            >
              {mention.user.consumerName}
            </Typography>
            <Typography
              display={"inline"}
              mr={0.5}
              variant="body2"
              color={theme.secondaryColor}
            >{`@${mention.user.handle}`}</Typography>
            {mention.user?.data?.avatarUpdateAuthority === HARKL_ID && (
              <Typography display={"inline"}>
                <HerofiedIcon
                  sx={{
                    fill: theme.accentColor,
                    width: "0.8rem",
                    height: "0.8rem",
                    verticalAlign: "-2px",
                  }}
                />
              </Typography>
            )}
          </Link>
          {mention.type && mention.type.includes("emoji:") && (
            <Box>
              <Typography
                variant="body2"
                color={theme.secondaryColor}
                display={"inline"}
                pl={0.5}
              >
                reacted{" "}
                <Box
                  display={"inline"}
                  sx={{
                    "& .emoji-mart-emoji": { verticalAlign: "-3px" },
                  }}
                >
                  <Emoji emoji={mention.type.split(":")[1]} size={16} />
                </Box>
              </Typography>
            </Box>
          )}
          {mention.type === "reply" && (
            <Typography
              variant="body2"
              color={theme.secondaryColor}
              display={"inline"}
              pl={0.5}
              pt={"3px"}
            >
              replied to your meep
            </Typography>
          )}
          {mention.type === "mention" && (
            <Typography
              variant="body2"
              color={theme.secondaryColor}
              display={"inline"}
              pl={0.5}
              pt={"3px"}
            >
              mentioned you in a meep
            </Typography>
          )}
          <Typography
            variant="body2"
            color={theme.secondaryColor}
            display={"inline"}
            pl={0.5}
            pt={"3px"}>{moment(setDate(mention.createdAt)).fromNow()}</Typography>
        </Box>
      )}
      {mention.tweet && <ShowTweet key={mention.id} tweet={mention.tweet} overideMt={1} ></ShowTweet>}
    </Box>
  );
};
