export interface ILayers {
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
export interface groupRender {
    groupId: string;
    layers: ILayers[] | [];
}
export declare type StyleSpecification = {
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
};
