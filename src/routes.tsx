import React, { useContext, useEffect } from "react";
import { AccountsProvider } from "./contexts/accounts";
import { AppHeader } from "./components/AppHeader";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { EditProfile } from "./components/Profile/EditProfile";
import {
  Home,
  Suggestion,
  Nav,
  ConnectView,
  Notifications,
  Following,
} from "./views";
import { MarketProvider } from "./contexts/market";
import { MasterTweet } from "./components/Tweet/MasterTweet";
import { Profile } from "./components/Profile/Profile";
import { Wallet } from "./contexts/wallet";
import { Container, Grid } from "@mui/material";
import { ThemeContext } from "./contexts/theme";
import { GiphyContextProvider } from "./contexts/giphy";
import { UserContext } from "./contexts/user";
import { useQuery } from "@apollo/client";
import { PROFILE } from "./queries/profile";

interface Props {
  setAppProfile: React.Dispatch<React.SetStateAction<undefined>>
}

export const AppRoutes: React.FC<Props> = ({ setAppProfile }) => {
  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  const { loading, data, refetch } = useQuery(PROFILE, {
    variables: { handle: user?.handle },
  });

  useEffect(() => {
    setAppProfile(data);
  }, [data, setAppProfile])

  const middleColStyles = {
    borderRight: `1px solid ${theme.tertiaryColor}`,
    borderLeft: `1px solid ${theme.tertiaryColor}`,
  };

  return (
    <>
      <BrowserRouter basename={"/"}>
        <Wallet>
          <AccountsProvider>
            <MarketProvider>
              <GiphyContextProvider>
                <AppHeader />
                <Container maxWidth="lg">
                  <Grid container>
                    <Grid item xs={2} sm={1} md={2}>
                      <Nav user={user} profile={data?.profile} />
                    </Grid>
                    <Grid item xs={10} sm={11} md={7} sx={middleColStyles}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="following" element={<Following />} />
                        <Route path="connect" element={<ConnectView />} />
                        <Route
                          path="notifications"
                          element={<Notifications refetchProfile={refetch} />}
                        />
                        <Route
                          path=":handle/status/:tweetId"
                          element={<MasterTweet />}
                        />
                        <Route
                          path="settings/profile"
                          element={
                            <EditProfile
                              loading={loading}
                              data={data}
                              setUser={setUser}
                            />
                          }
                        />
                        <Route path=":handle" element={<Profile />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                      </Routes>
                    </Grid>
                    <Grid
                      item
                      md={3}
                      display={{ xs: "none", sm: "none", md: "block" }}
                    >
                      <Suggestion />
                    </Grid>
                  </Grid>
                </Container>
              </GiphyContextProvider>
            </MarketProvider>
          </AccountsProvider>
        </Wallet>
      </BrowserRouter>
    </>
  );
}
