import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Zap, DollarSign } from "lucide-react";

const philosophies = [
  {
    icon: Layers,
    title: "API Design Excellence",
    points: [
      "RESTful APIs with intuitive, resource-oriented endpoints",
      "Comprehensive OpenAPI documentation for every service",
      "Versioning strategies that support backward compatibility",
      "Consistent error handling with meaningful status codes",
      "Rate limiting and pagination built from day one",
    ],
  },
  {
    icon: Zap,
    title: "Event-Driven Architectures",
    points: [
      "Kinesis and SQS for reliable async message processing",
      "Decoupled services that scale independently",
      "Dead letter queues for graceful failure handling",
      "Idempotent consumers to handle duplicates safely",
      "Event sourcing patterns for audit and replay capabilities",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost-Efficient AWS",
    points: [
      "Right-sizing instances based on actual workload metrics",
      "Serverless-first approach for variable traffic patterns",
      "S3 intelligent tiering for automatic cost optimization",
      "Reserved capacity for predictable baseline workloads",
      "Data lifecycle policies to manage storage costs",
    ],
  },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Engineering Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              How I Think About Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond just writing code—these are the principles that guide my technical
              decisions and help me build systems that last.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {philosophies.map((philosophy) => (
              <Card key={philosophy.title} className="glass-card h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <philosophy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{philosophy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {philosophy.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">→</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
