import "@fontsource/inter";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomeHeader from "../components/HomepageFeatures/header";
import Projects from "../components/HomepageFeatures/projects";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Enhancing the developer community in Uganda through Open Source."
    >
      <HomeHeader />
      <Projects />
    </Layout>
  );
}
