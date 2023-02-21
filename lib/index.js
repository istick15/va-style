function visibleGroup(styles, groupId, type, groupKey) {
  const key = groupKey ? groupKey : "vallaris:group";
  const { layers } = styles;
  const newLayers = layers.map((l) => {
    if (l.metadata && l.metadata[key] && l.metadata[key] === groupId) {
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
}

function renderGroup(styles, groupIds, groupKey) {
  const key = groupKey ? groupKey : "vallaris:group";
  let groups = [];
  const { layers } = styles;

  const filterLayers = layers.filter(
    (l) => l.metadata && l.metadata[key] && groupIds.includes(l.metadata[key])
  );

  filterLayers.map((l) => {
    const layers = renderLayers(styles, l.metadata[key]);
    let input = { groupId: l.metadata[key], layers };
    groups.push(input);
  });

  return groups;
}

function renderLayers(styles, metadataKey) {
  const { layers } = styles;

  let newRender = [];

  layers.map((l) => {
    const newMetadata = get(l, "metadata")
      ? Object.keys(get(l, "metadata")).filter((mt) => mt === metadataKey)
      : [];

    if (newMetadata.length) {
      newRender.push(l);
    }
  });

  return newRender;
}

module.exports = {
  visibleGroup,
  renderGroup,
  renderLayers,
};
