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
      headline,
      section1title,
      section1text,
      section1image,
      section2headline,
      section2title,
      section2text,
      section2image,
      section2image2,
      section2image3,
      section3headline,
      section3title,
      section3text,
      section3image,
      section4headline,
      section4title,
      section4team1name,
      section4team1role,
      section4team1description,
      section4team1location,
      section4team2name,
      section4team2role,
      section4team2description,
      section4team2location,
      section5headline,
      section5title,
      section5text,
      section5image,
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
