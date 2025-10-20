import React, { useEffect, useState } from "react";

export function DAGNetworkCard() {
  const [dataPackets, setDataPackets] = useState<
    Array<{
      id: number;
      startNode: number;
      endNode: number;
      progress: number;
      path: string;
    }>
  >([]);

  // Generate random data packets flowing through the network
  useEffect(() => {
    const generatePacket = () => {
      const nodes = 6; // Reduced for card size
      const startNode = Math.floor(Math.random() * nodes);
      let endNode = Math.floor(Math.random() * nodes);
      while (endNode === startNode) {
        endNode = Math.floor(Math.random() * nodes);
      }

      return {
        id: Date.now() + Math.random(),
        startNode,
        endNode,
        progress: 0,
        path: `packet-${startNode}-${endNode}`,
      };
    };

    const interval = setInterval(() => {
      setDataPackets((prev) => {
        // Remove completed packets
        const activePackets = prev.filter(
          (p) => p.progress < 100,
        );

        // Add new packet occasionally
        if (Math.random() < 0.4 && activePackets.length < 8) {
          activePackets.push(generatePacket());
        }

        // Update progress of existing packets
        return activePackets.map((packet) => ({
          ...packet,
          progress: packet.progress + (3 + Math.random() * 4),
        }));
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Validator nodes positions - simplified for card
  const validators = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    angle: i * 60, // 60 degree spacing
    radius: 80,
  }));

  const getNodePosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: 160 + radius * Math.cos(radian),
      y: 160 + radius * Math.sin(radian),
    };
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Network Animation */}
      <div className="relative w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 320 320"
          className="absolute inset-0"
        >
          {/* Connection lines between nodes */}
          {validators.map((startNode) =>
            validators
              .filter((endNode) => endNode.id !== startNode.id)
              .slice(0, 2) // Limit connections
              .map((endNode) => {
                const start = getNodePosition(
                  startNode.angle,
                  startNode.radius,
                );
                const end = getNodePosition(
                  endNode.angle,
                  endNode.radius,
                );

                return (
                  <line
                    key={`${startNode.id}-${endNode.id}`}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke="rgba(0, 255, 255, 0.4)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                );
              }),
          )}

          {/* Data packets moving along connections */}
          {dataPackets.map((packet) => {
            const startNode = validators.find(
              (n) => n.id === packet.startNode,
            );
            const endNode = validators.find(
              (n) => n.id === packet.endNode,
            );

            if (!startNode || !endNode) return null;

            const start = getNodePosition(
              startNode.angle,
              startNode.radius,
            );
            const end = getNodePosition(
              endNode.angle,
              endNode.radius,
            );

            const progress = packet.progress / 100;
            const x = start.x + (end.x - start.x) * progress;
            const y = start.y + (end.y - start.y) * progress;

            return (
              <circle
                key={packet.id}
                cx={x}
                cy={y}
                r="2"
                fill="#00FFFF"
                className="animate-pulse"
                style={{
                  filter: "drop-shadow(0 0 4px #00FFFF)",
                }}
              />
            );
          })}

          {/* Central DAGOS Core Node */}
          <circle
            cx="160"
            cy="160"
            r="25"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="#00FFFF"
            strokeWidth="3"
            className="pulse-cyan"
            style={{
              filter: "drop-shadow(0 0 15px #00FFFF)",
            }}
          />
          <text
            x="160"
            y="165"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="bold"
          >
            DAGOS
          </text>

          {/* Validator Nodes */}
          {validators.map((validator) => {
            const pos = getNodePosition(
              validator.angle,
              validator.radius,
            );
            return (
              <g key={validator.id}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="10"
                  fill="rgba(163, 255, 18, 0.3)"
                  stroke="#A3FF12"
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{
                    filter: "drop-shadow(0 0 8px #A3FF12)",
                    animationDelay: `${validator.id * 0.3}s`,
                  }}
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="3"
                  fill="#A3FF12"
                />
              </g>
            );
          })}

          {/* Orbit ring */}
          <circle
            cx="160"
            cy="160"
            r="80"
            fill="none"
            stroke="rgba(0, 255, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="4,4"
            className="animate-pulse"
          />
        </svg>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-top pointer-events-none">
          <div className="text-center space-y-2 mt-16">
            <h4 className="text-xl font-bold text-white">
              DAG Network
            </h4>
            <p className="text-white/70 text-sm">
              Next-Gen Infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}