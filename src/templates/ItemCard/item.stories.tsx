import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ItemCard from "./Presenter";

export default {
  title: "Test2/ItemCard",
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => (
  <BrowserRouter>
    <ItemCard {...args} />
  </BrowserRouter>
);

export const Option1 = Template.bind({});
Option1.args = {
  id: "9a2717a0-9a39-11ed-9b5a-b16cc2bc0076",
  name: "Замена аккумулятора",
  price: 4000,
  content: "Стекло оригинал от Apple",
};
