import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Scale, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SamaritanLaws = () => {
  return (
    <section id="samaritan-laws" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Dual Protection & Duty Framework
          </h2>
          <p className="text-lg text-muted-foreground">
            We advocate for universal implementation of both Good Samaritan immunity and Bad Samaritan duty-to-rescue laws worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-safety">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-safety text-safety-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Good Samaritan Laws</CardTitle>
              </div>
              <CardDescription>Legal protection for those who help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Good Samaritan laws provide legal immunity to individuals who voluntarily assist others in emergency situations, protecting them from liability when acting in good faith.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-safety flex-shrink-0" />
                  <span>Protects rescuers from civil liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-safety flex-shrink-0" />
                  <span>Encourages bystander intervention</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-safety flex-shrink-0" />
                  <span>Removes fear of legal consequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-safety flex-shrink-0" />
                  <span>Widely implemented across many countries</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-emergency">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency text-emergency-foreground">
                  <Scale className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Bad Samaritan Laws</CardTitle>
              </div>
              <CardDescription>Legal duty to assist and report</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Bad Samaritan laws impose a legal duty to rescue or report emergencies, with civil or criminal penalties for failing to help when able to do so safely.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emergency flex-shrink-0" />
                  <span>Creates legal obligation to assist or report</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emergency flex-shrink-0" />
                  <span>Penalties for inexcusable bystander hesitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emergency flex-shrink-0" />
                  <span>Reduces victim abandonment in emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emergency flex-shrink-0" />
                  <span>Less common globally but gaining traction</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-trust-light border-trust">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust text-trust-foreground">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">Our Vision: Universal Dual Coverage</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We advocate for every country to adopt <strong>both</strong> Good Samaritan immunity and Bad Samaritan duty-to-rescue laws simultaneously. This dual approach:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-trust/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-trust">1</span>
                </div>
                <span><strong>Removes fear</strong> through immunity protections while <strong>creating expectation</strong> through duty requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-trust/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-trust">2</span>
                </div>
                <span><strong>Encourages heroism</strong> by protecting those who step up while <strong>discouraging abandonment</strong> through penalties</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-trust/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-trust">3</span>
                </div>
                <span><strong>Transforms hesitant bystanders into confident upstanders</strong> through legal backing and moral clarity</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted flex-shrink-0">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Research Foundation</h3>
              <p className="text-muted-foreground mb-4">
                This initiative builds on the comprehensive research of <strong>Zachary D. Kaufman</strong>, 
                whose work on Bad Samaritan laws worldwide has documented the global landscape of duty-to-rescue legislation.
              </p>
              <Button variant="outline" asChild>
                <a 
                  href="https://www.zacharykaufman.com/projects/bad-samaritan-laws/?sortByDate=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Explore Kaufman's Research
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
