import Graph from "graphology";
import Sigma from "sigma";

import ForceSupervisor from "graphology-layout-force/worker";

export function createGraph(container, data) {
  const graph = new Graph();

  graph.addNode(data.name, {
    size: data.settings.size,
    label: data.settings.label,
    color: rndColor(),
  });

  function rndColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
  }

  function setNodes(data) {
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const el = data[i];
        graph.addNode(el.name, {
          size: el.settings.size,
          label: el.settings.label,
          color: rndColor(),
        });
        graph.addEdge(el.name, el.parent, {
          type: el.settings.type,
          label: el.settings.labelLink,
          size: el.settings.size,
          color: "#8790a3",
        });

        if (el.children) {
          setNodes(el.children);
        }
      }
    }
  }

  setNodes(data.children);

  graph.nodes().forEach((node, i) => {
    const angle = (i * 2 * Math.PI) / graph.order;
    graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
    graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
  });

  // eslint-disable-next-line no-unused-vars
  const renderer = new Sigma(graph, container, {
    renderEdgeLabels: true,
    allowInvalidContainer: true,
  });

  const layout = new ForceSupervisor(graph);
  layout.start();
}
