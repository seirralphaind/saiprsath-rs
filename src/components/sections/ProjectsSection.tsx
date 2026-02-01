import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Data Pipeline",
    summary: "Event-driven data ingestion system processing millions of events daily",
    problem:
      "The client needed to process high-volume clickstream data with minimal latency for real-time analytics dashboards.",
    impact:
      "Reduced data latency from hours to seconds, enabling real-time business decisions and 40% faster reporting.",
    architecture:
      "Kinesis Data Streams for ingestion, Lambda for transformation, Firehose for delivery, and Athena for ad-hoc queries.",
    techStack: ["Java", "AWS Lambda", "Kinesis", "Firehose", "Athena", "S3"],
    decisions: [
      "Chose Kinesis over Kafka for seamless AWS integration and lower operational overhead",
      "Implemented partition keys for even shard distribution",
      "Used Athena with Parquet format for 10x query cost reduction",
    ],
  },
  {
    title: "Microservices API Platform",
    summary: "Scalable REST API platform serving 10M+ requests per day",
    problem:
      "Legacy monolithic application couldn't scale with growing user base and slowed down feature development.",
    impact:
      "Enabled independent deployments, reduced release cycles from weeks to days, and improved system reliability to 99.9%.",
    architecture:
      "Spring Boot microservices with API Gateway, DynamoDB for high-throughput data, and comprehensive monitoring.",
    techStack: ["Java 17", "Spring Boot", "DynamoDB", "API Gateway", "CloudWatch", "Docker"],
    decisions: [
      "Designed with domain-driven boundaries for team autonomy",
      "Implemented circuit breakers for fault tolerance",
      "Used DynamoDB single-table design for efficient access patterns",
    ],
  },
  {
    title: "Cost-Optimized Data Lake",
    summary: "Serverless data lake architecture reducing analytics costs by 60%",
    problem:
      "Growing data volumes led to unsustainable analytics infrastructure costs and slow query performance.",
    impact:
      "Cut monthly AWS bill by 60% while improving query performance by 5x through intelligent data partitioning.",
    architecture:
      "S3-based data lake with Glue ETL jobs, intelligent tiering, and optimized Athena queries.",
    techStack: ["AWS Glue", "Athena", "S3", "Lambda", "Step Functions", "Python"],
    decisions: [
      "Implemented lifecycle policies for automatic cold storage transition",
      "Used columnar Parquet format with optimal compression",
      "Designed partition strategy aligned with query patterns",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Projects That Made an Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of backend and data engineering projects showcasing scalable
              architecture, AWS expertise, and measurable business outcomes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.summary}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" disabled>
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" disabled>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Problem & Impact */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Problem</h4>
                      <p className="text-muted-foreground text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Impact</h4>
                      <p className="text-muted-foreground text-sm">{project.impact}</p>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Architecture</h4>
                    <p className="text-muted-foreground text-sm">{project.architecture}</p>
                  </div>

                  {/* Key Decisions */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Decisions</h4>
                    <ul className="space-y-1">
                      {project.decisions.map((decision, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
