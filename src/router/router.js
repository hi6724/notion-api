import express from "express";

import { createCommentById } from "../controller/createCommentById";
import { createGuestBook } from "../controller/guestBookController/createGuestBook";
import { getAllGuestBooks } from "../controller/guestBookController/getAllGuestBooks";
import { getNotionListByCursor } from "../controller/getNotionListByCursor";
import { getPageById } from "../controller/getPageById";
import { getProjectById } from "../controller/getProjectById";
import { getProjectList } from "../controller/getProjectsList";
import { mattermostEmoji } from "../controller/mattermostEmoji";
import { randomShinChan } from "../controller/randomShinChan";
import { deleteGuestBook } from "../controller/guestBookController/deleteGuestBook";
import { editGuestBook } from "../controller/guestBookController/editGuestBook";

const router = express.Router();

router.get("/", (req, res) => res.send("Hello world"));
router.get("/notionList/:cursor", getNotionListByCursor);
router.get("/notion/:id", getPageById);
router.get("/project/:id", getProjectById);
router.get("/projects", getProjectList);

router.post("/notion/:id", createCommentById);
// 방명록
router.get("/guestbooks", getAllGuestBooks);
router.post("/guestbooks", createGuestBook);
router.post("/guestbooks/:id", deleteGuestBook);
router.put("/guestbooks/:id", editGuestBook);

router.post("/mattermost", mattermostEmoji);
router.post("/randomShinChang", randomShinChan);

export default router;
