import { saveAs } from "file-saver";
import { Buffer } from "buffer";
import axios from "axios";

const offLineUrl = "http://localhost:5500";
const onLineUrl = "https://afternoon-scrubland-03383.herokuapp.com";
const URL = process.env.REACT_APP_ENVIRONMENT ? offLineUrl : onLineUrl;
const MIMETYPE =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const KEY = process.env.REACT_APP_ENVIRONMENT
  ? process.env.REACT_APP_KEY_ADMIN
  : process.env.REACT_APP_KEY_512B;
// Axios call end point API to get JWT and launch other API request
export async function callApi(payload, userEmail) {
  // Config
  const url = `${URL}/api/login`;
  const axiosConf = {
    method: "post",
    data: {
      username: `${userEmail}`, //admin,
      password: KEY, //"admin",
    },
    url: url,
    headers: { "Content-Type": "application/json" },
    responseType: "json",
  };
  // Call API
  const requestResult = await axios(axiosConf)
    .then((result) => {
      return result.data.token; //JWT
    })
    .then(async (token) => {
      const result = await callApiSingleCompressor(token, payload);
      return result;
    });
  return requestResult;
}

// Axios call end point API for build document offer only for single compressor
const callApiSingleCompressor = async (token, payload) => {
  // Config
  const url = `${URL}/api/unique?payload=${JSON.stringify(payload)}`;
  const axiosConf = {
    method: "get",
    url: url,
    headers: { Authorization: `Bearer ${token}` },
    responseType: "json",
  };
  // Call API
  const requestResult = await axios(axiosConf)
    .then((response) => {
      return response.data.data;
    })
    .then((result) => {
      if (result) {
        const decodedData = Buffer.from(result, "base64");
        const blob = new Blob([decodedData], {
          type: MIMETYPE,
        });
        saveAs(blob, "Offre.docx");
        return true;
      } else {
        console.warn("Bad datas input");
        return false;
      }
    });
  return requestResult;
};
