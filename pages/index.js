import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import AboutMe from "@components/AboutMe";
import Upcoming from "@components/Upcoming";
import Projects from "@components/Projects";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Rajiv Shah - Data Scientist, Speaker, Edutainer"
      description="Welcome to my personal web site to learn more about me, my activities, and my past work."
    >
      <Hero />
      <AboutMe />
      <Projects />
      <Upcoming />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
