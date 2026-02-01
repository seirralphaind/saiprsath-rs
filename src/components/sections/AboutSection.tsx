import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Database } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Experience", value: "4+" },
  { icon: Cloud, label: "AWS Services Used", value: "15+" },
  { icon: Database, label: "Systems Designed", value: "10+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Engineering Mindset, Systems Thinking
            </h2>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a backend engineer who believes that great software is built on solid
                foundations. With a focus on Java and Spring Boot, I design systems that are
                not just functional—but reliable, scalable, and cost-efficient.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines deep technical knowledge with practical business sense.
                Whether architecting event-driven pipelines with AWS Kinesis, optimizing
                database queries, or building RESTful APIs that teams love to work with,
                I prioritize solutions that stand the test of time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive in environments where engineering decisions directly impact the
                product, and I enjoy mentoring others on best practices for backend
                development and cloud architecture.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-2 space-y-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="glass-card">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
