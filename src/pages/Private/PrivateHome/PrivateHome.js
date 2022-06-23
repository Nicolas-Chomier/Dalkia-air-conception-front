import React from "react";
import Navbar from "../../../components/Navbar";
import Grid from "@mui/material/Grid";
import ServiceCard from "../../../components/ServiceCard";

const PrivateHome = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid
        item
        xs={12}
        sx={{
          minHeight: "8vh",
          minWidth: "100vw",
        }}
      >
        <Navbar title={""} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
        columnSpacing={0}
        sx={{
          minHeight: "92vh",
          minWidth: "100vw",
          alignContent: "center",
        }}
      >
        <Grid item xs={12} sm={3}>
          <ServiceCard
            text={"Conception"}
            text2={"unitaire"}
            image={"/cube1.png"}
            path={"/private/private-single"}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <ServiceCard
            text={"Conception"}
            text2={"multiple"}
            image={"/cube2.png"}
            path={"/private/private-wip"}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <ServiceCard
            text={"Architecture"}
            text2={"automate"}
            image={"/cube3.png"}
            path={"/private/private-wip"}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <ServiceCard
            text={"Surveillance"}
            text2={"Systeme"}
            image={"/cube4.png"}
            path={"/private/private-wip"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrivateHome;
