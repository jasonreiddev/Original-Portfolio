import React from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from '@reach/router';
import {graphql, StaticQuery} from 'gatsby';

interface SEOProps {
  title?: any,
  subTitle?: any,
  description?: any,
  image?: any,
  content?: any,
};

export const SEO = (
    {title,
      subTitle,
      description,
      image,
      content,
    }:SEOProps) => {
  const {pathname} = useLocation();
  return (
    <StaticQuery
      query={graphql`
          query SiteMetadataQuery {
            site {
              siteMetadata {
                titleTemplate
                url
                description
                image
                twitterUsername
              }
            }
          }
        `}
      render={(data) => {
        const seo = data.site.siteMetadata;

        description = description ? description : seo.description;
        image = seo.url + (image ? image : seo.image);

        title = (title ? title +' | '+ seo.titleTemplate : seo.titleTemplate) +
         (subTitle ? ' - '+ subTitle : '');
        const pageUrl = seo.url + pathname;
        content = content ? content : 'website';

        return (
          <Helmet title={title}>
            <html lang="en" />
            <meta name="robots" content="index"/>
            <meta name="description" content={description} />

            <meta property="og:description" content={description} />
            <meta property="og:url" content={pageUrl} />

            <meta property="og:type" content={content} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <meta property="twitter:domain" content={seo.url}/>
            <meta property="twitter:url" content={pageUrl}/>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
        );
      }}
    />
  );
};
