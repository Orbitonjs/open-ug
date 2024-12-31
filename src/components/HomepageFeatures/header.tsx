import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

export default function HomeHeader() {
  return (
    <Sheet
      variant="solid"
      color="neutral"
      invertedColors
      sx={(theme) => ({
        "--radiant-inner": "#190000",
        "--radiant-outer": "#f9f202",
        height: "92svh",
        display: "grid",
        gridTemplateColumns: {
          sm: "repeat(2, 1fr)",
          md: "repeat(2, minmax(0, 500px))",
        },
        gap: { sm: "1rem", md: "2.5rem" },
        alignItems: "center",
        justifyContent: "center",
        //borderBottomLeftRadius: "2.4rem",
        //borderBottomRightRadius: "2.4rem",
        background:
          "radial-gradient(140% 107.13% at 50% 10%,var(--radiant-inner) 37.41%,#63e 69.27%,var(--radiant-outer) 100%)",
        padding: "0 2rem",
        //margin: { md: "0 1.5rem" },
        perspective: "1000px",
        [theme.getColorSchemeSelector("dark")]: {
          "--radiant-inner": "transparent",
          "--radiant-outer": "#fff",
        },
      })}
    >
      <Stack useFlexGap spacing={2}>
        <Typography
          level="h1"
          lineHeight="1"
          fontWeight="md"
          sx={{
            textWrap: "balance",
            background:
              "radial-gradient(45% 100% at 50% 50%,#fff 40%,hsla(0,0%,100%,.45) 100%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            fontSize: {
              md: "3.5rem",
              lg: "4rem",
            },
          }}
        >
          Open Source Software by{" "}
          <a href="https://github.com/jim-junior">@jim-junior</a>
        </Typography>
        <Typography level="body-sm" sx={{ textWrap: "pretty" }}>
          Open UG is a collection of software projects built by Jim Junior
          Beingana
        </Typography>
        <ButtonGroup
          variant="plain"
          spacing={2}
          sx={{ "& button, a": { borderRadius: "3rem" } }}
        >
          <Button
            variant="solid"
            {...{
              component: "a",
              href: "#projects",
            }}
            sx={{ color: "black" }}
          >
            Projects
          </Button>
          <Button
            sx={{ color: "black" }}
            {...{
              component: "a",
              href: "https://github.com/open-ug",
              target: "_blank",
              rel: "noreferrer noopener",
            }}
            startDecorator={<FaGithub size="1.25rem" />}
          >
            Open UG Github
          </Button>
          <Button
            sx={{ color: "black" }}
            {...{
              component: "a",
              href: "https://www.cranom.tech",
              target: "_blank",
              rel: "noreferrer noopener",
            }}
            startDecorator={<BiLink size="1.25rem" />}
          >
            Cranom Technologies
          </Button>
        </ButtonGroup>
      </Stack>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          ml: "2.5rem",
          minHeight: "40vh",
          borderRadius: "2.4rem",
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.2)",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(1rem)",
          transform: "rotateY(-45deg)",
        }}
      />
    </Sheet>
  );
}
