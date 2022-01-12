import React from "react";
import Link from "../src/Link";

export default {
  title: "Link",
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "/some/url",
  text: "click me!",
};
