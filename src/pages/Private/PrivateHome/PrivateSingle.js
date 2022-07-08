import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import FieldInput from "../../../components/FieldInput";
import RadioInputs from "../../../components/RadioInputs";
import ambientText from "../../../data/frontEndText.json";
import Navbar from "../../../components/Navbar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
// styles
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// API
import { callApi } from "../../../api/callApiSingleCompressor";
import SelectInput from "../../../components/SelectInput";

// JSON
const TEXT = JSON.parse(JSON.stringify(ambientText));

export default function PrivateSingle() {
  // Contexte
  const currentUser = useContext(UserContext);
  const [userEmail] = useState(currentUser.currentUser.email);
  // Data from components
  const [flow, setFlow] = useState(false);
  const [pressure, setPressure] = useState(false);
  const [temperature, setTemperature] = useState(false);
  const [workedTime, setWorkedTime] = useState(false);
  const [dust, setDust] = useState(false);
  const [water, setWater] = useState(false);
  const [cov, setCov] = useState(false);
  const [cooler, setCooler] = useState(false);
  const [regeneration, setRegeneration] = useState(false);
  // Call API stuff
  const [responseFromApiCall, setResponseFromApiCall] = useState(true);
  const [image, setImage] = useState("/images/cube1.png");
  const [themeColor, setThemeColor] = useState(TEXT.themeColor);
  // Dynamic styles
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStyles = {
    ...(matchesXS && {
      mt: 5,
      mb: 3,
      width: 250,
      height: 250,
    }),
    ...(matchesMD && {
      width: 350,
      height: 350,
    }),
  };
  // Fonction test des champs retourne le resultats du backend
  async function sendDataToAPI() {
    const payload = {
      flow: flow ? parseInt(flow, 10) : false,
      pressure: pressure ? parseFloat(pressure) : false,
      temperature: temperature ? parseInt(temperature, 10) : false,
      workedTime: workedTime ? parseInt(workedTime, 10) : false,
      dust: dust ? parseInt(dust, 10) : false,
      water: water ? parseInt(water, 10) : false,
      cov: cov ? parseInt(cov, 10) : false,
      cooler: parseInt(cooler, 10),
      regeneration: parseInt(regeneration, 10),
    };
    // Checking data from payload before sending to backend
    for (const value of Object.values(payload)) {
      if (!value) {
        return alert("Valeurs incorrectes");
      }
    }
    // Event = return from callApi function : True all is ok , false something wrong append
    const event = await callApi(payload, userEmail);
    setResponseFromApiCall(event);
    return false;
  }
  useEffect(() => {
    if (responseFromApiCall) {
      setImage("/images/cube1.png");
      setThemeColor(TEXT.themeColor);
    } else {
      setImage("/images/cube1f.png");
      setThemeColor(TEXT.themeColorFalse);
    }
  }, [responseFromApiCall, image]);
  //
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item xs={12} sx={{ mb: "8vh" }}>
        <Navbar title={"Conception unitaire"} />
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={0}
          >
            <Grid item xs={12} sm={6}>
              <FieldInput
                data={TEXT.flow}
                color={themeColor}
                result={setFlow}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FieldInput
                data={TEXT.pressure}
                color={themeColor}
                result={setPressure}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FieldInput
                data={TEXT.temperature}
                color={themeColor}
                result={setTemperature}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FieldInput
                data={TEXT.workingHours}
                color={themeColor}
                result={setWorkedTime}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <IconButton
              aria-label="Picture"
              onClick={sendDataToAPI}
              disableFocusRipple={true}
              disableRipple={true}
            >
              <Avatar alt="cube" src={image} sx={{ ...dynamicStyles }} />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={0}
          >
            <Grid item xs={12} sm={6}>
              <RadioInputs
                data={TEXT.dust}
                color={themeColor}
                result={setDust}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioInputs
                data={TEXT.water}
                color={themeColor}
                result={setWater}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioInputs data={TEXT.cov} color={themeColor} result={setCov} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SelectInput
                data={TEXT.materials}
                color={themeColor}
                result={setCooler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInput
                data={TEXT.regeneration}
                color={themeColor}
                result={setRegeneration}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sx={{ mt: 7 }}>
          <Button
            variant="contained"
            size="large"
            onClick={sendDataToAPI}
            sx={{
              color: "#1d1a25",
              width: "10vw",
              height: "4vh",
              backgroundColor: themeColor,
              mt: 6,
              borderRadius: 1,
            }}
          >
            Print
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
