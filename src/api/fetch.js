import axios from "axios";

export function postLogin(payload) {
  axios
    .post(
      "https://whispering-escarpment-89309.herokuapp.com/api/login",
      { username: "admin", password: "admin" },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => res.data)
    .then((res) => {
      console.log("post log", res);
      return res.token;
    })
    .then((token) => fetchTest(token, payload));
}

const fetchTest = (token, payload) => {
  const strPayload = JSON.stringify(payload);
  console.log(
    "payload",
    `https://whispering-escarpment-89309.herokuapp.com/api/unique?payload=${strPayload}`
  );
  return axios
    .get(
      `https://whispering-escarpment-89309.herokuapp.com/api/unique?payload=${strPayload}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data)
    .then((res) => console.log("result", res));
};
