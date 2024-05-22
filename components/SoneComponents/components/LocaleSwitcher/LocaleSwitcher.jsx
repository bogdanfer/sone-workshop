import { i18n } from '../../../../i18n.config';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
// import { useSearchParams } from 'react-router-dom';


const LocaleSwitcher = () => {
  // const params = useSearchParams();

  // console.log("params: ", params)

  // const availableTranslations = useMemo<Translation[]>(
  //   () =>
  //     i18n.languages.reduce<Translation[]>((acc, cur) => {
  //       const availableTranslation = translations?.find(
  //         (translation) => translation.language === cur.id,
  //       );
  //       if (availableTranslation) {
  //         acc.push(availableTranslation);
  //       }
  //       return acc;
  //     }, []),
  //   [translations],
  // );

  console.log("i18n: ", i18n)
  
  const currentLocale = useRouter().locale;

  return (
    <div className="some-language-wrapper">
      {i18n.languages.map((version) => {
        if (version.id !== currentLocale) {
          return (
            <Link
              key={version.id}
              href={version.id}
              locale={version.id}
            >
              {version.id}
            </Link>
          )
        }
      })}
    </div>
  );
};

export default LocaleSwitcher;
