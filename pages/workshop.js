import Workshop from "@components/SoneComponents/components/Workshop";
import sanity from "@lib/sanity";

const WorkshopPage = ({ pageData, headerData }) => {
  return <Workshop workshopData={pageData} slogan={headerData.headlines}/>;
};

export default WorkshopPage;

export async function getStaticProps({ params, locale }) {
    // const { slug } = params;
    // const [type] = slug;
  
    const query = `*[_type == "workshop" && language == "${locale}"] {
      _id,
      _type,
      title,
      slug,
      language,
      excerpt,
      background,
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
    };
  }
