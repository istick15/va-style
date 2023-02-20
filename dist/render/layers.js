"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderLayers = void 0;
const dot_prop_immutable_1 = require("dot-prop-immutable");
const renderLayers = (styles, metadataKey) => {
    const { layers } = styles;
    let newRender = [];
    layers.map((l) => {
        const newMetadata = (0, dot_prop_immutable_1.get)(l, "metadata")
            ? Object.keys((0, dot_prop_immutable_1.get)(l, "metadata")).filter((mt) => mt === metadataKey)
            : [];
        if (newMetadata.length) {
            newRender.push(l);
        }
    });
    return newRender;
};
exports.renderLayers = renderLayers;
//# sourceMappingURL=layers.js.map