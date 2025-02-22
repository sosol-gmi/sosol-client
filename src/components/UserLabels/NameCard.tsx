import React from "react";
import { Box, Link, useTheme } from "@mui/material";
import { HARKL_ID } from "../../utils/utils";
import { HerofiedIcon } from "../Icons";

import { User } from "@sentry/react";
import { Maybe } from "../../generated/graphql";

interface NCProps {
  user: Maybe<User> | undefined;
}

export const NameCard: React.FC<NCProps> = ({ user }) => {
  const theme = useTheme();
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Link
        href={`/${user?.handle}`}
        sx={{
          textDecoration: "none",
          wordWrap: "break-word",
          fontSize: "1rem",
        }}
      >
        <strong>@{user?.handle}</strong>
        {user?.data?.avatarUpdateAuthority === HARKL_ID && (
          <HerofiedIcon
            sx={{
              fill: theme.accentColor,
              width: "1rem",
              height: "1rem",
              verticalAlign: "-3px",
              marginLeft: "0.2rem",
              opacity: "0.5",
            }}
          />
        )}
      </Link>
    </Box>
  );
};
