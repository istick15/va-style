import { set } from "dot-prop-immutable";
import { groupRender, StyleSpecification } from "../interface";
import { renderLayers } from "../render";

function visibleGroup(
    styles: StyleSpecification,
    groupId: string,
    type: "visible" | "none",
    groupKey?: string
) {
    const key = groupKey ? groupKey : "vallaris:group"
    const { layers } = styles;
    const newLayers = layers.map((l) => {
        if (
            l.metadata &&
            l.metadata[key] &&
            l.metadata[key] === groupId
        ) {
            let input = { ...l };
            const newInput = set(input, "layout.visibility", type);
            return newInput;
        } else {
            return {
                ...l,
            };
        }
    });

    let newStyle = { ...styles };
    newStyle.layers = newLayers;

    return newStyle;
};

function renderGroup(styles: StyleSpecification, groupIds: string[], groupKey?: string) {
    const key = groupKey ? groupKey : "vallaris:group"
    let groups: groupRender[] = [];
    const { layers } = styles;

    const filterLayers = layers.filter(l => l.metadata && l.metadata[key] &&
        groupIds.includes(l.metadata[key]));

    filterLayers.map((l) => {
        const layers = renderLayers(styles, l.metadata[key]);
        let input: groupRender = { groupId: l.metadata[key], layers };
        groups.push(input)
    });

    return groups;
};

export { visibleGroup, renderGroup };
