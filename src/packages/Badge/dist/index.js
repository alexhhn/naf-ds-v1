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

/**
 * @parameter children: ReactNode inside tag.
 */
var Badged = function (_a) {
    var children = _a.children, onClick = _a.onClick, hasFocusOutline = _a.hasFocusOutline, color = _a.color, backgroundColor = _a.backgroundColor;
    return (React.createElement(StyledBadged, { onClick: onClick, type: "button", color: color, backgroundColor: backgroundColor, hasFocusOutline: hasFocusOutline }, children));
};
Badged.defaultProps = {
    color: "black",
    hasFocusOutline: true,
    backgroundColor: "white"
};
var StyledBadged = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  padding: 0.25em 0.5em;\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n  background-color: ", ";\n\n  cursor: pointer;\n  border-radius: 10px;\n  &:focus {\n    outline: ", ";\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  padding: 0.25em 0.5em;\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n  background-color: ",
    ";\n\n  cursor: pointer;\n  border-radius: 10px;\n  &:focus {\n    outline: ",
    ";\n  }\n"])), function (props) { return (props.color ? props.color : "black"); }, function (props) {
    return props.backgroundColor ? props.backgroundColor : "white";
}, function (props) {
    return props.hasFocusOutline ? "-webkit-focus-ring-color auto 5px" : "none";
});
var templateObject_1;

exports.Badged = Badged;
exports.default = Badged;
//# sourceMappingURL=index.js.map
