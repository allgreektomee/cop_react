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
  withCredentials: true,
});

export const getClassList = () =>
  instance.get("/api/v1/class/").then((response) => response.data);

export const getClassDetail =  ({ queryKey }: QueryFunctionContext)  => {

  const [_, classPk] = queryKey;
  console.log(`getClassDetail/${classPk}`)
  return instance.get(`/api/v1/class/${classPk}`).then((response) => response.data);
};

export const getClassReviews = ({ queryKey }: QueryFunctionContext) => {
  const [_, classPk] = queryKey;
  console.log(`getClassReviews/${classPk}`)

  return instance
    .get(`/api/v1/class/${classPk}/reviews/`)
    .then((response) => response.data);
};

export const getMe = () =>
  instance.get(`/api/v1/users/me`).then((response) => response.data);

export const logOut = () =>
instance
.post(`/api/v1/users/logout`, null, {
  headers: {
    "X-CSRFToken": Cookie.get("csrftoken") || "",
  },
})
.then((response) => response.data);

export const kakaoLogin = (code: string) =>
  instance
    .post(
      `/api/v1/users/kakao`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);