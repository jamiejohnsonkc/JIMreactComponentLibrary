import React from "react";
import { typeWriterText } from "./typeWriterText";

export default {
  title: "typeWriterText",
  argTypes: {
    children: { control: "text" },
  },
};

const Template = (args) => <typeWriterText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Button",
};
