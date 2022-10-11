let DEV_BASE_URL = "https://dev-gateway.meterservicehub.com";

let PROD_BASE_URL = " https://gateway.meterservicehub.com";

let BASE_URL;

if (process.env.NODE_ENV === "production") {
  BASE_URL = PROD_BASE_URL;
} else {
  BASE_URL = DEV_BASE_URL;
}

const Endpoint = {
  user: {
    signIn: `${BASE_URL}/auth/login`,
    signUp: `${BASE_URL}/agent`,
  },
  getUsers: `https://jsonplaceholder.typicode.com/users`,
};

export { Endpoint, BASE_URL };
