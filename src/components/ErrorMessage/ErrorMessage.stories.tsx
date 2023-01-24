import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ErrorMessage from "./index";

export default {
  title: "Test2/ErrorMessage",
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

const refreshClick = () => {
  action("onClick");
};

export const Template: ComponentStory<typeof ErrorMessage> = () => (
  <ErrorMessage refreshClick={refreshClick} />
);
