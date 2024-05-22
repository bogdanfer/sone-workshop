import myConfiguredSanityClient from '@lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

import styles from '../MeLlamoArt.module.css'

const Galleries = ( data ) => {
  const builder = imageUrlBuilder(myConfiguredSanityClient)

  const urlFor = (source) => {
    return builder.image(source)
  }
  
  return (
    <>
      <div id="galleries" className={styles.MeLlamoArtGalleries}>
        <h2 className={styles.MeLlamoArtSectionTitle}>Galleries</h2>
        <h3 className={styles.MeLlamoArtSectionSubtitle}>{data.subheadline}</h3>

        <div className={styles.MeLlamoArtGalleriesWrapper}>
          {data.data?.map((gallery, i) => {
            return (
              <div key={i} className={styles.MeLlamoArtGalleriesItem}>
                <div className={styles.MeLlamoArtGalleriesItemRow}>
                  <img src={urlFor(gallery.image[0]).url()} alt="" />
                  <div className={styles.MeLlamoArtGalleriesItemText}>
                    <h3>{gallery.galleryName.galleryTitle}</h3>
                    <h4>{gallery.artistName}</h4>
                  </div>
                </div>

                <h5>{gallery.galleryName.galleryDescription}</h5>
                <a href={gallery.viewGallery} rel="noreferrer" target="_blank">View gallery</a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Galleries
