import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { create, get, getAll, getByProjectId } from "../controllers/document.js";

const document = express.Router();
document.post("/create", verifyToken, create);
document.post("/get", verifyToken, get);
document.get("/getAll", getAll);
document.post("/getByProjectId", verifyToken, getByProjectId);

export default document;
