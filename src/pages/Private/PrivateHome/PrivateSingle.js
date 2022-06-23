import React, { useState } from "react";
import NumbersFieldInputs from "../../../components/NumbersFieldInputs";
import RadioInputs from "../../../components/RadioInputs";
import ambientText from "../../../data/frontEndText.json";
import Navbar from "../../../components/Navbar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
// styles
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// API
import { postLogin } from "../../../api/fetch";

// JSON
const TEXT = JSON.parse(JSON.stringify(ambientText));
//
export default function PrivateSingle() {
  const [flow, setFlow] = useState(false);
  const [pressure, setPressure] = useState(false);
  const [temperature, setTemperature] = useState(false);
  const [workedTime, setWorkedTime] = useState(false);
  const [dust, setDust] = useState(false);
  const [water, setWater] = useState(false);
  const [cov, setCov] = useState(false);
  // Dynamic styles
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStyles = {
    ...(matchesXS && {
      mr: 0,
    }),
    ...(matchesMD && {
      mr: 20,
    }),
  };
  // Fonction test des champs retourne le resultats du backend
  function sendingDatas() {
    const payload = {
      flow: flow ? parseInt(flow, 10) : false,
      pressure: pressure ? parseFloat(pressure) : false,
      temperature: temperature ? parseInt(temperature, 10) : false,
      workedTime: workedTime ? parseInt(workedTime, 10) : false,
      dust: dust ? parseInt(dust, 10) : false,
      water: water ? parseInt(water, 10) : false,
      cov: cov ? parseInt(cov, 10) : false,
    };
    // Checking data from payload before sending to backend
    for (const value of Object.values(payload)) {
      if (!value) {
        return alert("Valeurs incorrects");
      }
    }
    const resultFromOutside = postLogin(payload);
    return false;
  }
  //
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item xs={12} sx={{ mb: 7 }}>
        <Navbar title={"Conception unitaire"} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={3}
          >
            <Grid item xs={12} sm={6}>
              <NumbersFieldInputs data={TEXT.flow} result={setFlow} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <NumbersFieldInputs data={TEXT.pressure} result={setPressure} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <NumbersFieldInputs
                data={TEXT.temperature}
                result={setTemperature}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <NumbersFieldInputs
                data={TEXT.workingHours}
                result={setWorkedTime}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioInputs data={TEXT.dust} result={setDust} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioInputs data={TEXT.water} result={setWater} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioInputs data={TEXT.cov} result={setCov} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <IconButton
              aria-label="Picture"
              onClick={sendingDatas}
              disableFocusRipple={true}
              disableRipple={true}
            >
              <Avatar
                alt="cube"
                src={"/images/cube1.png"}
                sx={{ width: 300, height: 300, ...dynamicStyles }}
              />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
