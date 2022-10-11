import axios from "axios";

function MyAxios() {
  axios.defaults.withCredentials = true; //this ensures cross-domain sharing of cookie, without which our implentation of refresh_token won't work.

  return axios;
}

export default MyAxios;
