import React, { useState } from 'react';
import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import classNames from 'classnames';
import Header from './Header/Header';

const About = ({ aboutData, slogan }) => {
    // states
    const [ isImgBlur, setIsImgBlur ] = useState(false);

    console.log("aboutData: ", aboutData)

    // background image 
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };

    let backgroundImage = null;
    if (aboutData) {
      backgroundImage = urlFor(aboutData.hero).url();
    }

    // image classes on blur
    const onLogoHover = (makeBlur) => {
        setIsImgBlur(makeBlur);
    }

    const imgClasses = classNames('sone-image-background', {
        ['hasBlur']: isImgBlur,
    });

    return (
        <>         
            <div className='sone-about-wrapper'>
                {/* background image */}
                <img className={imgClasses} src={backgroundImage ? backgroundImage : ''} alt="" />

                {/* Header */}
                <Header slogan={slogan} onLogoHover={onLogoHover} variant="white" /> 

                {/* Content */}
                {!isImgBlur &&
                    <div className='sone-about-content'>
                        <div className='sone-letter-o-mask'>
                          <svg className="sone-letter-o" fill="none" viewBox="0 0 41 50"><path d="M34.65 44.03C30.98 48.01 26.11 50 20.05 50c-6.06 0-10.92-1.99-14.57-5.97C1.82 40.05 0 34.98 0 28.8s1.83-11.25 5.48-15.23C9.13 9.59 13.99 7.6 20.05 7.6c6.06 0 10.93 1.99 14.6 5.97 3.67 3.98 5.51 9.05 5.51 15.23s-1.84 11.25-5.51 15.23ZM20.1 41.81c3.18 0 5.61-1.2 7.3-3.61 1.69-2.41 2.53-5.54 2.53-9.4 0-3.86-.84-7.01-2.53-9.43s-4.12-3.64-7.3-3.64c-3.18 0-5.58 1.21-7.3 3.64-1.72 2.42-2.59 5.57-2.59 9.43 0 3.86.86 6.95 2.59 9.38 1.72 2.42 4.16 3.64 7.3 3.64v-.01ZM11.92 5.74V0h16.25v5.74H11.92Z" fill="#fff"/></svg>
                        </div>

                        {/* 1.Section */}
                        <div className='sone-about-section sone-about-section-one'>
                          <h3>Building local narratives in global stories</h3>
                          <img className='sone-about-img-1' src={backgroundImage ? backgroundImage : ''} alt="" />
                        </div>

                        {/* 2.Section */}
                        <div className='sone-about-section sone-about-section-two'>
                          <img className='sone-about-img-2' src={backgroundImage ? backgroundImage : ''} alt="" />
                          <div className='sone-about-text-holder'>
                            <h4>sŌne is an architecture practice based in Yangon and Paris.</h4>
                            <p>Our approach is grounded in a commitment to impactful architecture, woven into space and time through a sustainable ecological, technical, and social lens. Each project is an opportunity to embody and preserve the singularity and diversity of the physical territories and cultural expressions it engages with. By exploring the margins and engaging with global peripheries, we aim to produce architectures and objects conceived as spaces of representation, struggle, and expression.
                            <br /><br /> 
                            As a result of a South-North collaboration, inherently multicultural and purposefully interdisciplinary, the workshop becomes a space for experimentation and reflection on inhabited environments. We work with communities, mobilizing the tools of architecture and documentary to envision fertile spaces that foster transformation towards sustainable cities.</p>
                          </div>
                        </div>
                    </div>
                }


            </div>
        </>
    );
};

export default About;
