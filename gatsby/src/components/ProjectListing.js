import React from 'react';
import {Link} from 'gatsby';

export default function ProjectListing({project, children}) {
  return (
    <li className="post" key={project._id}>
      {children}

      <p className="meta">
        <span>{project.lastWorkedOn}</span>
      </p>
      <p>
        <Link to={`/projects/${project.slug.current}/`}>
          <span className="excerpt">{project.excerpt}</span>...
        </Link>
      </p>
    </li>
  );
}
