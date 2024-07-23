import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Header from './Header/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Project = ({ projectData, slogan, allProjects }) => {
    const router = useRouter();

    // Menu Settings / States
    const [ isImgBlur, setIsImgBlur ] = useState(false);

    const onLogoHover = (makeBlur) => {
        setIsImgBlur(makeBlur);
    }

    const imgClasses = classNames('sone-image-background', {
        ['hasBlur']: isImgBlur,
    });

    // Project States
    const [showExtras, setShowExtras] = useState(false);

    // console.log("project data: ", projectData?.slug[router.locale]?.current)
    // console.log("all projects slugs: ", allProjects)
    // console.log(slogan)

    // Compose Next/Prev Slugs 
    const [ prevSlug, setPrevSlug] = useState(null);
    const [ nextSlug, setNextSlug] = useState(null);

    const currentSlug = projectData?.slug[router?.locale]?.current;
    const allSlugs = allProjects?.projects;

    // Find the index of the current slug
    useEffect(() => {
        if (Array.isArray(allSlugs)) {
            const currentIndex = allSlugs?.findIndex(project => project.slug === currentSlug);
            if (currentIndex === -1) {
                console.error('Slug not found in allSlugs');
            } else {
                // Determine the previous and next indices
                const prevIndex = (currentIndex - 1 + allSlugs.length) % allSlugs.length;
                const nextIndex = (currentIndex + 1) % allSlugs.length;
            
                // Get the previous and next slugs
                setPrevSlug(allSlugs[prevIndex]?.slug);
                setNextSlug(allSlugs[nextIndex]?.slug);
            }
        }
    }, [currentSlug])

    return (
        <>         
            <div className='sone-project-wrapper'>
                {/* Header */}
                <Header slogan={slogan} onLogoHover={onLogoHover} variant="black" size="small" /> 
            
                {/* Content */}
                {!isImgBlur &&
                    <div className='sone-project-content'>
                        {/* Left Content */}
                        <div className='sone-project-content--left'>
                            {projectData?.projectImages?.map((item, index) => {
                                if (item.extension !== 'mp4') {
                                    return (
                                        <img src={item.fileUrl} alt={item.description} key={index} />
                                    )
                                }
                            })}
                        </div>

                        {/* Right Content */}
                        <div className='sone-project-content--right'>
                            <h2 className='sone-project-title'>{projectData?.title}</h2>
                            <h3 className='sone-project-concept'>{projectData?.concept}</h3>
                            <div className='sone-project-content-area' data-extra={showExtras}>
                                <p className='sone-project-description'>
                                    {projectData?.description}
                                </p>
                                <ul className='sone-project-extras'>
                                    {projectData?.details.map((item, index) => (
                                        <li key={index}>
                                            <span>{item.title}</span>
                                            <span>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className='sone-project-button-toggle' data-isopen={showExtras} onClick={() => {
                                const listHeight = document.querySelector('.sone-project-extras').offsetHeight;
                                document.querySelector('.sone-project-content-area').style.height = !showExtras ? listHeight + 'px' : 'auto';
                                setShowExtras(!showExtras)
                            }}>
                                    <span></span>
                                    <span></span>
                            </button>

                            <div className='sone-project-nav'>
                                {prevSlug &&
                                    <Link href={prevSlug}>Previous Project</Link>
                                }
                                
                                {nextSlug &&
                                    <Link href={nextSlug}>Next Project</Link>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Project;
