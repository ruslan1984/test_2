import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Presenter from "./Presenter";

export default {
  title: "Test2/ItemList",
  component: Presenter,
} as ComponentMeta<typeof Presenter>;

const Template: ComponentStory<typeof Presenter> = (args) => (
  <BrowserRouter>
    <Presenter {...args} />
  </BrowserRouter>
);

export const ItemList1 = Template.bind({});
ItemList1.args = {
  itemList: [
    {
      id: "9a2717a0-9a39-11ed-9b5a-b16cc2bc0076",
      name: "Замена аккумулятора",
      price: 4000,
    },
    {
      id: "9a2717a0-9a39-11ed-9b5a-b16cc2bc0076",
      name: "Замена аккумулятора",
      price: 4000,
    },
    {
      id: "9a2717a0-9a39-11ed-9b5a-b16cc2bc0076",
      name: "Замена аккумулятора",
      price: 4000,
    },
  ],
};
