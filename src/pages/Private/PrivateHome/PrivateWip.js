import React from "react";
import Navbar from "../../../components/Navbar";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const PrivateWip = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item xs={12} sx={{ mb: 15 }}>
        <Navbar title={"En construction"} />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Avatar
            alt="page under construction"
            src={"/images/WIP.webp"}
            sx={{ width: 250, height: 250 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrivateWip;
