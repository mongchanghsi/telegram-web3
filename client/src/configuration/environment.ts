const ENVIRONMENT = {
  INFURA_API_KEY: process.env.INFURA_API_KEY || "",
  DEBUG_MODE: process.env.NEXT_PUBLIC_DEBUG_MODE === "true",
};

export default ENVIRONMENT;
