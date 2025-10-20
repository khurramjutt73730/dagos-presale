import React from "react";
import { Card } from "./ui/card";
import dagosLogo from "figma:asset/db237d71253a563f66a5cace52905b063043c1ef.png";
import {
  BarChart3,
  Coins,
  Gamepad2,
  Image,
  Globe,
  Building,
  Brain,
  Glasses,
} from "lucide-react";

export function EcosystemAnimation() {
  const innerOrbitNodes = [
    { label: "DEX", icon: BarChart3, angle: 0 },
    { label: "DeFi", icon: Coins, angle: 90 },
    { label: "Gaming", icon: Gamepad2, angle: 180 },
    { label: "NFTs", icon: Image, angle: 270 },
  ];

  const outerOrbitNodes = [
    { label: "Web3", icon: Globe, angle: 45 },
    { label: "Enterprise", icon: Building, angle: 135 },
    { label: "AI", icon: Brain, angle: 225 },
    { label: "Metaverse", icon: Glasses, angle: 315 },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with space-like gradient and grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0, 255, 255, 0.3) 1px, transparent 0),
              radial-gradient(circle at 20px 20px, rgba(163, 255, 18, 0.2) 1px, transparent 0)
            `,
            backgroundSize: "20px 20px, 40px 40px",
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            DAGOS in the{" "}
            <span className="gradient-cyber bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            How DAGOS integrates with and enhances the broader
            crypto ecosystem.
          </p>
        </div>

        {/* Ecosystem Animation */}
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[600px] gap-12">
          {/* Desktop Animation View */}
          <div className="hidden lg:block relative">
            <div className="ecosystem-container relative w-[500px] h-[500px] mx-auto">
              {/* Central DAGOS Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <Card className="glass-strong border-cyan-400/50 p-6 rounded-full">
                  <div className="w-24 h-24 flex items-center justify-center relative">
                    <img
                      src={dagosLogo}
                      alt="DAGOS Core"
                      className="w-16 h-16 object-contain glow-cyan"
                    />
                  </div>
                </Card>
                <div className="text-center mt-4">
                  <div className="text-2xl font-bold text-white">
                    DAGOS
                  </div>
                </div>
              </div>

              {/* Inner Orbit */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="relative w-full h-full">
                  {/* Orbit Ring */}
                  <div className="absolute inset-8 border border-cyan-400/30 rounded-full"></div>

                  {/* Inner Orbit Nodes */}
                  {innerOrbitNodes.map((node, index) => {
                    const Icon = node.icon;
                    const radius = 200;
                    const radian = (node.angle * Math.PI) / 180;
                    const x = radius * Math.cos(radian);
                    const y = radius * Math.sin(radian);

                    return (
                      <div
                        key={node.label}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-counter-spin-slow"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                      >
                        <Card className="glass-strong border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 p-4 rounded-full group hover:glow-cyan">
                          <div className="w-12 h-12 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                          </div>
                        </Card>
                        <div className="text-center mt-2">
                          <div className="text-sm font-semibold text-white">
                            {node.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Outer Orbit */}
              <div className="absolute inset-0 animate-spin-reverse-slow">
                <div className="relative w-full h-full">
                  {/* Orbit Ring */}
                  <div className="absolute -inset-4 border border-purple-400/30 rounded-full"></div>

                  {/* Outer Orbit Nodes */}
                  {outerOrbitNodes.map((node, index) => {
                    const Icon = node.icon;
                    const radius = 260;
                    const radian = (node.angle * Math.PI) / 180;
                    const x = radius * Math.cos(radian);
                    const y = radius * Math.sin(radian);

                    return (
                      <div
                        key={node.label}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-counter-spin-reverse-slow"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                      >
                        <Card className="glass-strong border-purple-400/50 hover:border-purple-400 transition-all duration-300 p-4 rounded-full group hover:glow-lime">
                          <div className="w-12 h-12 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
                          </div>
                        </Card>
                        <div className="text-center mt-2">
                          <div className="text-sm font-semibold text-white">
                            {node.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stacked View */}
          <div className="lg:hidden w-full max-w-md mx-auto space-y-8">
            {/* Central DAGOS */}
            <div className="text-center">
              <Card className="glass-strong border-cyan-400/50 inline-block p-6 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={dagosLogo}
                    alt="DAGOS Core"
                    className="w-14 h-14 object-contain glow-cyan"
                  />
                </div>
              </Card>
              <div className="text-xl font-bold text-white mt-4">
                DAGOS
              </div>
            </div>

            {/* Inner Orbit - Mobile */}
            <div>
              <div className="text-center mb-4">
                <div className="text-cyan-400 font-semibold">
                  Core Integrations
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {innerOrbitNodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <Card
                      key={node.label}
                      className="glass-strong border-cyan-400/30 p-4 text-center hover:border-cyan-400/50 transition-all"
                    >
                      <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-white font-medium">
                        {node.label}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Outer Orbit - Mobile */}
            <div>
              <div className="text-center mb-4">
                <div className="text-purple-400 font-semibold">
                  Extended Ecosystem
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {outerOrbitNodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <Card
                      key={node.label}
                      className="glass-strong border-purple-400/30 p-4 text-center hover:border-purple-400/50 transition-all"
                    >
                      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-white font-medium">
                        {node.label}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Space */}
        <div className="mt-16 text-center">
          <div className="h-16"></div>{" "}
          {/* Reserved space for future CTAs */}
        </div>
      </div>
    </section>
  );
}