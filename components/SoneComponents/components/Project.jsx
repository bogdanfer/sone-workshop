import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import Header from './Header/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useScrollPercentage from '../helpers/useScrollPercentage';
import useMobileDetect from '../helpers/useMobileDetect';
import ScrollProgressBar from '../helpers/ScrollProgressBar';
import Lightbox from '../helpers/Lightbox';

const Project = ({ projectData, slogan, allProjects }) => {
    const router = useRouter();

    // Infinite image gallery
    const [ imagesList, setImagesList ] = useState([]);
    const isMobile = useMobileDetect();

    useEffect(() => {
        setImagesList(projectData?.projectImages);
        console.log(projectData?.projectImages);
    }, [projectData]);

    const scrollRef = useRef(null);
    const scrollPercentage = useScrollPercentage(scrollRef);

    useEffect(() => {
        if (scrollPercentage > 99 && !isMobile) {
            setImagesList((prevList) => [...prevList, ...prevList]);
        }
    }, [scrollPercentage]);

    // Menu Settings / States
    const [ isImgBlur, setIsImgBlur ] = useState(false);

    const onLogoHover = (makeBlur) => {
        setIsImgBlur(makeBlur);
    }

    const blurClass = classNames('', {
        ['hasBlur']: isImgBlur,
    });

    // Project States
    const [showExtras, setShowExtras] = useState(false);

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
            {isMobile &&
                <ScrollProgressBar />
            }
            <div className='sone-project-wrapper'>
                {/* Header */}
                <Header 
                    slogan={slogan} 
                    onLogoHover={onLogoHover} 
                    variant="black" 
                    size="small"
                    isProject={!isMobile ? true : false}
                /> 
            
                {/* Content */}
                <div className={`sone-project-content ${blurClass}`}>
                    {/* Left Content */}
                    <div className='sone-project-content--left' ref={scrollRef}>
                        {!isMobile && imagesList &&
                            <Lightbox images={imagesList} />
                        }

                        {isMobile && imagesList &&
                            <img className="sone-project-content-firstimg" src={imagesList[0]?.fileUrl} alt={imagesList[0]?.description} />
                        }
                    </div>

                    {/* Right Content */}
                    <div className='sone-project-content--right'>
                        <div className='sone-sticky'>
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

                    {isMobile &&
                        <>
                            <div className='sone-project-content--left sone-project-content--left-second' ref={scrollRef}>
                                <Lightbox images={imagesList?.slice(1)} />
                            </div>

                            {/* Back to Projects */}
                            <svg onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='sone-project-backtotop' width="35" height="63" viewBox="0 0 35 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 2L32 31L2 61" stroke="black" strokeWidth="3"/>
                            </svg>
                            <Link href={"/projects"} className='sone-menu-backtoprojects sone-menu-backtoprojects--center'><span>Back to Projects</span></Link>
                        </>
                    }
                    
                </div>
                
            </div>
        </>
    );
};

export default Project;
