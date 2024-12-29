import React from "react";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import axios from "axios";
import { Skeleton, Box, Link } from "@mui/joy";

const BASE_URL = "https://api.github.com/repos/";

function ProjectCard({ repo, documentation }) {
  const [repoData, setRepoData] = React.useState(null);

  React.useEffect(() => {
    axios.get(BASE_URL + repo).then((response) => {
      setRepoData(response.data);
    });
  }, [repo]);

  function getDescription(description) {
    if (description.length > 100) {
      return description.slice(0, 100) + "...";
    }
    return description;
  }

  function getLanguageColor(language) {
    switch (language) {
      case "JavaScript":
        return "yellow";
      case "TypeScript":
        return "blue";
      case "HTML":
        return "orange";
      case "CSS":
        return "blue";
      case "Python":
        return "yellow";
      case "Java":
        return "red";
      case "Go":
        return "blue";
      default:
        return "gray";
    }
  }

  return repoData === null ? (
    <ProjectSkeleton />
  ) : (
    <Card size="lg" sx={{ borderRadius: "xl", boxShadow: "lg" }}>
      <CardContent orientation="horizontal" sx={{ alignItems: "flex-start" }}>
        <div>
          <Typography level="title-lg">
            {repoData ? repoData.name : <Skeleton />}
          </Typography>
          <Typography>
            {repoData ? getDescription(repoData.description) : <Skeleton />}
          </Typography>
        </div>
        <ButtonGroup size="sm" variant="soft">
          <Button
            component="a"
            href={repoData ? repoData.html_url : "#"}
            startDecorator={<SiGithub />}
          >
            GitHub
          </Button>
        </ButtonGroup>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 2 }}>
        <Typography
          level="body-sm"
          startDecorator={
            <Sheet
              variant="solid"
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: repoData
                  ? getLanguageColor(repoData.language)
                  : "gray",
              }}
            />
          }
        >
          {repoData ? repoData.language : <Skeleton />}
        </Typography>
        <Typography level="body-sm" startDecorator={<FaStar />}>
          {repoData ? repoData.stargazers_count : <Skeleton />}
        </Typography>
        <Typography level="body-sm">
          {repoData ? (
            <Link href={"/open-ug" + documentation}>Documentation</Link>
          ) : (
            <Skeleton />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}

import { BoxProps } from "@mui/joy/Box";
import { SiGithub } from "react-icons/si";
import { FaStar } from "react-icons/fa";

const sizeMap = { sm: "256px", md: "300px", lg: "360px" };

function LayoutGridAutofill({
  sx,
  size = "md",
  ...props
}: BoxProps & { size?: "sm" | "md" | "lg" }) {
  return (
    <Box
      {...props}
      sx={[
        {
          "--grid-size": sizeMap[size],
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(var(--grid-size), 100%), 1fr))",
          gap: { xs: 2, md: 3 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
export default function Projects() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{
          mb: 4,
          mt: 0,
          textAlign: "center",
          fontWeight: "bold",
          color: { sm: "primary", md: "secondary" },
        }}
        id="projects"
        level="title-lg"
      >
        Projects
      </Typography>
      <LayoutGridAutofill>
        <ProjectCard
          repo="jim-junior/crane-operator"
          documentation="/crane-operator/intro"
        />
        <ProjectCard
          repo="jim-junior/reactjs-media"
          documentation="/reactjs-media/intro"
        />
        <ProjectCard
          repo="jim-junior/django-urlshortner"
          documentation="https://github.com/jim-junior/django-urlshortner"
        />
        <ProjectCard
          repo="open-ug/ugmobilemoney"
          documentation="/ugmobilemoney/intro"
        />
        <ProjectCard
          repo="Orbitonjs/orbiton"
          documentation="https://orbiton.js.org/"
        />
      </LayoutGridAutofill>
    </Box>
  );
}

function ProjectSkeleton() {
  return (
    <Card size="lg" sx={{ borderRadius: "xl", boxShadow: "lg" }}>
      <CardContent orientation="horizontal" sx={{ alignItems: "flex-start" }}>
        <div>
          <Typography>
            <Skeleton>Lorem ipsum</Skeleton>
          </Typography>
          <Typography>
            <Skeleton>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries.
            </Skeleton>
          </Typography>
        </div>
        <ButtonGroup size="sm" variant="soft">
          <Button disabled startDecorator={<SiGithub />}>
            GitHub
          </Button>
        </ButtonGroup>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 2 }}>
        <Typography
          level="body-sm"
          startDecorator={
            <Sheet
              variant="solid"
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            />
          }
        >
          <Skeleton />
        </Typography>
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="50%" />
      </CardContent>
    </Card>
  );
}
