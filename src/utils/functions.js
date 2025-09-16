import { produce } from "immer";




export const themeSwitch = (theme = "vertical", attributes) => produce(attributes, (draft) => {
  draft["theme"] = theme;


})



