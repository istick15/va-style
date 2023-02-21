import { get } from "dot-prop-immutable";
import { StyleSpecification } from "../interface";

function renderLayers(styles: StyleSpecification, metadataKey: string) {
    const { layers } = styles;

    let newRender: any[] = [];

    layers.map((l) => {
        const newMetadata = get(l, "metadata")
            ? Object.keys(get(l, "metadata")).filter(
                (mt) => mt === metadataKey
            )
            : [];

        if (newMetadata.length) {
            newRender.push(l);
        }
    });

    return newRender
};

export { renderLayers };
