"use strict";(self["webpackChunksemantictree"]=self["webpackChunksemantictree"]||[]).push([[919],{6919:function(e,t,n){n.r(t),n.d(t,{createGraph:function(){return c}});var a=n(2965),o=n.n(a),s=n(4886),r=n.n(s),i=n(2563),l=n.n(i);function c(e,t){const n=new(o());function a(){const e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),a="#"+e.toString(16)+t.toString(16)+n.toString(16);return a}function s(e){if(e.length>0)for(let t=0;t<e.length;t++){const o=e[t];n.addNode(o.name,{size:o.settings.size,label:o.settings.label,color:a()}),n.addEdge(o.name,o.parent,{type:o.settings.type,label:o.settings.labelLink,size:o.settings.size,color:"#8790a3"}),o.children&&s(o.children)}}n.addNode(t.name,{size:t.settings.size,label:t.settings.label,color:a()}),s(t.children),n.nodes().forEach(((e,t)=>{const a=2*t*Math.PI/n.order;n.setNodeAttribute(e,"x",100*Math.cos(a)),n.setNodeAttribute(e,"y",100*Math.sin(a))}));new(r())(n,e,{renderEdgeLabels:!0,allowInvalidContainer:!0});const i=new(l())(n);i.start()}}}]);
//# sourceMappingURL=919.f7b60ba4.js.map