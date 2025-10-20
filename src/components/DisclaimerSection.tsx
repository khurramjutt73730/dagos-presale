import React, { useState } from "react";
import {
  AlertTriangle,
  Shield,
  FileText,
  Info,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Separator } from "./ui/separator";

export function DisclaimerSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleHover = (section: string | null) =>
    setExpanded(section);

  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      {/* Main Header Card */}
      <Card className="glass-strong border-white/10 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-semibold">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            Important Disclaimer & Risk Factors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-sm">
            Please review the following sections carefully
            before participating in the DAGOS token ecosystem.
            These statements outline key investment, legal, and
            informational considerations.
          </p>
        </CardContent>
      </Card>

      {/* Investment Risk Card */}
      <Card
        onMouseEnter={() => handleHover("investment")}
        onMouseLeave={() => handleHover(null)}
        className={`glass-strong border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          expanded === "investment"
            ? "max-h-[420px]"
            : "max-h-[120px]"
        }`}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Shield className="w-5 h-5 text-orange-400" />
            Investment Risks
          </CardTitle>
        </CardHeader>
        <CardContent
          className={`transition-opacity duration-500 ${
            expanded === "investment"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <ul className="list-disc pl-6 text-white/80 text-sm space-y-2">
            <li>
              Cryptocurrency investments are highly volatile and
              speculative.
            </li>
            <li>
              Token values may fluctuate and can result in
              complete loss.
            </li>
            <li>
              Regulatory changes could affect trading or token
              utility.
            </li>
            <li>
              Smart contract vulnerabilities or bugs may cause
              risk.
            </li>
            <li>
              Liquidity may be limited during or after token
              sales.
            </li>
            <li>
              Project timelines and developments may vary from
              expectations.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Legal & Compliance Card */}
      <Card
        onMouseEnter={() => handleHover("legal")}
        onMouseLeave={() => handleHover(null)}
        className={`glass-strong border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          expanded === "legal"
            ? "max-h-[420px]"
            : "max-h-[120px]"
        }`}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <FileText className="w-5 h-5 text-blue-400" />
            Legal & Compliance
          </CardTitle>
        </CardHeader>
        <CardContent
          className={`transition-opacity duration-500 ${
            expanded === "legal" ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="list-disc pl-6 text-white/80 text-sm space-y-2">
            <li>
              This offering is not registered under securities
              laws.
            </li>
            <li>
              Tokens are utilities, not securities or investment
              contracts.
            </li>
            <li>
              No guarantee of profits or appreciation in value.
            </li>
            <li>
              Participants must comply with their local
              regulations.
            </li>
            <li>Some regions may restrict participation.</li>
            <li>
              Tax implications differ by jurisdiction and user.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Additional Information Card */}
      <Card
        onMouseEnter={() => handleHover("info")}
        onMouseLeave={() => handleHover(null)}
        className={`glass-strong border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          expanded === "info"
            ? "max-h-[460px]"
            : "max-h-[120px]"
        }`}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Info className="w-5 h-5 text-cyan-400" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent
          className={`transition-opacity duration-500 ${
            expanded === "info" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-white/80 text-sm space-y-3">
            <p>
              <strong>Token Utility:</strong> DAGOS tokens grant
              access to ecosystem utilities and services. They
              are not financial instruments.
            </p>
            <p>
              <strong>Vesting Schedule:</strong> Purchased
              tokens may follow vesting and release schedules
              per sale terms.
            </p>
            <p>
              <strong>No Financial Advice:</strong> Information
              here is not financial, investment, or legal
              advice.
            </p>
            <p>
              <strong>Restricted Jurisdictions:</strong> Token
              sales may be unavailable in countries like the
              U.S. or China.
            </p>
          </div>
        </CardContent>
      </Card>

      <Separator className="bg-white/10" />

      <p className="text-center text-xs text-white/60 pt-2">
        Last Updated: December 2024 — Please ensure you
        understand all risks before participation.
      </p>
    </div>
  );
}