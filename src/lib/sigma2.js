import Sigma from "sigma";
import Graph from "graphology";

import ForceSupervisor from "graphology-layout-force/worker";

export function createGraph(container, data) {
  const graph = new Graph();
  graph.import(data);

  function rndColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
  }

  graph.nodes().forEach((node, i) => {
    const angle = (i * 2 * Math.PI) / graph.order;
    graph.setNodeAttribute(node, "color", rndColor());
    graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
    graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
  });

  const renderer = new Sigma(graph, container, {
    renderEdgeLabels: true,
    allowInvalidContainer: true,
  });

  const layout = new ForceSupervisor(graph);
  layout.start();

  const state = { searchQuery: "" };

  function setHoveredNode(node = null) {
    if (node) {
      state.hoveredNode = node;
      state.hoveredNeighbors = new Set(graph.neighbors(node));
    } else {
      state.hoveredNode = undefined;
      state.hoveredNeighbors = undefined;
    }

    renderer.refresh();
  }

  renderer.on("enterNode", ({ node }) => {
    setHoveredNode(node);
  });
  renderer.on("leaveNode", () => {
    setHoveredNode(undefined);
  });

  renderer.setSetting("nodeReducer", (node, data) => {
    const res = { ...data };

    if (
      state.hoveredNeighbors &&
      !state.hoveredNeighbors.has(node) &&
      state.hoveredNode !== node
    ) {
      res.label = "";
      res.color = "#f6f6f6";
    }

    if (state.selectedNode === node) {
      res.highlighted = true;
    } else if (state.suggestions && !state.suggestions.has(node)) {
      res.label = "";
      res.color = "#f6f6f6";
    }

    return res;
  });

  renderer.setSetting("edgeReducer", (edge, data) => {
    const res = { ...data };

    if (state.hoveredNode && !graph.hasExtremity(edge, state.hoveredNode)) {
      res.hidden = true;
    }

    if (
      state.suggestions &&
      (!state.suggestions.has(graph.source(edge)) ||
        !state.suggestions.has(graph.target(edge)))
    ) {
      res.hidden = true;
    }

    return res;
  });
}
