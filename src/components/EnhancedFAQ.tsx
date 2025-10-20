import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface EnhancedFAQProps {
  className?: string;
}

export function EnhancedFAQ({ className = '' }: EnhancedFAQProps) {
  const faqCategories = [
    {
      title: 'General & Token Sale',
      questions: [
        {
          question: 'What is DAGOS and how does it work?',
          answer: 'DAGOS is a next-generation utility token built on the DAG (Directed Acyclic Graph) Network. It powers a decentralized ecosystem focused on fast, secure, and scalable transactions. The DAG technology allows for parallel processing of transactions, eliminating traditional blockchain bottlenecks.'
        },
        {
          question: 'How do I participate in the presale?',
          answer: 'To participate: 1) Connect your wallet (MetaMask, Trust Wallet, or Phantom), 2) Choose your payment method (ETH, USDT, or BNB), 3) Enter the amount you want to invest, 4) Confirm the transaction. Minimum purchase is $50 USD equivalent.'
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept Ethereum (ETH), Tether (USDT), and Binance Coin (BNB). Credit card payments will be available in future phases. Each payment method has different network fees and confirmation times.'
        },
        {
          question: 'Are there purchase limits?',
          answer: 'Yes. Minimum purchase: $50 USD. Maximum purchase: $1,000 for unverified users, $10,000 for KYC-verified users. These limits ensure fair distribution and comply with regulatory requirements.'
        }
      ]
    },
    {
      title: 'Tokenomics & Vesting',
      questions: [
        {
          question: 'What is token vesting?',
          answer: 'Token vesting is a schedule that determines when you can access your purchased tokens. Presale tokens are typically locked for 3-6 months after the sale ends, then released gradually (e.g., 25% immediately, then 25% every 3 months) to prevent market dumping and ensure long-term project stability.'
        },
        {
          question: 'When will tokens be distributed?',
          answer: 'Tokens will be distributed after the presale ends and the project launches on exchanges. The initial distribution includes 25% immediately available, with the remainder following the vesting schedule outlined in our tokenomics documentation.'
        },
        {
          question: 'What is the total token supply?',
          answer: 'Total supply is 1 billion DAGOS tokens. Distribution: 40% presale, 20% liquidity provision, 15% team (4-year vesting), 15% development fund, 10% marketing & partnerships. No additional tokens can be minted.'
        },
        {
          question: 'Will there be staking rewards?',
          answer: 'Yes, DAGOS holders can stake their tokens to earn rewards and participate in governance. Staking rewards come from network fees and ecosystem revenue sharing. APY varies based on total staked amount and network activity.'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      questions: [
        {
          question: 'Is the smart contract audited?',
          answer: 'Yes, our smart contracts have been audited by CertiK, a leading blockchain security firm. The audit covered security vulnerabilities, code quality, and gas optimization. The full audit report is available on our website with a 98/100 security score.'
        },
        {
          question: 'What is liquidity lock?',
          answer: 'Liquidity lock means that tokens allocated for exchange liquidity are locked in a smart contract for a specified period (typically 1-2 years). This prevents the team from removing liquidity and "rug pulling" investors, ensuring long-term project commitment.'
        },
        {
          question: 'Do I need to complete KYC?',
          answer: 'KYC (Know Your Customer) is optional but recommended. Unverified users have a $1,000 purchase limit, while verified users can invest up to $10,000. KYC also provides access to exclusive features and higher referral rewards.'
        },
        {
          question: 'What happens if the project fails?',
          answer: 'While we\'re confident in our project, cryptocurrency investments carry inherent risks. We have implemented multi-signature wallets, transparent fund usage, and regular progress updates. However, there are no guarantees in crypto investments - only invest what you can afford to lose.'
        }
      ]
    },
    {
      title: 'Technical & Usage',
      questions: [
        {
          question: 'What is token burning?',
          answer: 'Token burning is the permanent removal of tokens from circulation by sending them to an unrecoverable wallet address. This reduces total supply, potentially increasing the value of remaining tokens. We plan quarterly burns based on ecosystem revenue.'
        },
        {
          question: 'How do I add DAGOS to my wallet?',
          answer: 'After token distribution, you can add DAGOS to your wallet using our contract address. For MetaMask: 1) Click "Import tokens", 2) Select "Custom token", 3) Enter the contract address, 4) Token details will auto-populate. The contract address will be announced before distribution.'
        },
        {
          question: 'Which exchanges will list DAGOS?',
          answer: 'We are in discussions with several centralized (CEX) and decentralized exchanges (DEX). Listings typically occur 2-4 weeks after presale completion. We will announce confirmed listings on our official channels.'
        },
        {
          question: 'What are the use cases for DAGOS tokens?',
          answer: 'DAGOS tokens serve multiple purposes: 1) Payment for network transactions, 2) Staking for rewards and governance voting, 3) Access to premium ecosystem features, 4) Discounts on partner services, 5) Collateral for DeFi protocols built on our network.'
        }
      ]
    }
  ];

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <HelpCircle className="w-8 h-8 text-cyan-400" />
          Frequently Asked Questions
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Get answers to common questions about DAGOS, the token sale, and our ecosystem
        </p>
      </div>

      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="glass-strong border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-xs font-bold text-navy-900">
                  {categoryIndex + 1}
                </div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${categoryIndex}-${index}`}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-cyan-400 transition-colors [&>svg]:text-cyan-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 text-base leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Section */}
      <Card className="glass-strong border-white/10 mt-8">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Still Have Questions?</h3>
          <p className="text-white/70 mb-6">
            Can't find what you're looking for? Our team is here to help you with any additional questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://t.me/dagosofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 rounded-lg font-medium hover:from-cyan-300 hover:to-lime-300 transition-all duration-200"
            >
              Join Telegram
            </a>
            <a 
              href="mailto:support@dagos.io"
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Email Support
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}