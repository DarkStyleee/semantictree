"use strict";(self["webpackChunksemantictree"]=self["webpackChunksemantictree"]||[]).push([[202],{7202:function(e,o,t){t.r(o),t.d(o,{createGraph:function(){return a}});var r=t(4886),n=t.n(r),s=t(2965),d=t.n(s),h=t(2563),i=t.n(h);function a(e,o){const t=new(d());function r(){const e=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),r="#"+e.toString(16)+o.toString(16)+t.toString(16);return r}t.import(o),t.nodes().forEach(((e,o)=>{const n=2*o*Math.PI/t.order;t.setNodeAttribute(e,"color",r()),t.setNodeAttribute(e,"x",100*Math.cos(n)),t.setNodeAttribute(e,"y",100*Math.sin(n))}));const s=new(n())(t,e,{renderEdgeLabels:!0,allowInvalidContainer:!0}),h=new(i())(t);h.start();const a={searchQuery:""};function c(e=null){e?(a.hoveredNode=e,a.hoveredNeighbors=new Set(t.neighbors(e))):(a.hoveredNode=void 0,a.hoveredNeighbors=void 0),s.refresh()}s.on("enterNode",(({node:e})=>{c(e)})),s.on("leaveNode",(()=>{c(void 0)})),s.setSetting("nodeReducer",((e,o)=>{const t={...o};return a.hoveredNeighbors&&!a.hoveredNeighbors.has(e)&&a.hoveredNode!==e&&(t.label="",t.color="#f6f6f6"),a.selectedNode===e?t.highlighted=!0:a.suggestions&&!a.suggestions.has(e)&&(t.label="",t.color="#f6f6f6"),t})),s.setSetting("edgeReducer",((e,o)=>{const r={...o};return a.hoveredNode&&!t.hasExtremity(e,a.hoveredNode)&&(r.hidden=!0),!a.suggestions||a.suggestions.has(t.source(e))&&a.suggestions.has(t.target(e))||(r.hidden=!0),r}))}}}]);
//# sourceMappingURL=202.721a880a.js.map