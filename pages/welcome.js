// import Team from "@components/SoneComponents/components/Team/Team";
import sanity from "@lib/sanity";
import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

// import styles from '../MeLlamoArt.module.css'

const WelcomePage = ({ teamData }) => {
  const allTeamData = teamData;
  return (
    <>
      <h5>WELCOME PAGE</h5>
      {/* <Team teamData={allTeamData}/> */}
    </>
  );
};

export default WelcomePage;

export async function getStaticProps({ params }) {
  const query = `*[_type == "site" && title == "Me Llamo Art"] {
    team
  }[0]
  `;
  const teamData = await sanity.fetch(query);

  return {
    props: {
      teamData,
    },
  };
}
