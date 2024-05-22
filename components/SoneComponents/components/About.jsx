import styles from '../MeLlamoArt.module.css'

const About = ( data ) => {

  return (
    <>
      <h2 id="about" className={styles.MeLlamoArtSectionTitle}>About</h2>
      <h3 className={styles.MeLlamoArtSectionSubtitle + ' ' + styles.MeLlamoArtSectionSubtitleNoText}></h3>
      <div className={styles.MeLlamoArtAbout}>
        <div className={styles.MeLlamoArtAboutItem}>
          <h3><span>{data.data.about_section1_title}</span>{data.data.about_section1_text}</h3>
        </div>

        <div className={styles.MeLlamoArtAboutItem}>
          <h3><span>{data.data.about_section2_title}</span>{data.data.about_section2_text}</h3>
        </div>

        <div className={styles.MeLlamoArtAboutItem}>
          <h3><span>{data.data.about_section3_title}</span>{data.data.about_section3_text}</h3>
        </div>

        <div className={styles.MeLlamoArtAboutItem}>
          <h3><span>{data.data.about_section4_title}</span>{data.data.about_section4_text}</h3>
        </div>
      </div>
    </>
  )
}

export default About
