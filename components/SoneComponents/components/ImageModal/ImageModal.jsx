import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Icon from "../Icon/Icon.jsx";
import styles from './ImageModal.module.css'


const ImageModal = ({
  selectedArtist,
  onClose
}) => {

  const builder = imageUrlBuilder(myConfiguredSanityClient)
  const urlFor = (source) => {
    return builder.image(source);
  };

  return (
    <div className={styles.root}>
      <div className={styles.close}>
        <Icon variant="close" onClick={() => onClose()} />
      </div>
      <div className={styles.bgWash} onClick={() => onClose()} />
      <div className={styles.imageWrapper} onClick={() => onClose()}>
        <img alt={selectedArtist.name} src={urlFor(selectedArtist.featuredImage)
          .auto("format")
          .url()} />
      </div>
    </div>
  )
}

export default ImageModal
