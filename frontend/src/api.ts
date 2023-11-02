import Cookie from "js-cookie";
import axios from "axios";
import { QueryFunctionContext } from "@tanstack/react-query"

// const BASE_URL = "https://agtm-back.onrender.com";

// export async function getClassList() {
//   const response = await fetch(`/api/v1/class/`,
//   {headers: {
//     "X-CSRFToken": Cookie.get("csrftoken") || "",
//   },});

//   const json = await response.json();
//   return json;
// }


const instance = axios.create({
  //  baseURL: "https://agtm-back.onrender.com/api/v1/",
});

export const getClassList = () =>
  instance.get("/api/v1/class/").then((response) => response.data);

export const getClassDetail =  ({ queryKey }: QueryFunctionContext)  => {
  const [_, classPk] = queryKey;
  console.log(`aaaa/class/${classPk}`)
  return instance.get(`/api/v1/class/2`).then((response) => response.data);
};
  
