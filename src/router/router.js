import express from "express";

import { createCommentById } from "../controller/createCommentById";
import { getNotionListByCursor } from "../controller/getNotionListByCursor";
import { getPageById } from "../controller/getPageById";

const router = express.Router();

router.get("/", (req, res) => res.send("Hello world"));
router.get("/notionList/:cursor", getNotionListByCursor);
router.get("/notion/:id", getPageById);
router.post("/notion/:id", createCommentById);

export default router;
