import React from 'react';
import TextLink from '../lib/TextLink';

export default {
  argTypes: {onClick: {action: 'onClick'}},
  title: 'TextLink',
};

const Template = (args) => <TextLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  external: true,
  href: 'https://studio.code.org',
  icon: <i className="fa fa-external-link-alt" />,
  iconBefore: false,
  openInNewTab: true,
  text: 'Open Code Studio',
  weight: 'regular',
};
