Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

/**
 * The world's most _basic_ button
 */
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement("button", { onClick: onClick, type: "button" }, children));
};

exports.Button = Button;
exports.default = Button;
//# sourceMappingURL=index.js.map
