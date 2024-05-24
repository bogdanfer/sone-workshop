import React, { useState } from 'react';
import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import classNames from 'classnames';
import Header from './Header/Header';

const Workshop = ({ workshopData, slogan }) => {
    // states
    const [ isImgBlur, setIsImgBlur ] = useState(false);

    // background image 
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };
    const backgroundImage = urlFor(workshopData.background).url();

    // image classes on blur
    const onLogoHover = (makeBlur) => {
        setIsImgBlur(makeBlur);
    }

    const imgClasses = classNames('sone-image-background', {
        ['hasBlur']: isImgBlur,
    });

    return (
        <>         
            <div className='sone-workshop-wrapper'>
                {/* background image */}
                <img className={imgClasses} src={backgroundImage} alt="" />

                {/* Header */}
                <Header slogan={slogan} onLogoHover={onLogoHover} variant="white" /> 

                {/* Content */}
                {!isImgBlur &&
                    <div className='sone-workshop-content'>
                        <h4 className='sone-caps-text-large sone-break-spaces'>{workshopData.excerpt}</h4>
                    </div>
                }


            </div>
        </>
    );
};

export default Workshop;
