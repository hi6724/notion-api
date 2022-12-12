"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _createCommentById = require("../controller/createCommentById");

var _createGuestBook = require("../controller/guestBookController/createGuestBook");

var _getAllGuestBooks = require("../controller/guestBookController/getAllGuestBooks");

var _getNotionListByCursor = require("../controller/getNotionListByCursor");

var _getPageById = require("../controller/getPageById");

var _getProjectById = require("../controller/getProjectById");

var _getProjectsList = require("../controller/getProjectsList");

var _mattermostEmoji = require("../controller/mattermostEmoji");

var _randomShinChan = require("../controller/randomShinChan");

var _deleteGuestBook = require("../controller/guestBookController/deleteGuestBook");

var _editGuestBook = require("../controller/guestBookController/editGuestBook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", function (req, res) {
  return res.send("Hello world");
});
router.get("/notionList/:cursor", _getNotionListByCursor.getNotionListByCursor);
router.get("/notion/:id", _getPageById.getPageById);
router.get("/project/:id", _getProjectById.getProjectById);
router.get("/projects", _getProjectsList.getProjectList);
router.post("/notion/:id", _createCommentById.createCommentById); // 방명록

router.get("/guestbooks", _getAllGuestBooks.getAllGuestBooks);
router.post("/guestbooks", _createGuestBook.createGuestBook);
router.post("/guestbooks/:id", _deleteGuestBook.deleteGuestBook);
router.put("/guestbooks/:id", _editGuestBook.editGuestBook);
router.post("/mattermost", _mattermostEmoji.mattermostEmoji);
router.post("/randomShinChang", _randomShinChan.randomShinChan);
var _default = router;
exports["default"] = _default;