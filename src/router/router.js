import express from "express";

import { createCommentById } from "../controller/createCommentById";
import { getNotionListByCursor } from "../controller/getNotionListByCursor";
import { getPageById } from "../controller/getPageById";
import { getProjectList } from "../controller/getProjectsList";
import { mattermostEmoji } from "../controller/mattermostEmoji";
import { randomShinChan } from "../controller/randomShinChan";

const router = express.Router();

router.get("/", (req, res) => res.send("Hello world"));
router.get("/notionList/:cursor", getNotionListByCursor);
router.get("/notion/:id", getPageById);
router.get("/projects", getProjectList);
router.post("/notion/:id", createCommentById);

router.post("/mattermost", mattermostEmoji);
router.post("/randomShinChang", randomShinChan);

export default router;
