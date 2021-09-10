import {useState, useEffect} from 'react';

const gql = String.raw;

export default function useLatestData() {
  const [introText, setIntroText] = useState();
  const [featuredProjects, setFeaturedProjects] = useState();
  // Use a side effect to fetcht the data from the graphql endpoint
  useEffect(function() {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            SiteSettings(id: "JReidDevPort") {
              introText
              featuredProjects {
                projectTitle
              }
            }
          }
        `,
      }),
    })
        .then((res) => res.json())
        .then((res) => {
          setIntroText(res.data.SiteSettings.introText);
          setFeaturedProjects(res.data.SiteSettings.featuredProjects);
        });
  }, []);
  return {
    introText,
    featuredProjects,
  };
}
