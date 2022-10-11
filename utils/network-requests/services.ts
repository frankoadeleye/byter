import { Endpoint } from "./api";
import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
};

export const LOGIN_USER = (data) => {
  return axios.post(Endpoint.user.signIn, data, { headers });
};

export const REGISTER_USER = (data) => {
  return axios.post(Endpoint.user.signUp, data, { headers });
};

export const GET_USERS = (data) => {
  return axios.get(Endpoint.getUsers, { headers });
};

const Services = {
  REGISTER_USER,
  LOGIN_USER,
  GET_USERS,
};

export default Services;
