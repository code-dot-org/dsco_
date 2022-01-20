import Link from '../src/Link';
import React from 'react';

export default {
  title: 'Link',
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: '/some/url',
  text: 'click me!',
};
