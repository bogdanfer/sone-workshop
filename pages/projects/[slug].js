import { useRouter } from 'next/router';
import sanity from "@lib/sanity";
import Project from '@components/SoneComponents/components/Project';

const ProjectPage = ({ projectData, projectsURLsData }) => {
  const router = useRouter();
//   const slug = router?.query?.slug;

// console.log("router: ", router)

//   console.log("top slug: ", slug)

  // console.log(router, router.isFallback, projectData)

  if (!router.isFallback && !projectData) {
    return <div>404 - Project not found</div>;
  }

  return (
    <Project projectData={projectData} allProjects={projectsURLsData} />
  );
};

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true,
    };
}

export async function getStaticProps({ params, locale }) {
    const { slug } = params;
    const [type] = slug;

    const query = `*[_type == "project" && slug["${locale}"].current == "${slug}" && language == "${locale}"] {
        _id,
        _type,
        title,
        slug,
        language,
        concept,
        description,
        details,
        projectImages[]{
          _key,
          "fileUrl": asset->url,
          "extension": asset->extension,
          "description": description
      },
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
            slug,
        },
    }[0]
    `
    const projectData = await sanity.fetch(query);

    // get next and prev project url 
    const projects_query = `*[_type == "projectsPage" && language == "${locale}"] {
      projects[]->{
        "slug": slug.${locale}.current, // Include the entire slug object
      },
    }[0]
    `

    const projectsURLsData = await sanity.fetch(projects_query);

    // console.log("projectsURLsData: ", projectsURLsData)

    return {
    props: {
        projectData,
        projectsURLsData
    },
    };
}

export default ProjectPage;