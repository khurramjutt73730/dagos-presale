import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { HelpCircle } from "lucide-react";

interface TechTooltipProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  iconClassName?: string;
}

export function TechTooltip({
  term,
  definition,
  children,
  showIcon = true,
  iconClassName = "w-4 h-4 text-cyan-400/70 hover:text-cyan-400 ml-1 inline-block",
}: TechTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center cursor-help">
            {children || (
              <span className="text-cyan-400 border-b border-dotted border-cyan-400/50">
                {term}
              </span>
            )}
            {showIcon && (
              <HelpCircle className={iconClassName} />
            )}
          </span>
        </TooltipTrigger>
        <TooltipContent
          className="max-w-xs glass-strong border-white/20 text-white p-3"
          side="top"
        >
          <div className="space-y-1">
            <div className="font-semibold text-cyan-400">
              {term}
            </div>
            <div className="text-sm text-black/80">
              {definition}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// Common technical terms used in DAGOS
export const TECH_TERMS = {
  DAG: "Directed Acyclic Graph - A data structure that allows for parallel processing of transactions, eliminating the linear bottlenecks of traditional blockchain",
  TPS: "Transactions Per Second - A measure of how many transactions a network can process in one second",
  "Smart Contract":
    "Self-executing contracts with terms directly written into code, running on the blockchain without intermediaries",
  "Utility Token":
    "A cryptocurrency token that provides access to a product or service within a blockchain ecosystem, not designed as an investment",
  "Market Cap":
    "Market Capitalization - The total value of all tokens in circulation, calculated by multiplying token price by circulating supply",
  DeFi: "Decentralized Finance - Financial services built on blockchain technology that operate without traditional intermediaries like banks",
  Staking:
    "The process of holding and locking up tokens to support network operations and earn rewards",
  Liquidity:
    "How easily an asset can be bought or sold in the market without affecting its price",
  "Gas Fee":
    "The fee required to execute transactions or smart contracts on a blockchain network",
  "Consensus Mechanism":
    "The protocol that blockchain networks use to agree on the validity of transactions",
  Tokenomics:
    "The economic model and structure of a cryptocurrency token, including supply, distribution, and utility",
  "Cold Storage":
    "A method of storing cryptocurrency offline to protect it from online threats and hacking",
  "Multi-sig":
    "Multi-signature wallet that requires multiple private keys to authorize a transaction, providing enhanced security",
  KYC: "Know Your Customer - Identity verification process required by financial regulations to prevent fraud and money laundering",
  AML: "Anti-Money Laundering - Legal controls that require financial institutions to monitor transactions to prevent illegal activities",
};

// Preset tooltip components for common terms
export const DAGTooltip = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <TechTooltip term="DAG" definition={TECH_TERMS.DAG}>
    {children}
  </TechTooltip>
);

export const TPSTooltip = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <TechTooltip term="TPS" definition={TECH_TERMS.TPS}>
    {children}
  </TechTooltip>
);

export const DeFiTooltip = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <TechTooltip term="DeFi" definition={TECH_TERMS.DeFi}>
    {children}
  </TechTooltip>
);

export const UtilityTokenTooltip = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <TechTooltip
    term="Utility Token"
    definition={TECH_TERMS["Utility Token"]}
  >
    {children}
  </TechTooltip>
);

export const TokenomicsTooltip = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <TechTooltip
    term="Tokenomics"
    definition={TECH_TERMS.Tokenomics}
  >
    {children}
  </TechTooltip>
);