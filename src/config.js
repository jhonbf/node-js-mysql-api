import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "cl@ve123";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_DATBASE = process.env.DB_DATBASE || "nodefas1";
export const DB_PORT = process.env.DB_PORT || 3306;
