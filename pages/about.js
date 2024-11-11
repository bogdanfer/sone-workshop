import About from "@components/SoneComponents/components/About";
import sanity from "@lib/sanity";
import SmoothScrolling from "@components/SoneComponents/components/SmoothScrolling";

const AboutPage = ({ pageData, headerData }) => {
  return <SmoothScrolling><About aboutData={pageData} slogan={headerData.headlines}/></SmoothScrolling>;
};

export default AboutPage;

export async function getStaticProps({ locale }) {

    const query = `*[_type == "about" && language == "${locale}"] {
      _id,
      _type,
      title,
      slug,
      language,
      hero,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        slug,
      },
    }[0]
    `
    const pageData = await sanity.fetch(query);

    // header query 
    const query_header = `*[_type == "welcome" && language == "${locale}"] {
      _id,
      _type,
      title,
      language,
      headlines,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        slug,
      },
    }[0]
    `
  
    const headerData = await sanity.fetch(query_header)
  
    return {
      props: {
        pageData,
        headerData,
      },
        revalidate: 60
    };
  }
