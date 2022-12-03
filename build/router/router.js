"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _createCommentById = require("../controller/createCommentById");

var _getNotionListByCursor = require("../controller/getNotionListByCursor");

var _getPageById = require("../controller/getPageById");

var _getProjectById = require("../controller/getProjectById");

var _getProjectsList = require("../controller/getProjectsList");

var _mattermostEmoji = require("../controller/mattermostEmoji");

var _randomShinChan = require("../controller/randomShinChan");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", function (req, res) {
  return res.send("Hello world");
});
router.get("/notionList/:cursor", _getNotionListByCursor.getNotionListByCursor);
router.get("/notion/:id", _getPageById.getPageById);
router.get("/project/:id", _getProjectById.getProjectById);
router.get("/projects", _getProjectsList.getProjectList);
router.post("/notion/:id", _createCommentById.createCommentById);
router.post("/mattermost", _mattermostEmoji.mattermostEmoji);
router.post("/randomShinChang", _randomShinChan.randomShinChan);
var _default = router;
exports["default"] = _default;