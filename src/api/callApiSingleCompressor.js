import axios from "axios";

const LOCALURL = "http://localhost:5500";
//const WEBURL = "https://whispering-escarpment-89309.herokuapp.com";
const WEBURL = "https://afternoon-scrubland-03383.herokuapp.com";
const URL = process.env.REACT_APP_ENVIRONMENT ? LOCALURL : WEBURL;

//* BASIC REQUEST !
// Axios call distante API for JWT
export function callApi(payload) {
  axios
    // Ask JWT
    .post(
      `${URL}/api/login`,
      { username: "admin", password: "admin" },
      { headers: { "Content-Type": "application/json" } }
    )
    // Get JWT from result
    .then((result) => {
      return result.data.token;
    })
    // Call document end point creation
    .then((token) => callApiSingleCompressor(token, payload));
}

//* COMPLEXE REQUEST !
// Axios call distante API for single compressor only
const callApiSingleCompressor = (token, payload) => {
  const strPayload = JSON.stringify(payload);
  return axios({
    method: "get",
    url: `${URL}/api/unique?payload=${strPayload}`,
    headers: { Authorization: `Bearer ${token}` },
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Draft.docx");
    document.body.appendChild(link);
    link.click();
  });
};
