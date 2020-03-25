Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement(StyledButton, { onClick: onClick, type: "button" }, children));
};
var SecondaryButton = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement(StyledButton, { onClick: onClick, type: "button", isSecondary: true },
        children,
        " huh"));
};
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  border: ", ";\n  padding: 0.5em 1em;\n  font-size: 16px;\n  font-weight: bold;\n  min-width: 100px;\n  background-color: ", ";\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  border: ", ";\n  padding: 0.5em 1em;\n  font-size: 16px;\n  font-weight: bold;\n  min-width: 100px;\n  background-color: ", ";\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) { return (props.isSecondary ? "ffdb00" : "none"); }, function (props) { return (props.isSecondary ? "transparent" : "#ffdb00"); }, function (props) { return (props.isSecondary ? "#f4f4f4" : "#fff000"); });
var templateObject_1;

exports.Button = Button;
exports.SecondaryButton = SecondaryButton;
exports.default = Button;
//# sourceMappingURL=index.js.map
