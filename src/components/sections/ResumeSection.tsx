import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Resume
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              My Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              4+ years of experience building backend systems and cloud infrastructure.
              Download my resume for the complete picture of my skills and experience.
            </p>
          </div>

          {/* Resume Card */}
          <Card className="glass-card max-w-md mx-auto">
            <CardContent className="flex flex-col items-center gap-6 p-8">
              <div className="p-4 rounded-full bg-primary/10">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <Button size="lg" className="w-full" asChild>
                <a href="/saiprasath_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
