import amazonLogo from "../assets/amazon.png";
import sparksoftLogo from "../assets/sparksoft.png";
import vipLogo from "../assets/vip.jpeg";

export const experience = [
  {
    company: "Amazon",
    role: "Software Engineering Intern",
    period: "Summer 2024",
    logo: amazonLogo,
    highlights: [
      "Shipped features to production serving 1M+ customers",
      "Designed and implemented a scalable microservice with AWS",
      "Improved latency by 28% via caching + query optimization",
    ],
  },
  {
    company: "Sparksoft",
    role: "Software Engineering Intern",
    period: "2023 – 2024",
    logo: sparksoftLogo,
    highlights: [
      "Built internal tooling that reduced triage time by 40%",
      "Led migration to a typed API layer across services",
      "Authored CI checks to boost reliability and test coverage",
    ],
  },
  {
    company: "Georgia Tech",
    role: "Research Assistant",
    period: "2022 – 2023",
    logo: vipLogo,
    highlights: [
      "Developed ML pipelines for quantitative analysis",
      "Published results across two internal research reports",
      "Presented findings to cross‑functional academic teams",
    ],
  },
];
