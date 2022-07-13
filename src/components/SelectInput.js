import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
// styles
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SelectInput = ({ data, color, result }) => {
  const title = data.title;
  const unit = data.unit;
  const toolTip = data.toolTip;
  const maximum = data.maximumValue;
  const values = data.values;
  const [protectionLevel, setProtectionLevel] = React.useState("");

  const handleChange = (event) => {
    setProtectionLevel(event.target.value);
  };
  // Select
  const onMenuItemClick = (item) => {
    //console.log("choix formulaire", item);
    if (item) {
      const str = item.split("-")[0];
      result(str);
    } else {
      result(false);
    }
  };
  // Dynamic styles
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStyles = {
    ...(matchesXS && { bgcolor: "transparent", minWidth: 50 }),
    ...(matchesMD && { bgcolor: "transparent", minWidth: 200 }),
  };
  // Dynamic styles Select
  const matchesXSSlt = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesMDSlt = useMediaQuery(theme.breakpoints.up("md"));
  const dynamicStylesSlt = {
    ...(matchesXSSlt && {
      minWidth: 150,
    }),
    ...(matchesMDSlt && {
      minWidth: 280,
    }),
  };

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
            pt: 5,
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
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
            <FormControl fullWidth size="small" sx={{ ...dynamicStylesSlt }}>
              <InputLabel id="select-label">- - - </InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={protectionLevel}
                onChange={handleChange}
                label="level"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "#1d1a25",
                      "& .MuiMenuItem-root": {
                        padding: 1,
                      },
                    },
                  },
                }}
                sx={{
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: color,
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    color: "pink",
                  },

                  "& .MuiSelect-iconOutlined": {
                    color: "white",
                  },
                }}
              >
                {values.map((item, i) => (
                  <MenuItem
                    key={item}
                    onClick={(e) => onMenuItemClick(item)}
                    value={i++}
                    sx={{
                      color: "white",
                    }}
                  >
                    {item.split("-")[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SelectInput;
