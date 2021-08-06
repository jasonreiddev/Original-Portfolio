import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';

const Images = () => {
  const data = useStaticQuery(graphql`
        query CloudinaryImages {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }
          `,
  );
  const clImages = data.allCloudinaryMedia.edges;

  return (
    <Layout title="Logo" >
      <div>
        <div>
          {clImages.map((image, index) => (
            <div key={`${index}-cl`}>
              <img src={image.node.secure_url} />
            </div>
          ))
          }
        </div>
      </div>
    </Layout>

  );
};

export default Images;
