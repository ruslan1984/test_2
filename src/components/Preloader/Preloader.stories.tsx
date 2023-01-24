import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "./index";

export default {
  title: "Test2/Preloader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

export const Template: ComponentStory<typeof Loader> = () => <Loader />;
