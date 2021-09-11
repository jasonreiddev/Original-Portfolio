import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const UlStyles = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
  }
`;

export default function Post({posts}) {
  return (
    <UlStyles>
      {posts.map((post) => {
        return (
          <li className="post" key={post.id}>
            {post.h2InsteadOfh3 &&
            <h2>
              <Link to={post.linkUrl}>{post.title}</Link>
            </h2>
            }
            {!post.h2InsteadOfh3 &&
            <h3>
              <Link to={post.linkUrl}>{post.title}</Link>
            </h3>
            }
            <p className="meta">
              {post.meta}
            </p>
            <p>
              <Link to={post.linkUrl}>
                <span className="excerpt">{post.excerpt}</span>
              </Link>
            </p>
          </li>
        );
      })}
    </UlStyles>
  );
}
