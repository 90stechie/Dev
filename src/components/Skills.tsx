import { Badge } from "./ui/badge";
import { ShieldCheck, Terminal, Building2, BarChart3, GraduationCap } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Security & Identity Management",
      icon: ShieldCheck,
      skills: [
        "Identity and Access Management (IAM)",
        "Security Operations (SOC)",
        "Data Encryption & Key Management",
        "Network Security",
        "Vulnerability Management",
        "Incident Response",
        "Zero Trust Architecture",
        "Compliance & Governance"
      ],
      descriptions: [
        "Enforced least-privilege access, role-based access control, and secure authentication policies",
        "Familiar with monitoring threats and incidents using Microsoft Sentinel and AWS Security Hub",
        "Applied encryption at rest and in transit using Azure Key Vault and AWS KMS",
        "Configured NSGs, ASGs, Firewalls, and WAFs to protect cloud workloads from unauthorized access",
        "Used Defender for Cloud and GuardDuty for continuous assessment and threat detection",
        "Developed response playbooks and handled alerts within security information and event management tools",
        "Implemented security policies centered on identity verification and least-privilege access",
        "Ensured alignment with frameworks like ISO 27001, SOC2, and NIST using Azure Policy and Security Center"
      ]
    },
    {
      category: "Automation & DevOps Tools",
      icon: Terminal,
      skills: [
        "PowerShell & CLI Scripting",
        "Terraform / ARM Templates",
        "CI/CD Integration (Basic)",
        "Linux Administration",
        "Windows Server Administration"
      ],
      descriptions: [
        "Automated routine admin tasks and resource provisioning in Azure and Windows environments",
        "Experienced in Infrastructure as Code (IaC) for repeatable, secure cloud resource deployments",
        "Familiar with integrating security checks and deployment automation using GitHub Actions or Azure DevOps",
        "Managed system configurations, user management, and service deployments on Linux VMs",
        "Experienced in managing domains, DNS, DHCP, and Group Policies in enterprise environments"
      ]
    },
    {
      category: "Architectural & Management Skills",
      icon: Building2,
      skills: [
        "Cloud Architecture Design",
        "Disaster Recovery & Backup Planning",
        "Cost Optimization & Governance",
        "Performance Tuning & Capacity Planning",
        "IT Infrastructure Management",
        "Project Planning & Execution",
        "Team Collaboration & Leadership"
      ],
      descriptions: [
        "Designed scalable, cost-optimized, and secure multi-tier cloud solutions",
        "Configured recovery vaults, snapshots, and replication for business continuity",
        "Managed budgets, implemented cost alerts, and used Azure Cost Management tools",
        "Ensured optimized resource utilization through monitoring and scaling strategies",
        "Oversaw end-to-end management of enterprise IT systems and services",
        "Managed cloud migration and deployment projects aligning with business objectives",
        "Worked cross-functionally with DevOps, Security, and Support teams to achieve operational goals"
      ]
    },
    {
      category: "Data & Analytics Tools",
      icon: BarChart3,
      skills: [
        "AWS Glue / S3 / Athena / Redshift",
        "Apache Spark",
        "Data Security & Access Controls"
      ],
      descriptions: [
        "Basic understanding of data ingestion, ETL, and querying large datasets",
        "Experience converting data formats (CSV, ORC, Parquet) and applying compression techniques (Gzip, Snappy)",
        "Implemented IAM-based data policies to secure data pipelines and analytics workflows"
      ]
    },
    {
      category: "Certifications & Frameworks",
      icon: GraduationCap,
      skills: [
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Microsoft Certified: Azure Administrator (AZ-104)",
        "(Working Toward) Microsoft Cybersecurity Architect (SC-100)",
        "Security+ (Planned)"
      ],
      descriptions: [
        "Validated foundational knowledge of cloud concepts and Azure services",
        "Demonstrated expertise in managing cloud services across compute, storage, and networking",
        "Advanced certification focusing on end-to-end cloud security and governance",
        "Foundational certification for security principles, incident response, and threat management"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12">Skills & Technologies</h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl text-slate-700">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-slate-900 mb-2">{skill}</h4>
                      <p className="text-sm text-slate-600">
                        {category.descriptions[skillIndex]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
