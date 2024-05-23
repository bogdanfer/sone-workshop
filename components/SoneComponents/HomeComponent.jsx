import Icon from './components/Icon/Icon.jsx'
import Link from 'next/link';
import Header from './components/Header/Header.jsx';

import { useState } from 'react'
import classNames from 'classnames';
import myConfiguredSanityClient from "@lib/sanity";
import { tryGetFileAsset } from "@sanity/asset-utils"

import styles from './HomeComponent.module.css'

const HomeComponent = (data) => {
  const [ isVideoBlur, setIsVideoBlur ] = useState(false);
  const [ showIntroText, setIntroText ] = useState(false);
  // const [showMobileMenu, setMobileMenu] = useState(false)
  // const toggleMobileMenu = () => setMobileMenu(!showMobileMenu)

  console.log("here is: ", data )

  if (!data.data) {
    return
  } 
  const videos = data.data.homeVideos;
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const onLogoHover = (makeBlur, showText) => {
    setIsVideoBlur(makeBlur);
    setIntroText(showText);
  }

  const videoClasses = classNames(styles.SoneHomeVideoBackground, {
    [styles.hasBlur]: isVideoBlur,
  });

  const headlineClasses = classNames(styles.SoneHeadline, {
    [styles.fadeInHeadline]: showIntroText
  })

  return (
    <>
      <Header onLogoHover={onLogoHover} />
      <div className={styles.SoneHome}>
        {/* random background video from array */}
        {videos &&
          <video className={videoClasses} muted loop playsInline autoPlay>
            <source src={tryGetFileAsset(videos[getRandomInt(videos.length)], myConfiguredSanityClient.config()).url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }

        <h1 className={headlineClasses}>{data.data.excerpt}</h1>
      </div>
    </>
  )
}

export default HomeComponent
