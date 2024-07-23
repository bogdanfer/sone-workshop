import Projects from "@components/SoneComponents/components/Projects";
import sanity from "@lib/sanity";

const ProjectsPage = ({ pageData, headerData }) => {
  return <Projects projectsData={pageData} slogan={headerData.excerpt}/>;
};

export default ProjectsPage;

export async function getStaticProps({ params, locale }) {
    // const { slug } = params;
    // const [type] = slug;
  
    const query = `*[_type == "projectsPage" && language == "${locale}"] {
      _id,
      _type,
      title,
      projects[]->{
        _id,
        title,
        concept,
        details,
        thumbnail{
          _key,
          "fileUrl": asset->url,
          "extension": asset->extension,
          "description": description
        },
        projectImages[]{
          _key,
          "fileUrl": asset->url,
          "extension": asset->extension,
          "description": description
        },
        "slug": slug.${locale}.current, // Include the entire slug object
      },
      slug,
      language,
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        slug,
      },
    }[0]
    `
    const pageData = await sanity.fetch(query);

    console.log("projects data: ", pageData)

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
  
    const headerData = await sanity.fetch(query_header);
  
    return {
      props: {
        pageData,
        headerData,
      },
    };
  }
