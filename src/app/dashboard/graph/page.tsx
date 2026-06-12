"use client";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

export default function GraphPage() {
  const nodes = [
    {
      id: "1",
      position: { x: 250, y: 50 },
      data: { label: "Second Brain AI" },
    },

    {
      id: "2",
      position: { x: 100, y: 200 },
      data: { label: "Notes" },
    },

    {
      id: "3",
      position: { x: 400, y: 200 },
      data: { label: "Knowledge Graph" },
    },

    {
      id: "4",
      position: { x: 100, y: 350 },
      data: { label: "Firebase" },
    },

    {
      id: "5",
      position: { x: 400, y: 350 },
      data: { label: "Authentication" },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
    },

    {
      id: "e1-3",
      source: "1",
      target: "3",
    },

    {
      id: "e2-4",
      source: "2",
      target: "4",
    },

    {
      id: "e3-5",
      source: "3",
      target: "5",
    },
  ];

  return (
    <div className="h-[80vh] w-full">
      <h1 className="text-4xl font-bold mb-6">
        Knowledge Graph
      </h1>

      <div className="border border-gray-800 rounded-xl overflow-hidden h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}