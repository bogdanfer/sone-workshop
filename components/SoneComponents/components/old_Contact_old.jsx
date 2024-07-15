import * as React from "react";
import { useState, useEffect, useRef } from "react";
import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import classNames from 'classnames';

import ImageMapper from 'react-img-mapper';

import Header from './Header/Header';

const Contact = ({ contactData, slogan }) => {
    console.log("data: ", contactData)

    // states
    const [ isImgBlur, setIsImgBlur ] = useState(false);

    // background image 
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };
    const backgroundImage = urlFor(contactData?.background).url();
    const backgroundImageMobile = urlFor(contactData?.backgroundMobile).url();

    // image classes on blur
    const onLogoHover = (makeBlur) => {
        setIsImgBlur(makeBlur);
    }

    const imgClasses = classNames('sone-image-map', {
        ['hasBlur']: isImgBlur,
    });

    // IMG MAP
    const [containerWidth, setContainerWidth] = useState(0);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    const MAP = {
        name: 'contact-map',
        // GET JSON FROM BELOW URL AS AN EXAMPLE
        areas: [
            {
                "id": "469f9800-c45a-483f-b13e-bd24f3fb79f4",
                "title": "Paris",
                "shape": "poly",
                "name": "paris",
                "fillColor": "#eab54d4d",
                "strokeColor": "black",
                "preFillColor": 'rgba(255, 0, 0, 0.5)',
                "coords": [
                    660,
                    150,
                    760,
                    150,
                    760,
                    250,
                    660,
                    250
                ],
            }
        ],
    };

    const handleAreaClick = (area, index, event) => {
        console.log('Clicked area:', area.name);
        // console.log('Index:', index);
        // console.log('Event:', event);
    };

    const renderMarkers = () => {
        console.log("render markes")
        return MAP.areas.map((area, index) => {
            // Calculate the center of the polygon for placing the marker
            const xCoords = area.coords.filter((_, i) => i % 2 === 0);
            const yCoords = area.coords.filter((_, i) => i % 2 === 1);
            const centerX = xCoords.reduce((a, b) => a + b, 0) / xCoords.length;
            const centerY = yCoords.reduce((a, b) => a + b, 0) / yCoords.length;

            // console.log(xCoords,)
            // console.log(yCoords)
            // console.log(centerX)
            // console.log(centerY)

            // let vw = Math.max(document?.documentElement.clientWidth || 0, window.innerWidth || 0)
            // let vh = Math.max(document?.documentElement.clientHeight || 0, window.innerHeight || 0)

            console.log(yCoords[0])
    
          return (
            <div
              key={index}
              className="marker"
              style={{
                position: 'absolute',
                top: yCoords[0],
                left: xCoords[0]-100,
                transform: 'translate(-50%, -60%)',
                color: '#000',
                fontSize: '200px',
                zIndex: '999',
                fontWeight: 'lighter',
                pointerEvents: 'none'
              }}
            >
              +
            </div>
          );
        });
    };

    const handleImageLoad = (event) => {
        setImageDimensions({
            width: event.target.naturalWidth,
            height: event.target.naturalHeight,
        });
    };

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
            renderMarkers();
        };
      
        window.addEventListener('resize', updateWidth);
        updateWidth();
      
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <>         
            <div className='sone-contact-wrapper'>
                {/* Header */}
                <Header slogan={slogan} onLogoHover={onLogoHover} variant="black" size="small" /> 

                {/* Contact - Map Wrapper */}
                <div className="sone-map-wrapper">
                    <div className="sone-map--mobile">
                        <img className={imgClasses} src={backgroundImageMobile} alt="" />
                    </div>

                    <div className="sone-map--desktop" style={{ width: '100%', margin: '0 auto', position: 'relative' }} ref={containerRef}>
                        {/* <img className={imgClasses} src={backgroundImage} alt="" /> */}
                        <img src={URL} alt="map" style={{ display: 'none' }} onLoad={handleImageLoad} />
                        <ImageMapper 
                            src={backgroundImage} 
                            map={MAP} 
                            onClick={handleAreaClick}
                            responsive={true}
                            parentWidth={containerWidth}
                        />
                        {renderMarkers()}
                    </div>

                    <div className="sone-contact-content">
                        <h3>{contactData.headline}</h3>

                        <div className="sone-contact-sidebar">
                            <div>
                                <span>Get in touch</span>
                                <a className="contact-link" href="mailto:contact@soneworkshop.com">contact@soneworkshop.com</a>
                                <a className="contact-link" href="tel:+33157840051">+33157840051</a>
                            </div>

                            <div>
                                <span>Get in touch</span>
                                <a className="contact-link" href="https://google.com" target="_blank">LinkedIn</a>
                                <a className="contact-link" href="https://google.com" target="_blank">Instagram</a>
                                <a className="contact-link" href="https://google.com" target="_blank">Pinterest</a>
                            </div>

                        </div>

                    </div>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="sone-backtop">Back to Top</button>
                </div>

                {/* Content */}
                {/* {!isImgBlur &&
                    <div className='sone-workshop-content'>
                        <h4 className='sone-caps-text-large sone-break-spaces'>{contactData.headline}</h4>
                    </div>
                } */}


            </div>
        </>
    );
};

export default Contact;
