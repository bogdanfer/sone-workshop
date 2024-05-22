import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

import { useState } from "react";

import Icon from "../Icon/Icon.jsx";
import Footer from "../Footer.jsx";
import styles from "./Team.module.css";
import Link from "next/link";

const Team = ({ teamData }) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => setMobileMenu(!showMobileMenu);

  const subheadline =
    "";

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
        <h2>TEAM</h2>
      </div>

      <div className={styles.textBody}>
        <p>{subheadline}</p>
      </div>

      <div className={styles.divider} />
      <div className={styles.pageBody}>
        <div className={styles.MeLlamoArtGalleriesWrapper}>
          {teamData.team.map((member, i) => {
            return (
              <div key={i} className={styles.MeLlamoArtGalleriesItem}>
                <div className={styles.MeLlamoArtGalleriesItemRow}>
                  <img
                    src={urlFor(member.image)
                      // .auto("format")
                      // .fit("clip")
                      .quality(100)
                      .width(200)
                      .height(200)
                      .url()}
                    alt=""
                  />
                  <div className={styles.MeLlamoArtGalleriesItemText}>
                    <h3>{member.teamMemberName.teamMemberTitle}</h3>
                    <h4>{member.teamMemberName.teamMemberName}</h4>
                    <h5>{member.teamMemberName.teamMemberDescription}</h5>
                    {/* <div className={styles.linkListItem}>
                      <a
                        href={'https://linktr.ee/mindz.eye'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>@twitter_handle</p>
                      </a>
                      <Icon variant="goArrowBlue" />
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footerAdjust}>
        <Footer />
      </div>
    </div>
  );
};

export default Team;
