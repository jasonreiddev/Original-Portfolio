import React from 'react';

import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

const menuLinks = [
  {
    name: '',
    nameOverrideNav: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects/1',
  },
];

const Template = (args) => <Header {...args}/>;

export const Home = Template.bind({});
Home.args = {
  menuLinks: menuLinks,
  title: 'Home',
};

export const Projects = Template.bind({});
Projects.args = {
  menuLinks: menuLinks,
  title: 'Projects',
};
