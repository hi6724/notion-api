"use strict";

require("regenerator-runtime");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _router = _interopRequireDefault(require("./router/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//express 모듈 불러오기
var PORT = process.env.PORT || 8800;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/", _router["default"]);
app.listen(PORT, function () {
  return console.log("http://localhost:".concat(PORT));
});