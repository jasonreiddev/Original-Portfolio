import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'siteSettings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      description: 'Text displayed on the homepage, including Mobile and Email',
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'Project' }] }],
    },
    /*TODO: {
      name: 'featuredBlogPosts',
      title: 'Hot Slices available in the case',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },*/
  ],
};