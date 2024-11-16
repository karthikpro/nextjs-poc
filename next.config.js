module.exports = {
  env: {
    NEXT_PUBLIC_COMMON_VAR_A: process.env.NEXT_PUBLIC_COMMON_VAR_A,
    NEXT_PUBLIC_COMMON_VAR_B: process.env.NEXT_PUBLIC_COMMON_VAR_B,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    BASEURL: process.env.BASEURL,
    COMMON_VAR_A: process.env.COMMON_VAR_A,
    COMMON_VAR_B: process.env.COMMON_VAR_B,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    COMMON_VAR_A: process.env.COMMON_VAR_A,
    COMMON_VAR_B: process.env.COMMON_VAR_B,
  },
};
