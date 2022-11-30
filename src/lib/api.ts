export const API =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://api.minsu.info/myshy";
