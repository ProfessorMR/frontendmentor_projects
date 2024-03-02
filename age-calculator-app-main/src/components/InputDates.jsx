import React from "react";
import { Container, Box, Divider, Avatar, Button } from "@mui/material";
import Colors from "../utils/Colors";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../theme/Theme";
import iconArrow from "../assets/images/icon-arrow.svg";
import { Data } from "../data/Data";
import SingleDate from "./SingleDate";

const InputDates = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container
        component="form"
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          {Data.map((d) => (
            <SingleDate name={d.name} placeholder={d.placeholder} key={d.id} />
          ))}
        </Box>
        <Box>
          <Divider
            textAlign="right"
            sx={{
              ".MuiDivider-wrapper": {
                padding: 0,
              },
              "&.MuiDivider-root::after": {
                width: 0,
              },
            }}
          >
            <Button
              type="submit"
              sx={{
                backgroundColor: Colors.Purple,
                padding: "15px",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: Colors.OffBlack,
                },
              }}
            >
              <Avatar src={iconArrow} alt="icon-arrow"></Avatar>
            </Button>
          </Divider>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default InputDates;