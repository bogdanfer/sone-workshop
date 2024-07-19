import sanity from '../lib/sanity'
import { HomeComponent } from '../components'
import { useRouter } from 'next/router'


import { NextSeo } from 'next-seo'
// import fetchJson from '@lib/fetchJson'
// import { endpoints, getAssetUrl } from '@constants'
// import { getUserAssetsWithPagination } from '@lib/getUserAssetsPagination'
// import { reconcileCollectionAndAssets } from '@lib/reconcileCollectionAndAssets'
// import { getCollectionCover } from '@lib/getCollectionCover'



const MeLlamoArtPage = ({
  // profile,
  // ogImage,
  // ogTitle,
  // ogUrl,
  sanityData,
}) => {

  // console.log("sanityData: ", sanityData)

  return (
    <>
      <NextSeo
        // url={ogUrl}
        title="SONE Workshop"
        description="SONE Workshop"
        openGraph={{
          // url: ogUrl,
          // title: ogTitle,
          description: "SONE Workshop",
          // images: [
          //   {
          //     url: ogImage,
          //     width: 2024,
          //     height: 1012,
          //   },
          // ],
        }}
      />
      <HomeComponent data={sanityData} />
    </>
  )
}

export default MeLlamoArtPage

export async function getStaticProps({ locale }) {
  // let user = {}
  let profile = {}
  let ogUrl = ''
  let ogImage = '/social_home_new.png'
  let ogTitle = 'Me Llamo Art'

  // this query is all placeholder for now
  const query = `*[_type == "welcome" && language == "${locale}"] {
    _id,
    _type,
    title,
    slug,
    language,
    excerpt,
    homeVideos,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      slug,
    },
  }[0]
  `

  const sanityData = await sanity.fetch(query)

  return {
    props: {
      profile,
      ogImage,
      ogTitle,
      ogUrl,
      sanityData,
      layout: false,
      theme: false
    },
    revalidate: profile ? 1 : false,
  }
}