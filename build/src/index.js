"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

require("babel-polyfill");

var _cors = _interopRequireDefault(require("cors"));

var _yamljs = _interopRequireDefault(require("yamljs"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerDoc = _yamljs.default.load("".concat(__dirname, "/../../swagger.yaml")); // initialize express


var app = (0, _express.default)(); // configure bodyParser for incoming requests

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)()); // use router

app.use(_index.default);
app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDoc));
app.get('/', function (req, res) {
  return res.status(200).send('Welcome to Epic Mail App. An Email messaging App platform. :)');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('app running on port', PORT);
module.exports = app;