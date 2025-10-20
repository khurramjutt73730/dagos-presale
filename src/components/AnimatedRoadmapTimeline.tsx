import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CodeStreamAnimation } from "./CodeStreamAnimation";
import { ParticleFlowAnimation } from "./ParticleFlowAnimation";
import {
  Hammer,
  Code,
  Rocket,
  Coins,
  Globe,
  TrendingUp,
  Bot,
  CheckCircle,
  Sparkles,
} from "lucide-react";

interface RoadmapPhase {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
  status: "completed" | "current" | "upcoming";
  color: string;
  glowColor: string;
  bgGradient: string;
}

const phases: RoadmapPhase[] = [
  {
    id: 1,
    title: "Phase 1 — Foundation & Development",
    subtitle: "Project Ideation, Research & Blueprint",
    icon: <Hammer className="w-8 h-8" />,
    description:
      "The DAGOS journey began with a vision to create a scalable, feeless, and community-powered blockchain. DAG Technologies (Pvt) Ltd was founded to research directed acyclic graph (DAG)-based infrastructure.",
    deliverables: [
      "Whitepaper & brand identity",
      "Core DAGOS architecture defined",
      "Advisory team onboarding",
      "Initial research & development",
    ],
    status: "completed",
    color: "#00FFFF",
    glowColor: "rgba(0, 255, 255, 0.5)",
    bgGradient:
      "from-cyan-900/20 via-transparent to-transparent",
  },
  {
    id: 2,
    title: "Phase 2 — Technical Development",
    subtitle: "Building the DAGOS Core Chain",
    icon: <Code className="w-8 h-8" />,
    description:
      "Core development of the DAGOS Chain, combining DAG + EVM compatibility for feeless transactions and parallel scalability.",
    deliverables: [
      "DAG Wallet (non-custodial app)",
      "DAG Mining App development",
      "DAG AI Scam & Fraud Detector prototype",
      "Smart contract framework",
    ],
    status: "completed",
    color: "#00D4FF",
    glowColor: "rgba(0, 212, 255, 0.5)",
    bgGradient:
      "from-blue-900/20 via-transparent to-transparent",
  },
  {
    id: 3,
    title: "Phase 3 — Pre-Launch Preparation",
    subtitle: "Branding, Community & Pre-Seed Phase",
    icon: <Rocket className="w-8 h-8" />,
    description:
      "Pre-launch marketing, community building, and early investor outreach begin. The official DAGOS website, whitepaper, and media branding are released publicly.",
    deliverables: [
      "Website launch",
      "Early investor deck",
      "Community airdrops",
      "Brand awareness campaigns",
    ],
    status: "completed",
    color: "#A3FF12",
    glowColor: "rgba(163, 255, 18, 0.5)",
    bgGradient:
      "from-lime-900/20 via-transparent to-transparent",
  },
  {
    id: 4,
    title: "Phase 4 — Token Launch & Presale",
    subtitle: "DAG Token Distribution & Pre-Sale Event",
    icon: <Coins className="w-8 h-8" />,
    description:
      "Official launch of DAGOS Token (DAG) with 30-stage pre-sale. A community-first distribution to fund DAGOS Chain mainnet and liquidity pools.",
    deliverables: [
      "30-stage presale ($0.001 → $0.03)",
      "$465M raise target",
      "Listing price $0.05 USD",
      "Liquidity pool setup",
    ],
    status: "current",
    color: "#FFD700",
    glowColor: "rgba(255, 215, 0, 0.5)",
    bgGradient:
      "from-yellow-900/20 via-transparent to-transparent",
  },
  {
    id: 5,
    title: "Phase 5 — Ecosystem Expansion",
    subtitle: "Launch Core Products & Expand Ecosystem",
    icon: <Globe className="w-8 h-8" />,
    description:
      "DAGOS Chain Mainnet Launch, DAG Wallet release for Web + Mobile, DAG.fun Launchpad for community-driven meme tokens, and developer grants launched.",
    deliverables: [
      "Mainnet deployment",
      "Developer portal launch",
      "Staking and mining live",
      "DAG.fun Launchpad release",
    ],
    status: "upcoming",
    color: "#8A2BE2",
    glowColor: "rgba(138, 43, 226, 0.5)",
    bgGradient:
      "from-purple-900/20 via-transparent to-transparent",
  },
  {
    id: 6,
    title: "Phase 6 — Mass Adoption Drive",
    subtitle: "User Growth, Partnerships & Market Penetration",
    icon: <TrendingUp className="w-8 h-8" />,
    description:
      "Expand the DAGOS ecosystem to millions through the DAG Mining App, influencer collaborations, and education programs. Mass adoption through feeless microtransactions.",
    deliverables: [
      "1M+ active wallets",
      "Mobile miner app scale-up",
      "Exchange listings",
      "Regional partnerships (Asia, MENA, Europe)",
    ],
    status: "upcoming",
    color: "#FF6B35",
    glowColor: "rgba(255, 107, 53, 0.5)",
    bgGradient:
      "from-orange-900/20 via-transparent to-transparent",
  },
  {
    id: 7,
    title: "Phase 7 — Global Leadership",
    subtitle: "AI Integration, DAO Governance & Global Scale",
    icon: <Bot className="w-8 h-8" />,
    description:
      "Integrate DAG AI Scam & Fraud Detector into all DAGOS products. Introduce DAO governance, interoperability bridges, and global enterprise adoption. DAGOS becomes a global Web3 infrastructure leader.",
    deliverables: [
      "AI detector integration",
      "DAO voting governance",
      "Cross-chain bridges",
      "Global R&D expansion",
    ],
    status: "upcoming",
    color: "#C0C0C0",
    glowColor: "rgba(192, 192, 192, 0.5)",
    bgGradient:
      "from-gray-900/20 via-transparent to-transparent",
  },
];

