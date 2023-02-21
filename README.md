![Vallaris Logo](https://v2k-dev.vallarismaps.com/core/api/managements/1.0/files/63f347fcb8e142c8f4b5cfd0/view)

[![npm version](https://badge.fury.io/js/va-style.png)](https://badge.fury.io/js/va-style)

## Vallaris Maps

[Vallaris Maps](https://vallarismaps.com/) is Geospatial data platform that provides tools for stored, analysis and visualize spatial data with effortless. By following international standard especialy OGC API series and Open Data scheme.

### Introduction

va-style is simplify package for your manage groups layers and style base on [Mapbox JSON style](https://docs.mapbox.com/help/glossary/style/) in Vallaris style

## Installation

```bash
npm install va-style
```

or

```bash
yarn add va-style
```

## Usage

```javascript
import vastyle, { visibleGroup, renderLayers } from "va-style";

// Visible layers in group id airport
const newStyle = visibleGroup(yourStyle, "airport", "visible");
//=>  set style by newStyle

// Render layers with metadata key interactive
const InteractiveLayers = renderLayers(yourStyle, "interactive");
//=>  render list of layers with metadata key interactive
```
