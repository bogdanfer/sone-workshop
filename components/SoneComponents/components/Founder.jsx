import myConfiguredSanityClient from '@lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

import styles from '../MeLlamoArt.module.css'

const Founder = ( data ) => {
  const builder = imageUrlBuilder(myConfiguredSanityClient)

  const urlFor = (source) => {
    return builder.image(source)
  }

  return (
    <div id="founder" className={styles.MeLlamoArtFounder}>
      <div className={styles.MeLlamoArtFounderLeftBlock}>
        <h2>{data.title}</h2>
        <img src={urlFor(data.image).url()} alt="" />
      </div>
      <h3 className={styles.MeLlamoArtFounderBold}>{data.founderstext}</h3>
    </div>
  )
}

export default Founder
