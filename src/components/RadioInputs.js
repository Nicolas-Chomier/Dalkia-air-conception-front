import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
// styles
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const RadioInputs = ({ data, result }) => {
  const title = data.title;
  const label = data.label;
  const size = data.inputSize;
  const toolTip = data.toolTip;
  const color = data.themeColor;
  //
  const nbsOfRadioBtnList = [...Array(size).keys()];
  const handleChange = (event) => {
    result(event.target.value);
  };
  useEffect(() => {
    result(label);
  }, [label, result]);
  // Dynamic styles
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStyles = {
    ...(matchesXS && { bgcolor: "transparent", minWidth: 50 }),
    ...(matchesMD && { bgcolor: "transparent", minWidth: 200 }),
  };
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
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
          <FormControl>
            <RadioGroup
              row
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              defaultValue={label}
            >
              {nbsOfRadioBtnList.map((item) => (
                <FormControlLabel
                  key={item}
                  value={item + 1}
                  control={
                    <Radio
                      size="small"
                      sx={{ color: "white", "&.Mui-checked": { color } }}
                    />
                  }
                  label={`${item + 1}`}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>

        <Tooltip title={toolTip}>
          <HelpIcon fontSize="medium" sx={{ color: color }} />
        </Tooltip>
      </Stack>
    </Card>
  );
};

export default RadioInputs;
