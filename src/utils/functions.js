import { produce } from "immer";




export const themeSwitch = (theme = "vertical", attributes) => produce(attributes, (draft) => {
  draft["theme"] = theme;


})




export const addSvgAttrs = (svgString, attrs = {}) => {
  let extra = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return svgString.replace("<svg", `<svg ${extra}`);
};