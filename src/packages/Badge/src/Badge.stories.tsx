import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Badge from "./";

export default {
  title: "Badge",
  decorators: [withKnobs]
};

export const Default = () => (
  <Badge
    color={text("color", "black")}
    onClick={action("clicked")}
    showOutline={boolean("Has outline", false)}
  >
    Badge
  </Badge>
);
