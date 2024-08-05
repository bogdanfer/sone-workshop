import React, { useState } from 'react';
import classNames from 'classnames';
import Header from './Header/Header';
import Link from 'next/link';
import useMobileDetect from '../helpers/useMobileDetect';
import ScrollProgressBar from '../helpers/ScrollProgressBar';

const Projects = ({ projectsData, slogan }) => {
    // states
    const [ isImgBlur, setIsImgBlur ] = useState(false);
    const isMobile = useMobileDetect();

    // image classes on blur
    const onLogoHover = (makeBlur) => {
        setIsImgBlur(makeBlur);
    }

    const blurClass = classNames('', {
        ['hasBlur']: isImgBlur,
    });

    // Filters 
    const [ showFilter, setShowFilter ] = useState(true);
    const [ showSubFilter, setShowSubFilter ] = useState(false);
    const [ showList, setshowList ] = useState(false);
    const [ showMobileFilter, setShowMobileFilter ] = useState(false);

    const mainFilters = [
        "Typology",
        "Chronological",
        "Random",
        "Index"
    ];

    const subFilters = [
        "Culture",
        "Documentary",
        "Community",
        "Education",
        "Habitat",
        "Experimental",
        "All"
    ];

    // Main filters action
    const handleFilters = (filter) => {
        if (filter === 'Typology') {
            setShowFilter(false);
            setShowSubFilter(true);
            return;
        }

        if (filter === 'Index') {
            console.log("filter: ", filter)
            setshowList(!showList);
        }

        if (filter === 'Chronological') {
            sortProjectsByDetail('Year');
        }

        if (filter === 'Random') {
            shuffleProjects();
        }
    }
    
    const handleSubFilters = (filter) => {
        if (filter === 'All') {
            console.log("here", projectsData.projects);
            setProjects(projectsData.projects);
            setShowFilter(true);
            setShowSubFilter(false);
            return;
        } else {
            console.log(projectsData.projects);
            const filtered = filterProjectsByTypology(projectsData.projects, filter);
            setProjects(filtered);
        }
    }

    const getValueByTitle = (arr, title) => {
        const item = arr.find(element => element.title === title);
        return item ? item.value : null;
    }

    // Sort 
    const [projects, setProjects] = useState(projectsData.projects);
    const [sortOrder, setSortOrder] = useState('asc');

    // Function to sort projects by property
    const sortProjectsByProperty = (prop) => {
        const sortedProjects = [...projects].sort((a, b) => {
            if (a[prop] < b[prop]) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (a[prop] > b[prop]) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });
        setProjects(sortedProjects);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    // Function to sort projects by detail title
    const sortProjectsByDetail = (detailTitle) => {
        const sortedProjects = [...projects].sort((a, b) => {
        const aValue = a.details.find(detail => detail.title === detailTitle)?.value || '';
        const bValue = b.details.find(detail => detail.title === detailTitle)?.value || '';
            if (aValue < bValue) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
            });
        setProjects(sortedProjects);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    // Randomize projects
    const shuffleProjects = () => {
        const shuffledProjects = [...projects];
        for (let i = shuffledProjects.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledProjects[i], shuffledProjects[j]] = [shuffledProjects[j], shuffledProjects[i]];
        }
        setProjects(shuffledProjects);
    };

    // Function to filter projects based on Typology
    const filterProjectsByTypology = (projects, keyword) => {
        return projects.filter(project => {
            const typologyDetail = project.details.find(detail => detail.title === "Typology");
            return typologyDetail && typologyDetail.value.toLowerCase().includes(keyword.toLowerCase());
        });
    };

    // handle mouse over on list table
    const handleMouseOver = (action, backgroundImage) => {
        const bgEl = document.querySelector('.sone-list-background-full');
        bgEl.dataset.bg = action === 'in' ? true : false;
        bgEl.style.backgroundImage = action === 'in' ? backgroundImage : '';
    }

    // Letters 
    const Block = ({ letter }) => (
        <div className="sone-projects-item sone-projects-item--letter">
          <div className="sone-projects-item-content">
            <Link href={"/workshop"}>
                <h3>{letter}</h3>
            </Link>
          </div>
        </div>
    );

    // Define the positions for each letter relative to the project blocks
    const blockPositions = { S: 2, Ō: 3, N: 4, E: 9 };
    
    const itemsWithBlocks = [];
    const numProjects = projects.length;
    let projectIndex = 0;

    for (let i = 1; projectIndex < numProjects || Object.keys(blockPositions).length > 0; i++) {
        // Check if a letter should be inserted at this position
        const letter = Object.keys(blockPositions).find(key => blockPositions[key] === i);
    
        if (letter) {
          itemsWithBlocks.push(<Block key={`block-${letter}`} letter={letter} />);
          delete blockPositions[letter]; // Remove the letter after it has been inserted
        }
    
        // Check if a project should be inserted at this position
        if (projectIndex < numProjects) {
          let item = projects[projectIndex];
          let backgroundImage = null;
          if (item.thumbnail?.fileUrl) {
            backgroundImage = `url(${item.thumbnail.fileUrl})`;
          } else {
            const firstImgGallery = item.projectImages.find(image => image.extension !== 'mp4');
            backgroundImage = `url(${firstImgGallery.fileUrl})`;
          }
    
          itemsWithBlocks.push(
            <a
              key={`project-${projectIndex}`}
              href={item.slug}
              className="sone-projects-item"
            >
              <div className='sone-project-item-bg' style={{ backgroundImage }}></div>
              <div className="sone-projects-item-content">
                <h3>{item.title}</h3>
                <h4>{item.concept}</h4>
                <span className="sone-small-plus"></span>
              </div>
            </a>
          );
          projectIndex++;
        }
    }

    return (
        <>         
            {isMobile &&
                <ScrollProgressBar theme="white" />
            }
            <div className='sone-projects-wrapper'>
                {/* Header */}
                <Header slogan={slogan} onLogoHover={onLogoHover} variant="black" size="small" showFilterMenu="true" /> 
                
                {/* Mobile Filter Menu */}
                {isImgBlur ? null : (
                    <button className='sone-mobile-filter-menu' onClick={() => setShowMobileFilter(!showMobileFilter)} data-open={showMobileFilter}>
                        <span>
                        </span>
                    </button>
                )}

                {/* Filter */}
                <ul className={`sone-main-filters ${blurClass}`} data-islist={showList} data-mainfilter={!showSubFilter}>
                    {showFilter && 
                        mainFilters.map((item, index) => (
                            <li key={index}>
                                <span onClick={() => handleFilters(item)}>{item}</span>
                            </li>
                        ))
                    }
                    
                    {showSubFilter &&
                        subFilters.map((item, index) => (
                            <li key={index} >
                                <span onClick={() => handleSubFilters(item)}>{item}</span>
                            </li>
                        ))
                    }
                </ul>
                

                {/* Content */}
                {!showList
                    ? 
                    <div className={`sone-projects-content ${blurClass}`}>
                        {itemsWithBlocks}
                    </div>
                    : 
                    <ul className={`sone-project-content-list ${blurClass}`}>
                        <li className='sone-project-content-list-head'>
                            <span className='sone-list-date' onClick={() => sortProjectsByDetail('Year')}>date</span>
                            <span className='sone-list-title' onClick={() => sortProjectsByProperty('title')}>title</span>
                            <span className='sone-list-location' onClick={() => sortProjectsByDetail('Location')}>location</span>
                            <span className='sone-list-typology' onClick={() => sortProjectsByDetail('Typology')}>typology</span>
                            <span className='sone-list-sqm' onClick={() => sortProjectsByDetail('SQM')}>SQM</span>
                            <span className='sone-list-budget' onClick={() => sortProjectsByDetail('Budget')}>budget</span>
                            <span className='sone-list-status' onClick={() => sortProjectsByDetail('Status')}>status</span>
                        </li>
                        {projects.map((item, index) => {
                            let backgroundImage = null;
                            if (item.thumbnail?.fileUrl) {
                                backgroundImage = `url(${item.thumbnail.fileUrl})`;
                            } else {
                                const firstImgGallery = item.projectImages.find(image => image.extension !== 'mp4');
                                backgroundImage = `url(${firstImgGallery.fileUrl})`;
                            }    
                            
                            return (
                                <li key={index} onMouseEnter={() => handleMouseOver('in', backgroundImage)} onMouseLeave={() => handleMouseOver('out')}>
                                    <a href={item.slug}>
                                        <span className='sone-list-date'>{getValueByTitle(item.details, 'Year')}</span>
                                        <span className='sone-list-title'>{item.title}</span>
                                        <span className='sone-list-location'>{getValueByTitle(item.details, 'Location')}</span>
                                        <span className='sone-list-typology'>{getValueByTitle(item.details, 'Typology')}</span>
                                        <span className='sone-list-sqm'>{getValueByTitle(item.details, 'SQM')}</span>
                                        <span className='sone-list-budget'>{getValueByTitle(item.details, 'Budget')}</span>
                                        <span className='sone-list-status'>{getValueByTitle(item.details, 'Status')}</span>
                                    </a>
                                </li>
                            );
                        })}
                        <div className='sone-list-background-full'></div>
                    </ul>
                }

                {/* Back to top */}
                {isImgBlur ? null : (
                    <svg onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='sone-project-backtotop' width="35" height="63" viewBox="0 0 35 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 2L32 31L2 61" stroke="black" strokeWidth="3"/>
                    </svg>
                )}

            </div>
        </>
    );
};

export default Projects;
