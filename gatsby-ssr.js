"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var tidioId = pluginOptions.tidioId

  return setPostBodyComponents([_react2.default.createElement("script", {
    key: "gatsby-plugin-tidio",
    async: true,
    src: "//code.tidio.co/" + tidioId + ".js",
    charset: 'UTF-8'
  })]);
};
