import endBlok from '../components/EndBlok/endBlok'
import startBlok from '../components/startBlock/startBlok'


export default {
  name: "mainPage",
  title: "Main Page",
  type: "document",
  fields: [
    // {
    //   name: "image",
    //   title: "Image",
    //   type: "array",
    //   of: [{ type: "image" }],
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: "technikal",
      title: "Title offer666666",
      type: "string",
      inputComponent: startBlok,
    },
    {
      name: "title_offer",
      title: "Title offer",
      type: "string",
    },
    {
      name: "text_offer",
      title: "Text offer",
      type: "string",
    },
    {
      name: "button_offer1",
      title: "Button offer1",
      type: "string",
    },
    {
      name: "button_offer2",
      title: "Button offer2",
      type: "string",
    },
    {
      name: "technikal2",
      type: "string",
      inputComponent: endBlok,
    },
    // ===============
    {
      name: "technikal3",
      type: "string",
      inputComponent: startBlok,
    },
    {
      name: "reviews_title",
      title: "Reviews title",
      type: "string",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
    {
      name: "technikal4",
      type: "string",
      inputComponent: endBlok,
    },
  ],
};
