import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./src";

export default {
  title: "Button",
  component: Button
};

export const CTA = () => (
  <Button onClick={action("clicked")}>CTA Button</Button>
);
