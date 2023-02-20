"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGroup = exports.visibleGroup = void 0;
const dot_prop_immutable_1 = require("dot-prop-immutable");
const render_1 = require("../render");
const visibleGroup = (styles, groupId, type, groupKey) => {
    const key = groupKey ? groupKey : "vallaris:group";
    const { layers } = styles;
    const newLayers = layers.map((l) => {
        if (l.metadata &&
            l.metadata[key] &&
            l.metadata[key] === groupId) {
            let input = Object.assign({}, l);
            const newInput = (0, dot_prop_immutable_1.set)(input, "layout.visibility", type);
            return newInput;
        }
        else {
            return Object.assign({}, l);
        }
    });
    let newStyle = Object.assign({}, styles);
    newStyle.layers = newLayers;
    return newStyle;
};
exports.visibleGroup = visibleGroup;
const renderGroup = (styles, groupIds, groupKey) => {
    const key = groupKey ? groupKey : "vallaris:group";
    let groups = [];
    const { layers } = styles;
    const filterLayers = layers.filter(l => l.metadata && l.metadata[key] &&
        groupIds.includes(l.metadata[key]));
    filterLayers.map((l) => {
        const layers = (0, render_1.renderLayers)(styles, l.metadata[key]);
        let input = { groupId: l.metadata[key], layers };
        groups.push(input);
    });
    return groups;
};
exports.renderGroup = renderGroup;
//# sourceMappingURL=visible.js.map