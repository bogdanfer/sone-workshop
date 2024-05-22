import FeaturedArtist from "@components/SoneComponents/components/FeaturedArtist/FeaturedArtist";
import sanity from "@lib/sanity";
import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from "react";

// import styles from '../MeLlamoArt.module.css'


export default function Page({ params }) {
  console.log("params: ", params);

  return (
    <h1>My Page</h1>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// //currently returns all artists data
// //need to refactor to retrieve only one at a time
// export async function getStaticProps({ params }) {
//   const query = `*[_type == "site" && title == "Me Llamo Art"] 
//   {
//     artists,
//   }[0]
//   `;
//   const artistData = await sanity.fetch(query);

//   return {
//     props: {
//       artistData,
//     },
//   };
// }
