import React from 'react';
import {graphql} from 'gatsby';

import {Layout} from '../components/Layout/Layout';
import {Carousel} from '../components/Carousel/Carousel';

export default function Nancy({data}) {
  const clImages = data.allCloudinaryMedia.edges;

  const regexCategory = 'portfolio/animal/(.*)/';
  let imageCategory;
  const categoryList = [];

  clImages.forEach((image) => {
    imageCategory = image.node.public_id.match(regexCategory);

    if (!categoryList.includes(imageCategory[1])) {
      categoryList.push(imageCategory[1]);
    }
  });

  categoryList.forEach((category) => {
    const imageForCategory = clImages.filter((image) => image.node.public_id.match(`portfolio/animal/${category}/`));
    imageForCategory.forEach((image) => {
      console.log(image.node.public_id);
    });
  });

  return (
    <Layout title="Nancy" >
      <div>
        <div>
          {categoryList.map((category, index) => {
            return (
              <Carousel
                key={index}
                images =
                  {clImages.filter((image) => image.node.public_id.match(`portfolio/animal/${category}/`))}
              />
            );
          })}
        </div>
      </div>
    </Layout>

  );
};

export const query = graphql`
  query {
    allCloudinaryMedia(filter: {public_id: {regex: "portfolio/animal/*/"}}) {
    edges {
      node {
        url
        public_id
        secure_url
      }
    }
  }
  }
`;

