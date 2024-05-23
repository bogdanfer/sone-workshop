import FeaturedArtist from "@components/SoneComponents/components/FeaturedArtist/FeaturedArtist";
import sanity from "@lib/sanity";
import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from "react";


// import styles from '../MeLlamoArt.module.css'


export default function Page({ params }) {
  const router = useRouter();
  const slug = router?.query?.slug;

  console.log("Slug: ", slug)
  // console.log("params: ", params);

  return (
    <h1>My Page</h1>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

//currently returns all artists data
//need to refactor to retrieve only one at a time
export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const [type] = slug;

  const query = `*[_type == "${type}" && language == "${locale}"] {
    _id,
    _type,
    title,
    slug,
    language,
    excerpt,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }[0]
  `
  const pageData = await sanity.fetch(query);

  console.log(pageData)

  return {
    props: {
      pageData,
    },
  };
}
