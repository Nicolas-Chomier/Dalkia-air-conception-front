import React from "react";
//import { UserContext } from "../context/userContext";
import SignInModal from "../components/SignInModal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Home() {
  /*  const { currentUser } = useContext(UserContext);
  console.log("currentUser", currentUser);  */
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          background:
            "rgb(28,24,38) linear-gradient(10deg, rgba(28,24,38,1) 0%, rgba(72,80,170,1) 100%)",
        }}
      >
        <Grid item xs={12} sm={12} md={7}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="h1">DALKIA</Typography>
            <Typography variant="h2" align="center">
              Air Conception
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={0}
          >
            <SignInModal />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
