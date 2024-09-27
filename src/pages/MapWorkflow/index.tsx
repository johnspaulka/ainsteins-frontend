import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from "@xyflow/react";
import IntegrateWorkflowModal from "../../components/IntegrateWorkflowModal";

import "@xyflow/react/dist/style.css";

interface WorkflowNode extends Node {
  data: {
    label: string | JSX.Element;
  };
}

export default function App() {
  const initialNodes: WorkflowNode[] = [
    {
      id: "1",
      position: { x: 500, y: 100 },
      data: {
        label: (
          <div
            className="w-full text-lg text-green-800 font-bold"
            onClick={() => setOpenModal(true)}
          >
            Add task
          </div>
        ),
      },
    },
  ];

  const initialEdges: Edge[] = [{ id: "e1-1", source: "0", target: "1" }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isOpenModal, setOpenModal] = useState(false);

  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleAddNode = (data: any) => {
    const lastNode = nodes[nodes.length - 1]; // Get the last node
    const newNodeId = `${parseInt(lastNode.id) + 1}`; // Generate a new ID for the new node


    const newNode: WorkflowNode = {
      id: newNodeId,
      data: { label: <div
            className="w-full text-lg text-green-800 font-bold"
            onClick={() => setOpenModal(true)}
          >
            Add step
          </div> },
      position: {
        x: lastNode.position.x,
        y: lastNode.position.y + 100,
      },
    };

    const newEdge: Edge = {
      id: `e${lastNode.id}-${newNodeId}`,
      source: lastNode.id,
      target: newNodeId,
    };
    nodes[nodes.length - 1].data.label = <div className="w-full text-lg">{data}</div>;

    // Append the new node and edge
    setNodes(() => [...nodes, newNode]);
    setEdges((eds) => [...eds, newEdge]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }} className="flex">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={"dots" as any} gap={12} size={1} />
      </ReactFlow>

      <IntegrateWorkflowModal
        open={isOpenModal}
        onClose={() => setOpenModal(false)}
        submitWorkflow={handleAddNode}
      />
    </div>
  );
}
