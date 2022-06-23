import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const color = "#4850aa";
const styles = {
  border: 1,
  width: "100%",
  borderColor: "#323232",
  borderRadius: "15px",
  maxWidth: 370,
  minWidth: 290,
};
const typoStyle = {
  borderRadius: 1,
  input: { color: "black" },
  "& label.Mui-focused": {
    color: color,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: color,
    },
    "&:hover fieldset": {
      borderColor: color,
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
};
const SignInModal = () => {
  const { toggleModals, signIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [validation, setValidation] = useState("");
  const [errorState, setErrorState] = useState(false);
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  //const formRef = useRef();
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      /* const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      ); */
      await signIn(inputs.current[0].value, inputs.current[1].value);
      setValidation("");
      setErrorState(false);
      toggleModals("close");
      navigate("/private/private-home");
    } catch (err) {
      setErrorState(true);
      setValidation("Email & password incorrect");
    }
  };

  return (
    <Card sx={styles}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <CardContent>
          <Typography variant="h3" component="h3">
            log in
          </Typography>
        </CardContent>
        <CardActions>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={0.5}
          >
            <Typography variant="subtitle1" component="div">
              Email
            </Typography>
            <TextField
              sx={typoStyle}
              id="email-adress"
              label={errorState ? validation : "Adresse Email"}
              variant="outlined"
              inputRef={addInputs}
              error={errorState}
            />
          </Stack>
        </CardActions>
        <CardActions>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={0.5}
          >
            <Typography variant="subtitle1" component="div">
              Mot de passe
            </Typography>
            <TextField
              sx={typoStyle}
              id="password"
              label={errorState ? validation : "Mot de passe"}
              variant="outlined"
              inputRef={addInputs}
              error={errorState}
              type="password"
            />
          </Stack>
        </CardActions>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            onClick={handleForm}
            sx={{ backgroundColor: color, px: 3, py: 1, mt: 1 }}
          >
            Connexion
          </Button>
        </CardActions>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="subtitle1" component="div">
              Pas encore inscrit ?
            </Typography>
            <Tooltip title="nicolas.chomier@dalkiaairsolutions.fr">
              <IconButton>
                <AlternateEmailIcon sx={{ color: color, fontSize: 25 }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default SignInModal;
