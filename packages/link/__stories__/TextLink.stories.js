import React from 'react';
import TextLink from '../lib/TextLink';

export default {
  title: 'TextLink',
};

const Template = (args) => <TextLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://studio.code.org',
  icon: <i className="fa fa-external-link-alt" />,
  iconBefore: false,
  text: 'Open Code Studio',
  weight: 'regular',
};
