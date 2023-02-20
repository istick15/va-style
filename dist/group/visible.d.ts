import { groupRender, StyleSpecification } from "../interface";
declare const visibleGroup: (styles: StyleSpecification, groupId: string, type: "visible" | "none", groupKey?: string) => {
    version: 8;
    name?: string;
    metadata?: unknown;
    center?: number[];
    zoom?: number;
    bearing?: number;
    pitch?: number;
    light?: any;
    terrain?: any;
    sources: any;
    sprite?: string;
    glyphs?: string;
    transition?: any;
    layers: import("../interface").ILayers[];
};
declare const renderGroup: (styles: StyleSpecification, groupIds: string[], groupKey?: string) => groupRender[];
export { visibleGroup, renderGroup };
