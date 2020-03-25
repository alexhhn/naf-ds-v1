import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, color } from "@storybook/addon-knobs";

import Badge from "./src";

export default {
  title: "Badge",
  decorators: [withKnobs],
  component: Badge
};

export const Default = () => (
  <Badge
    color={color("Text Color", "black")}
    backgroundColor={color("Background Color", "white")}
    onClick={action("clicked")}
    hasFocusOutline={boolean("Has focus outline", false)}
  >
    Badge
  </Badge>
);
