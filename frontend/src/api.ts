const BASE_URL = "https://agtm-back.onrender.com/api/v1";

export async function getRooms() {
  const response = await fetch(`${BASE_URL}/class/`);
  const json = await response.json();
  return json;
}