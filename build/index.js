"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("routes/index"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize express
var app = (0, _express.default)(); // configure bodyParser for incoming requests

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)()); // use router

app.use(_index.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('app running on port', PORT);
module.exports = app;