import React from 'react';
import {Link} from 'gatsby';

export default function ProjectListing({project, children}) {
  return (
    <li className="post" key={project._id}>
      {children}

      <p className="meta">
        <span>
          <span>
            {project.lastWorkedOn && 'Project last worked on ' + project.lastWorkedOn}
            {project.lastWorkedOn == null && 'Project ongoing'}
          </span>
        </span>
      </p>
      <p>
        <Link to={`/projects/${project.slug.current}/`}>
          <span className="excerpt">{project.excerpt}</span>...
        </Link>
      </p>
    </li>
  );
}