interface TimelineNodeProps {
  phase: RoadmapPhase;
  index: number;
  isLast: boolean;
}

function TimelineNode({
  phase,
  index,
  isLast,
}: TimelineNodeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Connector line */}
      {!isLast && (
        <motion.div
          className="absolute left-1/2 top-20 w-1 h-full -translate-x-1/2 hidden lg:block"
          style={{
            background: `linear-gradient(to bottom, ${phase.color}, transparent)`,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={
            isInView
              ? { scaleY: 1, opacity: 0.3 }
              : { scaleY: 0, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      )}

      {/* Mobile connector */}
      {!isLast && (
        <motion.div
          className="absolute left-8 top-20 w-1 h-full lg:hidden"
          style={{
            background: `linear-gradient(to bottom, ${phase.color}, transparent)`,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={
            isInView
              ? { scaleY: 1, opacity: 0.3 }
              : { scaleY: 0, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-32 lg:mb-40">
        {/* Desktop: Alternate layout */}
        <motion.div
          className={`${isLeft ? "lg:order-1" : "lg:order-2"} order-2`}
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isLeft ? -50 : 50 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PhaseCard phase={phase} />
        </motion.div>

        {/* Central node */}
        <div
          className={`${isLeft ? "lg:order-2" : "lg:order-1"} order-1 flex justify-center lg:justify-center relative`}
        >
          <motion.div
            className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            <TimelineMarker phase={phase} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function TimelineMarker({ phase }: { phase: RoadmapPhase }) {
  return (
    <div className="relative">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 40px ${phase.glowColor}, 0 0 80px ${phase.glowColor}`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main node */}
      <motion.div
        className="relative w-20 h-20 rounded-full flex items-center justify-center glass-strong border-2"
        style={{
          backgroundColor: `${phase.color}20`,
          borderColor: phase.color,
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div style={{ color: phase.color }}>{phase.icon}</div>

        {/* Status indicator */}
        {phase.status === "completed" && (
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <CheckCircle className="w-5 h-5 text-navy-900" />
          </motion.div>
        )}

        {phase.status === "current" && (
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-5 h-5 text-navy-900" />
          </motion.div>
        )}
      </motion.div>

      {/* Phase number */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold whitespace-nowrap"
        style={{ color: phase.color }}
      >
        Phase {phase.id}
      </div>
    </div>
  );
}
function PhaseCard({ phase }: { phase: RoadmapPhase }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="glass-strong border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer overflow-hidden group relative"
        style={{
          boxShadow: `0 0 20px ${phase.glowColor}`,
        }}
      >
        {/* Code stream animation for Phase 2 */}
        {phase.id === 2 && <CodeStreamAnimation />}

        {/* Particle flow animation for Phase 6 */}
        {phase.id === 6 && <ParticleFlowAnimation />}

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${phase.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <CardContent className="p-6 relative z-10">
          {/* Header */}
          <div className="mb-4">
            <Badge
              className="mb-3"
              style={{
                backgroundColor: `${phase.color}20`,
                color: phase.color,
                borderColor: phase.color,
              }}
            >
              {phase.status === "completed"
                ? "Completed"
                : phase.status === "current"
                ? "In Progress"
                : "Upcoming"}
            </Badge>
            <h3 className="text-2xl font-bold text-white mb-2">
              {phase.title}
            </h3>
            <p className="text-lg" style={{ color: phase.color }}>
              {phase.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-white/80 mb-6 leading-relaxed">
            {phase.description}
          </p>

          {/* Deliverables (auto expand on hover) */}
          <motion.div
            initial={false}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/70 mb-3">
                Key Deliverables:
              </h4>
              {phase.deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: phase.color }}
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </CardContent>

        {/* Bottom accent */}
        <motion.div
          className="h-1"
          style={{ backgroundColor: phase.color }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </Card>
    </motion.div>
  );
}

export function AnimatedRoadmapTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Background gradient transitions */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-purple-900/10 to-transparent" />
      </motion.div>

      {/* Desktop Timeline - Content */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {phases.map((phase, index) => (
          <TimelineNode
            key={phase.id}
            phase={phase}
            index={index}
            isLast={index === phases.length - 1}
          />
        ))}

        {/* Final milestone */}
        <motion.div
          className="text-center py-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Radial glow effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="inline-block relative z-10"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-6xl mb-6 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
              🚀
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
            <span className="text-gradient">
              The Next Era Begins
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 relative z-10">
            Join us on the journey to revolutionize blockchain
            technology and build the future of decentralized
            finance
          </p>

          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
                DAGOS 2.0 — Coming Soon
              </Badge>

              <motion.button
                className="px-6 py-2 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Whitepaper
              </motion.button>
            </div>

            {/* Next Phase Teaser */}
            <motion.div
              className="mt-8 p-6 rounded-xl glass-strong border border-purple-400/30 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">
                  Next:{" "}
                  <span className="text-gradient">
                    DAGOS 2.0 AI Governance
                  </span>
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                Advanced AI-powered governance system,
                quantum-resistant security upgrades, and
                cross-chain interoperability across 10+ major
                blockchains
              </p>
            </motion.div>
          </div>

          {/* Decorative stars */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Export phases for mobile slider
export { phases };