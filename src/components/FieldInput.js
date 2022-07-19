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

const FieldInput = ({ data, color, result }) => {
  const title = data.title;
  const label = data.label;
  const size = data.inputSize;
  const unit = data.unit;
  const toolTip = data.toolTip;
  const maximum = data.maximumValue;
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
  // Dynamic styles card Typography
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
  // Dynamic styles TextField
  const matchesXSTF = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesMDTF = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStylesTF = {
    ...(matchesXSTF && {
      minWidth: 150,
    }),
    ...(matchesMDTF && {
      minWidth: 250,
    }),
  };

  //
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <CardContent
          sx={{
            ...dynamicStyles,
            pt: 3,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={0}
          >
            <Typography variant="body1" component="div">
              {title}
            </Typography>
            <Tooltip title={`${toolTip} (${maximum} ${unit} MAX)`}>
              <HelpIcon fontSize="medium" sx={{ color: color, ml: 3 }} />
            </Tooltip>
          </Stack>
        </CardContent>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <CardContent
            sx={{
              p: 0,
              "&:last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <TextField
              sx={{
                ...dynamicStylesTF,
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
        </Stack>
      </Stack>
    </Card>
  );
};

export default FieldInput;
