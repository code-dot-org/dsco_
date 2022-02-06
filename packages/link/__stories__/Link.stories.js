import React from 'react';
import Link from '../lib/Link';

export default {
  title: 'Link',
};

const Template = (args) => <Link {...args}>{args.children}</Link>;

export const Default = Template.bind({});
Default.args = {
  children: 'Go to Code Studio',
  external: false,
  href: 'https://studio.code.org',
  openInNewTab: true,
  weight: 'regular',
};
