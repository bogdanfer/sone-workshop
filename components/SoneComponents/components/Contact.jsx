import * as React from "react";
import { useState } from "react";
import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import classNames from 'classnames';

import Header from './Header/Header';

import useMobileDetect from '../helpers/useMobileDetect';
import ScrollProgressBar from '../helpers/ScrollProgressBar';

const Contact = ({ contactData, slogan }) => {
    // states
    const [ isImgBlur, setIsImgBlur ] = useState(false);
    const isMobile = useMobileDetect();

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

    return (
        <>         
            {isMobile &&
                <ScrollProgressBar theme="white" />
            }
            <div className='sone-contact-wrapper'>
                {/* Header */}
                <Header slogan={slogan} onLogoHover={onLogoHover} variant="black" size="small" /> 

                {/* Contact - Map Wrapper */}
                {!isImgBlur &&
                    <div className="sone-map-wrapper">
                        <div className="sone-map--mobile">
                            {/* <img className={imgClasses} src={backgroundImageMobile} alt="" /> */}

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="soneHS__Wrapper">
                                            <figure>
                                                <img className="img-fluid" src={backgroundImageMobile} alt="" />
                                            </figure>

                                            <div className="soneHS__Modal">
                                                {/* Paris Map Pin */}
                                                {contactData?.locations[0]?.address_city === 'Paris' &&
                                                    <div className="soneHS__Modal__Input">
                                                        <input type="checkbox" id="H1m" name="HotSpot" className="soneHS__Input" style={{ left: '20%', top: '53%' }} />
                                                        <label htmlFor="H1m" className="soneHS__Label" style={{ left: '20%', top: '53%' }}>
                                                            <span></span>
                                                            <span></span>
                                                        </label>
                                                        <label htmlFor="H1m" className="soneHS__Overlay" data-city='paris'></label>
                                                        <div className="soneHS__Modal__Content" data-city='paris'>
                                                            <div className="Content__Wrapper">
                                                                <label htmlFor="H1" className="soneHS__Close"></label>
                                                                <h3 className="soneHS__Title">{contactData.locations[0].title}</h3>
                                                                <h4>{contactData.locations[0].position}</h4>
                                                                <h5>{contactData.locations[0].address_street}</h5>
                                                                <h5>{contactData.locations[0].address_city}</h5>
                                                                <h5>{contactData.locations[0].address_country}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                                {/* Yangon Map Pin */}
                                                {contactData?.locations[1]?.address_city === 'Yangon' &&
                                                    <div className="soneHS__Modal__Input">
                                                        <input type="checkbox" id="H2m" name="HotSpot" className="soneHS__Input" style={{ left: '50%', top: '68%' }} />
                                                        <label htmlFor="H2m" className="soneHS__Label" style={{ left: '50%', top: '68%' }}>
                                                            <span></span>
                                                            <span></span>
                                                        </label>
                                                        <label htmlFor="H2m" className="soneHS__Overlay" data-city='yangon'></label>
                                                        <div className="soneHS__Modal__Content" data-city='yangon'>
                                                            <div className="Content__Wrapper">
                                                                <label htmlFor="H1" className="soneHS__Close"></label>
                                                                <h3 className="soneHS__Title">{contactData.locations[1].title}</h3>
                                                                <h4>{contactData.locations[1].position}</h4>
                                                                <h5>{contactData.locations[1].address_street}</h5>
                                                                <h5>{contactData.locations[1].address_city}</h5>
                                                                <h5>{contactData.locations[1].address_country}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sone-map--desktop">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="soneHS__Wrapper">
                                            <figure>
                                                <img className="img-fluid" src={backgroundImage} alt="" />
                                            </figure>

                                            <div className="soneHS__Modal">
                                                {/* Paris Map Pin */}
                                                {contactData?.locations[0]?.address_city === 'Paris' &&
                                                    <div className="soneHS__Modal__Input">
                                                        <input type="checkbox" id="H1" name="HotSpot" className="soneHS__Input" style={{ left: '10%', top: '15%' }} />
                                                        <label htmlFor="H1" className="soneHS__Label" style={{ left: '35%', top: '15%' }}>
                                                            <span></span>
                                                            <span></span>
                                                        </label>
                                                        <label htmlFor="H1" className="soneHS__Overlay" data-city='paris'></label>
                                                        <div className="soneHS__Modal__Content" data-city='paris'>
                                                            <div className="Content__Wrapper">
                                                                <label htmlFor="H1" className="soneHS__Close"></label>
                                                                <h3 className="soneHS__Title">{contactData.locations[0].title}</h3>
                                                                <h4>{contactData.locations[0].position}</h4>
                                                                <h5>{contactData.locations[0].address_street}</h5>
                                                                <h5>{contactData.locations[0].address_city}</h5>
                                                                <h5>{contactData.locations[0].address_country}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                                {/* Yangon Map Pin */}
                                                {contactData?.locations[1]?.address_city === 'Yangon' &&
                                                    <div className="soneHS__Modal__Input">
                                                        <input type="checkbox" id="H2" name="HotSpot" className="soneHS__Input" style={{ left: '5%', top: '35%' }} />
                                                        <label htmlFor="H2" className="soneHS__Label" style={{ left: '25%', top: '45%' }}>
                                                            <span></span>
                                                            <span></span>
                                                        </label>
                                                        <label htmlFor="H2" className="soneHS__Overlay" data-city='yangon'></label>
                                                        <div className="soneHS__Modal__Content" data-city='yangon'>
                                                            <div className="Content__Wrapper">
                                                                <label htmlFor="H1" className="soneHS__Close"></label>
                                                                <h3 className="soneHS__Title">{contactData.locations[1].title}</h3>
                                                                <h4>{contactData.locations[1].position}</h4>
                                                                <h5>{contactData.locations[1].address_street}</h5>
                                                                <h5>{contactData.locations[1].address_city}</h5>
                                                                <h5>{contactData.locations[1].address_country}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                }
            </div>
        </>
    );
};

export default Contact;
