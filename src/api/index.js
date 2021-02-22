import axios from "axios";
import { get } from "lodash";
import { getKey, getToken } from "@utils/localStorage";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const accessToken = getToken();
const accessKey = getKey();

const handleErrors = async (error) => ({
  data: get(error, "response.data", null),
  status: get(error, "response.status", null),
  error: true
});

const handleSuccess = (response) => ({
  data: response.data,
  status: response.status,
  success: true
});

const privateHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  "Cache-Control": "no-store, no-cache",
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Access-Token": `${accessToken}`,
  "X-Access-Type": `${accessKey}`
};

const publicHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  Accept: "application/json",
  "Content-Type": "application/json"
};

const api = () => {
  const request = axios.create({
    baseURL: API_URL,
    responseType: "json",
    headers: accessToken ? privateHeader : publicHeader
  });

  // Response interceptor for API calls
  request.interceptors.response.use(
    (response) => response,
    async (error) => Promise.reject(error)
  );

  return request;
};

const request = {
  get: (url) =>
    api()
      .get(API_URL + url)
      .then(handleSuccess)
      .catch(handleErrors),
  post: (url, data) =>
    api()
      .post(API_URL + url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  put: (url, data) =>
    api()
      .put(API_URL + url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  patch: (url, data) =>
    api()
      .patch(API_URL + url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  delete: (url) =>
    api()
      .delete(API_URL + url)
      .then(handleSuccess)
      .catch(handleErrors)
};

export default request;
