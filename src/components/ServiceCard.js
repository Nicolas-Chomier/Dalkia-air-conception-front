import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";

const styles = {
  mx: "50%",
  mb: "3vh",
  border: 1,
  transform: "translateX(-50%)",
  width: "100%",
  borderColor: "WhiteSmoke",
  borderRadius: "40px",
  padding: 0,
  maxWidth: 160,
  backgroundImage:
    "linear-gradient(to top, #201f25, #26252f, #2c2c3a, #323245, #373950)",
};

const ServiceCard = ({ text, text2, image, path }) => {
  return (
    <Card sx={styles}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <CardContent sx={{ pb: 0, pt: 3 }}>
          <Avatar
            alt="cube"
            src={`/images/${image}`}
            sx={{ width: 80, height: 80 }}
          />
        </CardContent>
        <CardActions>
          <Link to={path} style={{ textDecoration: "none" }}>
            <Button variant="text">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
              >
                <Typography variant="body2" component="div">
                  {text}
                </Typography>
                <Typography variant="body2" component="div">
                  {text2}
                </Typography>
              </Stack>
            </Button>
          </Link>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default ServiceCard;
