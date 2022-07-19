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
  mb: "5vh",
  border: 2,
  transform: "translateX(-50%)",
  width: "100%",
  borderColor: "#D7D7D7",
  borderRadius: "30px",
  padding: 0,
  maxWidth: 180,
  backgroundColor: "#1E1A2A",
  /* backgroundImage:
    "linear-gradient(to right top, #474da2, #403f81, #363262, #2b2545, #1e1a2a)", */
  /* backgroundImage:
    "linear-gradient(to top, #201f25, #26252f, #2c2c3a, #323245, #373950)", */
};

const ServiceCard = ({ text, text2, image, path }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Card sx={styles}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <CardContent sx={{ pb: 0, pt: 3 }}>
            <Avatar
              alt="cube"
              src={`/images/${image}`}
              sx={{ width: 90, height: 90 }}
            />
          </CardContent>
          <CardActions>
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
          </CardActions>
        </Stack>
      </Card>
    </Link>
  );
};

export default ServiceCard;
