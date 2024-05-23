import Workshop from "@components/SoneComponents/components/Workshop";
import sanity from "@lib/sanity";

const WorkshopPage = ({ pageData }) => {
  return <Workshop workshopData={pageData}/>;
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
  
    return {
      props: {
        pageData,
      },
    };
  }
