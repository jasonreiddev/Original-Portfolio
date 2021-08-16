import {useState, useEffect} from 'react';

const gql = String.raw;

export default function useLatestData() {
  // hot slices
  const [introText, setIntroText] = useState();
  // slicemasters
  const [featuredProjects, setFeaturedProjects] = useState();
  // Use a side effect to fetcht he data from the graphql endpoint
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
        // TODO: checl for errors
        // set the data to state
          setIntroText(res.data.SiteSettings.introText);
          setFeaturedProjects(res.data.SiteSettings.featuredProjects);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  return {
    introText,
    featuredProjects,
  };
}
