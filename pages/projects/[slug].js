import { useRouter } from 'next/router';
import sanity from "@lib/sanity";
import Project from '@components/SoneComponents/components/Project';

const ProjectPage = ({ projectData }) => {
  const router = useRouter();
//   const slug = router?.query?.slug;

//   console.log("top slug: ", slug)

  console.log(router, router.isFallback, projectData)

  if (!router.isFallback && !projectData) {
    return <div>404 - Project not found</div>;
  }

  return (
    <Project projectData={projectData} />
  );
};

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true,
    };
}

// export async function getStaticPaths() {
//   const query = `*[_type == "project"] {
//     "slug": slug.current
//   }`;

//   const projects = await sanity.fetch(query);

//   const paths = projects.map((project) => ({
//     params: { slug: project.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getStaticProps({ params, locale }) {
    const { slug } = params;
    const [type] = slug;

    console.log("down slug: ", slug, locale)

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

    console.log(projectData)

    return {
    props: {
        projectData,
    },
    };
}

export default ProjectPage;