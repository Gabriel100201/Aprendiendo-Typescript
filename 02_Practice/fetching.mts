type Url = `https://${string}`;
const fetchURL: Url = "https://localhost/server";

const response = await fetch(fetchURL);
if (!response.ok) {
  throw new Error("Request Failed");
}
const data = await response.json();

console.log(data);
