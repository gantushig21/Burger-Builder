require("dotenv").config();

const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  MONGO_URL: process.env.MONGO_URL_DEV,
  MONGO_USER: process.env.MONGO_USER_DEV,
  MONGO_PASS: process.env.MONGO_PASS_DEV,
  USER_EXPIRATION_TIME: 300
};

const testConfig = {
  JWT_SECRET: process.env.JWT_SECRET_TEST,
  MONGO_URL: process.env.MONGO_URL_TEST,
  MONGO_USER: process.env.MONGO_USER_TEST,
  MONGO_PASS: process.env.MONGO_PASS_TEST,
  USER_EXPIRATION_TIME: 300
};

const prodConfig = {
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  MONGO_URL: process.env.MONGO_URL_PROD,
  MONGO_USER: process.env.MONGO_USER_PROD,
  MONGO_PASS: process.env.MONGO_PASS_PROD,
  USER_EXPIRATION_TIME: 300
};

const defaultConfig = {
  PORT: process.env.PORT || 3000
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};