import React from 'react';
import Link from '../lib/Link';
import TextLink from '../lib/TextLink';

export default {
  component: TextLink,
  subcomponents: {Link},
  title: 'TextLink',
};

const Template = (args) => <TextLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://studio.code.org',
  icon: <i className="fa fa-external-link-alt" />,
  text: 'Open Code Studio',
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  ...Default.args,
  iconBefore: true,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  ...Default.args,
  text: undefined,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...Default.args,
  icon: undefined,
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
