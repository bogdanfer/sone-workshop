import Contact from "@components/SoneComponents/components/Contact";
import sanity from "@lib/sanity";

const ContactPage = ({ pageData, headerData }) => {
  return <Contact contactData={pageData} slogan={headerData.excerpt}/>;
};

export default ContactPage;

export async function getStaticProps({ params, locale }) {
    // const { slug } = params;
    // const [type] = slug;
  
    const query = `*[_type == "contact" && language == "${locale}"] {
      _id,
      _type,
      title,
      slug,
      language,
      headline,
      background,
      backgroundMobile,
      locations,
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
      excerpt,
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
