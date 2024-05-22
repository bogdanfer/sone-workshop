import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Carousel from "nuka-carousel";

import styles from "../MeLlamoArt.module.css";

const Intro = (data) => {
  const builder = imageUrlBuilder(myConfiguredSanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const previousDisabled = false;
  const nextDisabled = false;


  return (
    <div id="home" className={styles.MeLlamoArtIntro}>
      {/* Slider */}
      <Carousel
        autoplay={true}
        wrapAround={true}
        className={styles.MeLlamoArtCarousel}
        renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
          <svg
            style={{ marginLeft: "50px" }}
            onClick={previousSlide}
            disabled={previousDisabled}
            width="34"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 32"
          >
            <path d="M16 1 1 16l15 15" stroke="#fff" />
          </svg>
        )}
        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
          <svg
            style={{ marginRight: "50px" }}
            onClick={nextSlide}
            disabled={nextDisabled}
            width="34"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 32"
          >
            <path d="m1 1 15 15L1 31" stroke="#fff" />
          </svg>
        )}
        renderBottomCenterControls={false}
      >
        {data.data.map((slide, i) => {
          return (
            <div className={styles.MeLlamoArtIntroSlide}>
              <img src={urlFor(slide.image).url()} alt="" />
              <a
                href={slide.intro_slide.slide_url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={styles.MeLlamoArtIntroSlideTitle}>
                  {slide.intro_slide.slide_title}
                </h2>
                <h3 className={styles.MeLlamoArtIntroSlideSubtitle}>
                  {slide.intro_slide.slide_subtitle}
                </h3>
                <h4 className={styles.MeLlamoArtIntroSlideCategory}>
                  {slide.intro_slide.slide_category}
                </h4>
              </a>
            </div>
          );
        })}
      </Carousel>
      <div className={styles.MeLlamoArtIntroSpacer}></div>
      {/* Links */}
      <div className={styles.MeLlamoArtIntroLinks}>
        {data.links.map((link, i) => {
          return (
            <a
              href={link.introLink.linkUrl}
              className={styles.MeLlamoArtIntroLink}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                {link.introLink.linkTitle}
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 9 10"
                >
                  <path d="M.137 5H8M4.691 1l3.312 4L4.69 9" stroke="#000" />
                </svg>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Intro;
