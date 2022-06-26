import axios from "axios";
import {
  Table,
  TableRow,
  TableCell,
  ShadingType,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
  WidthType,
  ImageRun,
} from "docx";
import { documents } from "../document_builder/documentBuilder";
import { Packer, Document } from "docx";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";

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

//! Pour telecharger un document !!
//* COMPLEXE REQUEST !
// Axios call distante API for single compressor only
/* const callApiSingleCompressor = (token, payload) => {
  console.log("call url = ", URL);
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
}; */

const callApiSingleCompressor = (token, payload) => {
  console.log("call url = ", URL);
  const strPayload = JSON.stringify(payload);
  return axios({
    method: "get",
    url: `${URL}/api/unique?payload=${strPayload}`,
    headers: { Authorization: `Bearer ${token}` },
    responseType: "json",
    /* timeout: 30000, */
  }).then((response) => {
    console.log("response", response.data.data);
    const apiResult = response.data.data;
    const core = documents(apiResult);
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: core,
        },
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, "draft.docx");
    });
  });
};
