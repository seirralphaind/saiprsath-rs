import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cloud, Database, Layout, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Server,
    title: "Backend",
    skills: ["Java 8/17", "Spring Boot", "REST APIs", "Microservices", "JUnit", "Maven/Gradle"],
  },
  {
    icon: Cloud,
    title: "Cloud (AWS)",
    skills: ["Lambda", "IAM", "S3", "Kinesis", "Firehose", "Athena", "Glue", "CloudWatch"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["DynamoDB", "MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Flutter"],
  },
  {
    icon: Wrench,
    title: "Tools & Practices",
    skills: ["API Design", "Event-Driven Architecture", "CI/CD", "Git", "Docker", "Terraform"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Technical Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Technologies I Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning backend development, cloud infrastructure,
              and data engineering—everything needed to build production-ready systems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="glass-card hover:border-primary/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary hover:bg-secondary/80"
                      >
                        {skill}
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

export default SkillsSection;
