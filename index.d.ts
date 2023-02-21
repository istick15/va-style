interface ILayers {
    id: string;
    source: string;
    "source-layer": string;
    type: string;
    paint: any;
    filter?: any;
    layout?: any;
    minzoom?: number;
    maxzoom?: number;
    metadata?: any;
}

interface StyleSpecification {
    version: 8;
    name?: string;
    metadata?: unknown;
    center?: Array<number>;
    zoom?: number;
    bearing?: number;
    pitch?: number;
    light?: any;
    terrain?: any;
    sources: any;
    sprite?: string;
    glyphs?: string;
    transition?: any;
    layers: Array<ILayers>;
}


interface IvaStyle {
    renderGroup: (styles: StyleSpecification, groupIds: string[], groupKey?: string) => void;
    visibleGroup: (styles: StyleSpecification,
        groupId: string,
        type: "visible" | "none",
        groupKey?: string) => void;
    renderLayers: (styles: StyleSpecification, metadataKey: string) => void
}

declare const vaStyle: IvaStyle;

export = vaStyle;

