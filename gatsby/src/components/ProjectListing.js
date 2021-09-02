import React from 'react';
import {Link} from 'gatsby';

export default function ProjectListing({project, children}) {
  console.log(project);
  console.log(children);
  return (
    <li className="post" key={project._id}>
      {children}
      <div className="excerpt">
        {project.excerpt}
      </div>
      <p className="meta">
        <span>{project.lastWorkedOn}</span>
      </p>
      <p className="button">
        <Link to={`/projects/${project.slug.current}/`}>Read More</Link>
      </p>
    </li>
  );
}
