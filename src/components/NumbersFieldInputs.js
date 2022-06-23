import React, { useRef, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
// styles
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const RE = /-?\d+(\.\d*)?/;

function testNumberOnly(value, maximum, regex) {
  const arrayOfValue = value.toLowerCase().match(regex);
  if (arrayOfValue) {
    const realValue = arrayOfValue[0];
    return realValue > maximum ? false : realValue;
  } else {
    return false;
  }
}

const NumbersFieldInputs = ({ data, result }) => {
  const title = data.title;
  const label = data.label;
  const size = data.inputSize;
  const unit = data.unit;
  const toolTip = data.toolTip;
  const maximum = data.maximumValue;
  const color = data.themeColor;
  //
  const textFieldRef = useRef("");
  const [text, setText] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  //
  useEffect(() => {
    if (text !== "") {
      const checkValue = testNumberOnly(text, maximum, RE);
      result(checkValue);
      setErrorStatus(checkValue ? false : true);
    }
  }, [text, maximum, result]);
  // Dynamic styles
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStyles = {
    ...(matchesXS && {
      bgcolor: "transparent",
      minWidth: 50,
    }),
    ...(matchesMD && {
      bgcolor: "transparent",
      minWidth: 150,
    }),
  };
  //

  //
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        /* border: 1,
        borderRadius: "6px",
        borderColor: "white", */
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <CardContent
          sx={{
            ...dynamicStyles,
          }}
        >
          <Typography variant="body1" component="div">
            {title}
          </Typography>
        </CardContent>

        <CardContent>
          <TextField
            sx={{
              borderRadius: 1,
              input: { color: "white" },
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
                  borderColor: "white",
                },
              },
            }}
            error={errorStatus}
            size="small"
            id="standard-basic"
            label={errorStatus ? "Erreur !" : label}
            variant="outlined"
            placeholder={title}
            inputRef={textFieldRef}
            inputProps={{
              maxLength: size,
            }}
            type="text"
            onChange={() => {
              setText(textFieldRef.current.value);
            }}
          />
        </CardContent>
        <CardContent>
          <Tooltip title={`${toolTip} (${maximum} ${unit} MAX)`}>
            <HelpIcon fontSize="medium" sx={{ color: color }} />
          </Tooltip>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default NumbersFieldInputs;
