import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import Link from "next/link";


import Icon from "../Icon/Icon.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import Footer from "../Footer.jsx";
import styles from "./FeaturedArtist.module.css";

const FeaturedArtist = ({ artistData }) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState();
  const [selectedArtistURL, setSelectedArtistURL] = useState("");
  const [featuredImgURL, setFeaturedImgURL] = useState("");

  const toggleModal = () => setShowImageModal(!showImageModal);

  const router = useRouter();
  const { name } = router.query;

  //filter through all artists to find selected artist
  //once CMS query is updated in [...name].js we can refactor this
  useEffect(() => {
    const artistName = name[0];
    setSelectedArtist(
      artistData?.artists.filter(
        (obj) =>
          obj.artist_name.toLowerCase().indexOf(artistName?.toLowerCase()) >= 0
      )[0]
    );
  }, [artistData]);

  useEffect(() => {
    selectedArtist && setSelectedArtistURL(selectedArtist.artistImage);
    selectedArtist && setFeaturedImgURL(selectedArtist.featuredImage);
  }, [selectedArtist]);

  const toggleMobileMenu = () => setMobileMenu(!showMobileMenu);

  const builder = imageUrlBuilder(myConfiguredSanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <div className={styles.MeLlamoArtContainer}>
        <div className={styles.MeLlamoArtMobileToggle}>
          <input type="checkbox" onClick={toggleMobileMenu} />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={
            styles.MeLlamoArtNavBar +
            " " +
            (showMobileMenu ? styles.MeLlamoArtMobileShow : "")
          }
        >
          <nav>
            <a
              href="https://www.mellamoart.com"
              className={styles.MeLlamoArtLogoWrapper}
            >
              <Icon variant="meLlamo" />
              <span className={styles.MeLlamoArtTypeLogo}>Me Llamo Art</span>
            </a>
            <div>
              {/* fix these links to go to home page */}
              <a href="https://www.mellamoart.com#founder">Founder</a>
              <a href="https://www.mellamoart.com#artists">Artists</a>
              <a href="https://www.mellamoart.com#galleries">Galleries</a>
              <Link href="/team">Team</Link>
              <a href="https://www.mellamoart.com#about">About</a>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.pageTitle}>
        <h2>ARTISTS</h2>
        <a href="https://www.mellamoart.com#artists">BACK TO ALL ARTISTS</a>
      </div>
      <div className={styles.divider} />
      {selectedArtistURL && (
        <img
          src={urlFor(selectedArtistURL)
            .auto("format")
            .width(1386)
            .height(531)
            .url(selectedArtistURL)}
          alt=""
          className={styles.headerImg}
        />
      )}

      <span className={styles.artistNameImgOverlay}>
        {selectedArtist?.artist_name}
      </span>

      <div className={styles.pageBody}>
        <div className={styles.textBody}>
          <p>{selectedArtist?.artist_description}</p>
        </div>
        <div className={styles.bodyLinkMenu}>
          {selectedArtist?.artistLinks ? (
            <>
              <h2>LINKS:</h2>
              {selectedArtist.artistLinks.map((link, i) => {
                return (
                  <>
                    <div className={styles.linkListItem}>
                      <a
                        href={link.artistLink.artistLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>{link.artistLink.artistLinkTitle}</p>
                      </a>
                      <Icon variant="goArrowBlue" />
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <div style={{ width: "115px" }} />
          )}
        </div>
      </div>

      <div className={styles.inCollectionArea}>
        <h2>IN THE ME LLAMO COLLECTION:</h2>
        <div className={styles.featuredImageBox}>
          <div className={styles.artInfo}>
            <p className={styles.bold}>{selectedArtist?.artist_name}</p>
            <p className={styles.italic}>
              {selectedArtist?.featured_image_title}
            </p>
          </div>

          <div className={styles.featuredImage}>
            {featuredImgURL && (
              <img
                src={urlFor(featuredImgURL).auto("format").url()}
                alt=""
                className={styles.headerImg}
                onClick={() => {
                  toggleModal();
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.footerAdjust}>
        <Footer />
      </div>

      {showImageModal && (
        <ImageModal selectedArtist={selectedArtist} onClose={toggleModal} />
      )}
    </div>
  );
};

export default FeaturedArtist;
