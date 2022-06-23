import React from "react";
import Navbar from "../../../components/Navbar";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const PrivateWip = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item xs={12} sx={{ mb: 20 }}>
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
            sx={{ width: 700, height: 700 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrivateWip;
