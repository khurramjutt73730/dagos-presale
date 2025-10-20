import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface InteractiveFAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  context?: string;
}

export function InteractiveFAQ({ 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions",
  items,
  context
}: InteractiveFAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {context && (
            <p className="text-cyan-400/80 text-sm mt-2 font-mono">
              {context}
            </p>
          )}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className={`glass-strong border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedIndex === index ? 'border-cyan-400/50 glow-cyan-soft' : ''
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <CardContent className="p-0">
                {/* Question */}
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white flex-1">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/10">
                        <motion.p
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          className="text-white/80 leading-relaxed pt-4"
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Accent line */}
                {expandedIndex === index && (
                  <motion.div
                    className="h-1 bg-gradient-to-r from-cyan-400 to-lime-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Pre-configured FAQ sections for each page
export const HomeFAQ: FAQItem[] = [
  {
    question: "What is DAGOS and why should I invest?",
    answer: "DAGOS is a revolutionary utility token built on DAG (Directed Acyclic Graph) Network technology, offering unprecedented scalability with 100,000+ TPS, near-zero fees ($0.001), and 2-second confirmations. Early investors gain access to next-generation blockchain infrastructure with significant growth potential."
  },
  {
    question: "How does the DAGOS presale work?",
    answer: "The DAGOS presale consists of 30 stages with progressive pricing from $0.001 to $0.03. Each stage offers early investors better pricing, with a listing price of $0.05. The presale has a hard cap target of $465M with multiple payment methods accepted including cryptocurrency and credit cards."
  },
  {
    question: "What makes DAGOS different from other blockchain projects?",
    answer: "DAGOS leverages DAG technology instead of traditional blockchain, enabling parallel transaction processing for massive scalability. This eliminates network congestion, reduces fees to near-zero, and provides instant confirmations - solving the blockchain trilemma of scalability, security, and decentralization."
  },
  {
    question: "Is my investment secure with DAGOS?",
    answer: "Yes. DAGOS has completed full KYC verification, smart contract audits, and legal compliance checks. We implement multi-signature wallet security, encrypted transactions, and follow strict regulatory guidelines. However, like all crypto investments, there are inherent risks - please invest responsibly."
  },
  {
    question: "When will DAGOS tokens be listed on exchanges?",
    answer: "DAGOS tokens are scheduled for exchange listing following the completion of the presale and mainnet launch. The listing price is set at $0.05 USD per token. We're in active negotiations with major CEX and DEX platforms for initial listings."
  },
  {
    question: "What is the minimum and maximum investment amount?",
    answer: "Investment limits vary by stage and investor tier. Standard minimums typically start around $100, while maximum limits are set to ensure fair distribution. VIP tiers and early investors may have different limits. Check the Invest Now page for current stage details."
  }
];

export const TechnologyFAQ: FAQItem[] = [
  {
    question: "How does DAG technology differ from traditional blockchain?",
    answer: "Traditional blockchain processes transactions sequentially in blocks, creating bottlenecks. DAG (Directed Acyclic Graph) processes transactions in parallel through a tangle structure, where each transaction validates previous ones. This eliminates miners, reduces fees to near-zero, and enables massive scalability (100,000+ TPS)."
  },
  {
    question: "What is DAGOS's transaction throughput capacity?",
    answer: "DAGOS Network can process over 100,000 transactions per second (TPS) with 2-second confirmation times. This is achieved through parallel transaction processing, asynchronous validation, and our optimized DAG consensus mechanism - far exceeding Bitcoin (7 TPS) and Ethereum (30 TPS)."
  },
  {
    question: "Are DAGOS transactions really feeless?",
    answer: "DAGOS transactions have near-zero fees averaging $0.001 per transaction. Unlike traditional blockchains that require miners and expensive gas fees, DAG technology allows transaction validation through a Proof-of-Work mechanism where each new transaction validates previous ones, drastically reducing costs."
  },
  {
    question: "How does DAGOS ensure network security without miners?",
    answer: "DAGOS uses a combination of decentralized validation, cryptographic signatures, and consensus algorithms. Each transaction must validate and reference previous transactions, creating an interconnected web of verification. Additionally, we implement advanced fraud detection AI and multi-layer security protocols."
  },
  {
    question: "Is DAGOS Network compatible with existing blockchain ecosystems?",
    answer: "Yes. DAGOS provides cross-chain bridges to major blockchains including Ethereum, Solana, Polygon, and BNB Chain. Our EVM-compatible layer allows developers to deploy existing smart contracts with minimal modification while benefiting from DAG's superior performance."
  },
  {
    question: "What happens to the network during high traffic periods?",
    answer: "Unlike traditional blockchains that congest during high traffic, DAG technology actually becomes faster and more secure with increased activity. More transactions mean more validation nodes, strengthening the network. Our stress tests demonstrate maintained performance even at peak capacity."
  }
];

export const TokenomicsFAQ: FAQItem[] = [
  {
    question: "What is the total supply of DAGOS tokens?",
    answer: "The total supply of DAGOS tokens is capped at 10 billion (10,000,000,000) tokens with no possibility of additional minting. The distribution includes: 40% presale, 20% ecosystem development, 15% team & advisors (vested), 10% liquidity, 10% community rewards, and 5% strategic partnerships."
  },
  {
    question: "How does the token vesting schedule work?",
    answer: "Team and advisor tokens are subject to a 24-month vesting schedule with a 6-month cliff. This means no team tokens can be sold for the first 6 months, then they unlock gradually over 18 months. This ensures long-term commitment and prevents market dumping."
  },
  {
    question: "What utility does the DAGOS token provide?",
    answer: "DAGOS is a utility token used for: network transaction fees, staking rewards, governance voting, accessing premium DeFi features on DAG.fun launchpad, validator node operations, and earning rewards through our mining app. It's not a security and provides real ecosystem utility."
  },
  {
    question: "How are presale funds allocated and used?",
    answer: "Presale funds are allocated as follows: 45% product development & mainnet launch, 25% marketing & partnerships, 15% liquidity provision, 10% operational expenses, and 5% legal & compliance. All allocations are managed through multi-signature wallets with full transparency."
  },
  {
    question: "What happens to unsold presale tokens?",
    answer: "Any unsold presale tokens will be allocated to the ecosystem development fund or burned to reduce total supply, increasing scarcity. This decision will be made through community governance voting after the presale concludes, ensuring token holders have a say."
  },
  {
    question: "Are there token buyback or burn mechanisms?",
    answer: "Yes. DAGOS implements a quarterly token buyback program using 10% of ecosystem revenue. Additionally, transaction fees collected on the network are periodically burned, creating deflationary pressure. Both mechanisms are designed to support long-term token value appreciation."
  }
];

export const RoadmapFAQ: FAQItem[] = [
  {
    question: "What is DAGOS's current development phase?",
    answer: "DAGOS is currently in Phase 4 - Token Launch & Presale. We've successfully completed Phases 1-3 including foundation development, technical infrastructure, and pre-launch preparation. Our mainnet is in final testing, and we're on track for Phase 5 ecosystem expansion in Q2 2025."
  },
  {
    question: "When will the DAGOS mainnet launch?",
    answer: "DAGOS mainnet is scheduled to launch in Phase 5 (Q2 2025) following the completion of the presale. This includes full deployment of the DAGOS Chain, DAG Wallet for Web and Mobile, and the DAG.fun Launchpad for community-driven tokens."
  },
  {
    question: "What are the key milestones for 2025?",
    answer: "2025 milestones include: Q1 - presale completion and exchange listings, Q2 - mainnet launch and wallet release, Q3 - DAG.fun launchpad and developer grants program, Q4 - mass adoption initiatives targeting 1M+ active wallets and enterprise partnerships across Asia, MENA, and Europe."
  },
  {
    question: "Who are the core team members behind DAGOS?",
    answer: "DAGOS is led by experienced blockchain architects, former executives from major tech companies, and seasoned cryptocurrency developers. Our advisory board includes blockchain pioneers, legal experts, and venture capitalists. Full team profiles are available on our website's Team Section."
  },
  {
    question: "What is the long-term vision for DAGOS?",
    answer: "Our vision is to become a global Web3 infrastructure leader by 2027. This includes: AI-integrated fraud detection across all products, DAO governance for community-led decision making, cross-chain interoperability with 10+ major blockchains, and adoption by enterprises worldwide for feeless microtransactions."
  },
  {
    question: "How can developers contribute to the DAGOS ecosystem?",
    answer: "Developers can access our open-source GitHub, participate in our Developer Grants Program launching in Q3 2025, build on our EVM-compatible layer, create tokens on DAG.fun Launchpad, and join our technical community. We offer comprehensive documentation, SDKs, and developer support."
  }
];

export const CommunityFAQ: FAQItem[] = [
  {
    question: "How can I join the DAGOS community?",
    answer: "Join our thriving community on Telegram, Discord, and Twitter for daily updates, AMA sessions, and exclusive announcements. Participate in community challenges, referral programs, and ambassador initiatives to earn rewards while growing the DAGOS ecosystem."
  },
  {
    question: "What is the DAGOS Referral Program?",
    answer: "Earn 5% commission on every investment made through your unique referral link - with no limits! Share your link, track referrals in real-time through your dashboard, and receive instant rewards in DAGOS tokens. Top referrers gain VIP status with exclusive benefits."
  },
  {
    question: "How do Community Challenges work?",
    answer: "DAGOS runs regular challenges including Referral Challenges (invite users and earn bonuses), Content Creator Challenges (create viral content for rewards), and Ambassador Programs (represent DAGOS in your region). Each challenge offers DAGOS token rewards, NFT badges, and leaderboard recognition."
  },
  {
    question: "What benefits do DAGOS Ambassadors receive?",
    answer: "Ambassadors receive: exclusive DAGOS token bonuses, early access to features, ambassador NFT badges, direct communication with the team, special event invitations, merchandise, and priority support. Ambassadors help grow DAGOS in their local communities and social networks."
  },
  {
    question: "Can I contribute content and earn rewards?",
    answer: "Absolutely! Our Content Creator Challenge rewards high-quality content including YouTube videos, Twitter threads, blog articles, infographics, and memes. Submissions are reviewed monthly, and winners receive DAGOS tokens based on reach, engagement, and creativity."
  },
  {
    question: "How does community governance work?",
    answer: "DAGOS token holders will have voting rights in our upcoming DAO (Decentralized Autonomous Organization) launching in Phase 7. Governance includes voting on protocol upgrades, fund allocations, partnership decisions, and ecosystem developments. Your tokens equal your voting power."
  }
];

export const InvestNowFAQ: FAQItem[] = [
  {
    question: "How do I buy DAGOS tokens during the presale?",
    answer: "To buy DAGOS: 1) Connect your wallet (MetaMask, Trust Wallet, or Phantom), 2) Select your investment amount and payment method (crypto or credit card), 3) Complete KYC verification if required, 4) Confirm transaction. Tokens are distributed after presale completion based on your vesting schedule."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept multiple cryptocurrencies including ETH, BTC, USDT, USDC, BNB, and SOL. Credit/debit card payments are also supported via secure payment partners. All transactions are encrypted and processed through multi-signature wallets for maximum security."
  },
  {
    question: "Is KYC required to participate in the presale?",
    answer: "KYC (Know Your Customer) verification is required for investments exceeding $10,000 USD or for users in certain jurisdictions. Basic tier investments may not require KYC. This ensures legal compliance and protects both investors and the project from fraud."
  },
  {
    question: "What are the investment tiers and bonuses?",
    answer: "Presale bonuses vary by stage: Early stages offer up to 400% bonus (Stage 1-10), mid stages 200-300% (Stage 11-20), and late stages 100-150% (Stage 21-30). Additional volume bonuses available for investments over $50K, $100K, and $250K. VIP investors receive exclusive perks."
  },
  {
    question: "When will I receive my DAGOS tokens?",
    answer: "Presale tokens are distributed after the completion of all 30 presale stages and following the mainnet launch. Distribution follows the vesting schedule outlined in the tokenomics: presale participants receive tokens over a vesting period to ensure long-term ecosystem stability."
  },
  {
    question: "How is my investment secured?",
    answer: "Your investment is protected through: multi-signature wallet security requiring multiple approvals, smart contract audits by leading firms, KYC/AML compliance, SSL encryption, legal compliance across jurisdictions, and transparent fund allocation. We prioritize security at every level."
  },
  {
    question: "Can I get a refund after purchasing?",
    answer: "Due to the nature of cryptocurrency presales and smart contract transactions, refunds are generally not available once a transaction is confirmed on the blockchain. Please carefully review all investment details, risks, and terms before participating. Invest only what you can afford to lose."
  },
  {
    question: "What happens if the presale doesn't reach the soft cap?",
    answer: "If the presale does not reach the soft cap of $500,000, all contributed funds will be returned to investors automatically via smart contract. However, given our current traction and community support, we're confident in exceeding both soft and hard cap targets."
  }
];
