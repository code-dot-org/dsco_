import React from 'react';
import Link from '../lib/Link';

export default {
  component: Link,
  title: 'Link',
};

const Template = (args) => <Link {...args}>{args.children}</Link>;

export const Default = Template.bind({});
Default.args = {
  children: 'Go to Code Studio',
  href: 'https://studio.code.org',
  weight: 'regular',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  weight: 'medium',
};

export const Bold = Template.bind({});
Bold.args = {
  ...Default.args,
  weight: 'bold',
};

const InlineTemplate = (args) => (
  <span style={{fontFamily: 'Gotham', fontSize: 14}}>
    This is an <Link {...args}>{args.children}</Link>
  </span>
);
export const Inline = InlineTemplate.bind({});
Inline.args = {
  children: 'inline link',
  href: 'https://www.example.com',
};
