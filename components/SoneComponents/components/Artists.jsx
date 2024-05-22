import myConfiguredSanityClient from "@lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

import styles from "../MeLlamoArt.module.css";

const Artists = (data) => {
  const [artistsNotFeatured, setArtistsNotFeatured] = useState([]);
  const [showAllArtists, setShowAllArtists] = useState(false);
  const sliderRef = useRef();

  const handleKeyup = (e) => e.keyCode === 27 && setShowAllArtists(false);
  const toggleModal = () => setShowAllArtists(!showAllArtists);

  useEffect(() => {
    {
      data.data?.map((artist) => {
        if (artist.featured === false) {
          setArtistsNotFeatured((artistsNotFeatured) => [
            ...artistsNotFeatured,
            artist,
          ]);
        }
      });
    }
  }, [data]);

  useEffect(() => {
    if (showAllArtists) window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  });

  const builder = imageUrlBuilder(myConfiguredSanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderRef.current.addEventListener("mousedown", (e) => {
      isDown = true;
      sliderRef.current.setAttribute("data-grabbing", "active");
      startX = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    });

    sliderRef.current.addEventListener("mouseleave", () => {
      isDown = false;
      sliderRef.current.setAttribute("data-grabbing", "");
    });

    sliderRef.current.addEventListener("mouseup", () => {
      isDown = false;
      sliderRef.current.setAttribute("data-grabbing", "");
    });

    sliderRef.current.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      sliderRef.current.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <>
      <h2 id="artists" className={styles.MeLlamoArtSectionTitle}>
        Artists
      </h2>
      <span className={styles.MeLlamoArtSectionSubtitle}>{data.subheadline}</span>
      <div
        ref={sliderRef}
        className={
          styles.MeLlamoArtArtists +
          " " +
          (showAllArtists ? styles.MeLlamoArtBlur : "")
        }
      >
        {data.data
          ?.sort(function (a, b) {
            if (a.artist_name.toLowerCase() < b.artist_name.toLowerCase())
              return -1;
            if (a.artist_name.toLowerCase() > b.artist_name.toLowerCase())
              return 1;
            return 0;
          })
          .map((artist, i) => {
            if (artist.featured) {
              return (
                <div key={i} className={styles.MeLlamoArtArtistsItem}>
                  <h6>{artist.artist_name}</h6>
                  <Link href={`/${artist.artist_name}`}>
                    <img src={urlFor(artist.artistImage).url()} alt="" />
                    <div className={styles.artistsItemBottomText}>
                      <span>View more</span>
                      <svg
                        width="7"
                        height="8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="a" fill="#fff">
                          <path d="M.367.594h6.25v6.25H.367V.594Z" />
                        </mask>
                        <path
                          d="M6.617.594h1v-1h-1v1Zm-6.25 1h6.25v-2H.367v2Zm5.25-1v6.25h2V.594h-2Z"
                          fill="#0068FF"
                          mask="url(#a)"
                        />
                        <path d="M6.049 1.16.367 6.842" stroke="#0068FF" />
                      </svg>
                    </div>
                  </Link>
                </div>
              );
            }
          })}

        {artistsNotFeatured?.length > 0 && (
          <div className={styles.MeLlamoArtArtistsItemAll}>
            <button onClick={toggleModal} target="_blank">
              <span>All Artists</span>
              <svg
                width="14"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m1 1 11 11L1 23" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* artists */}
      {showAllArtists && (
        <div className={styles.MeLlamoArtAllArtists} data-show="false">
          <button onClick={toggleModal}>
            <svg
              width="23"
              height="23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 21.5 1 1M1 21.5 21.5 1"
                stroke="#04367F"
                strokeWidth="2"
              />
            </svg>
            <span>Close</span>
          </button>

          <div className={styles.MeLlamoArtAllArtistsWrapper}>
            <span className={styles.MeLlamoArtAllArtistsWrapperTitle}>
              All artists
            </span>

            <div className={styles.MeLlamoArtAllArtistsList}>
              {data.data
                ?.sort(function (a, b) {
                  if (a.artist_name.toLowerCase() < b.artist_name.toLowerCase())
                    return -1;
                  if (a.artist_name.toLowerCase() > b.artist_name.toLowerCase())
                    return 1;
                  return 0;
                })
                .map((artist, i) => {
                  let currentLetter = "A";
                  let check;
                  let letterChapter;
                  let isLast;

                  if (i < data.data.length - 1) {
                    isLast =
                      data.data[i].artist_name.charAt(0) !==
                      data.data[i + 1].artist_name.charAt(0);
                  } else {
                    isLast = false;
                  }

                  if (i > 1) {
                    check =
                      data.data[i].artist_name.charAt(0) !==
                      data.data[i - 1].artist_name.charAt(0);
                  } else {
                    currentLetter = data.data[i].artist_name.charAt(0);
                    letterChapter = (
                      <span
                        key={`l-${i}`}
                        className={styles.MeLlamoArtAllArtistsListChapter}
                      >
                        {currentLetter}
                      </span>
                    );
                  }

                  if (check) {
                    currentLetter = data.data[i].artist_name.charAt(0);
                    letterChapter = (
                      <span
                        key={`l-${i}`}
                        className={styles.MeLlamoArtAllArtistsListChapter}
                      >
                        {currentLetter}
                      </span>
                    );
                  }

                  return (
                    <>
                      {letterChapter}
                      <a
                        key={`a-${i}`}
                        href={artist.artist_url}
                        target="_blank"
                        className={
                          styles.MeLlamoArtAllArtistsListItem +
                          " " +
                          (isLast
                            ? styles.MeLlamoArtAllArtistsListItemLast
                            : "")
                        }
                        rel="noreferrer"
                      >
                        {artist.artist_name}
                        <svg
                          key={`svg-${i}`}
                          width="7"
                          height="8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask id="a" fill="#fff">
                            <path d="M.367.594h6.25v6.25H.367V.594Z" />
                          </mask>
                          <path
                            d="M6.617.594h1v-1h-1v1Zm-6.25 1h6.25v-2H.367v2Zm5.25-1v6.25h2V.594h-2Z"
                            fill="#0068FF"
                            mask="url(#a)"
                          />
                          <path d="M6.049 1.16.367 6.842" stroke="#0068FF" />
                        </svg>
                      </a>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Artists;
