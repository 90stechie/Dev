import { Card } from "./ui/card";
import { Code, Palette, Zap, Network, Database, ArrowRightLeft, Scale, Activity } from "lucide-react";
import profileImage from "figma:asset/2598b33fe79724de42324a5a8b6dacb499dce911.png";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Microsoft Azure Administration",
      description: "Skilled in deploying, configuring, and managing Azure virtual machines, storage, and networking components"
    },
    {
      icon: Palette,
      title: "Azure Active Directory (AAD) / Entra ID",
      description: "Experienced in managing user identities, access controls, and implementing Conditional Access and MFA policies"
    },
    {
      icon: Zap,
      title: "AWS Cloud Management",
      description: "Hands-on with provisioning EC2 instances, S3 storage, IAM roles, and configuring AWS networking and security services"
    },
    {
      icon: Code,
      title: "Infrastructure as a Service (IaaS)",
      description: "Proficient in creating and managing virtual networks, load balancers, and scalable compute resources in the cloud"
    },
    {
      icon: Palette,
      title: "Office 365 Administration (O365)",
      description: "Managed Exchange Online, SharePoint, and Teams with user provisioning and licensing"
    },
    {
      icon: Zap,
      title: "Cloud Security & Compliance",
      description: "Implementing security best practices, compliance standards, and monitoring cloud environments"
    },
    {
      icon: Network,
      title: "Cloud Networking",
      description: "Strong understanding of VNETs, Subnets, VPNs, Peering, and Firewalls for secure and optimized network architecture"
    },
    {
      icon: Database,
      title: "Cloud Storage Operations",
      description: "Skilled in managing Blob, S3, and other storage solutions with lifecycle policies, encryption, and access management"
    },
    {
      icon: ArrowRightLeft,
      title: "Cloud Migration",
      description: "Experienced in migrating workloads and applications from on-premise to cloud using Azure Migrate and AWS Migration Hub"
    },
    {
      icon: Scale,
      title: "Load Balancing & High Availability",
      description: "Implemented Azure Load Balancer, Application Gateway, and Auto Scaling for resilient architectures"
    },
    {
      icon: Activity,
      title: "Monitoring & Logging",
      description: "Configured Azure Monitor, AWS CloudWatch, and Log Analytics for performance tracking and alert management"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <p className="text-lg text-slate-600">
              Dynamic Senior Infrastructure Consultant with 9+ years of experience in engineering scalable 
              cloud architecture solutions for enterprise clients. I've successfully led 10+ migrations of 
              legacy systems to cloud environments, enhancing compliance and operational continuity while 
              advancing deployment pipelines to achieve improved provisioning accuracy.
            </p>
            <p className="text-lg text-slate-600">
              My expertise encompasses cloud monitoring, Infrastructure as Code (IaC) practices, and 
              cost optimization strategies. I specialize in Microsoft Azure and AWS administration, 
              implementing enterprise-grade security solutions, identity management, and compliance 
              frameworks that align with industry standards including ISO 27001, SOC2, and NIST.
            </p>
            <p className="text-lg text-slate-600">
              Currently certified in Azure Fundamentals (AZ-900) and Azure Administrator (AZ-104), I'm 
              actively pursuing Microsoft Cybersecurity Architect (SC-100) to further strengthen my 
              expertise in driving strategic cloud transformations and enhancing service reliability 
              through zero-trust security architectures.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={profileImage} 
              alt="Prasanth Namana - Cloud Administrator" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
