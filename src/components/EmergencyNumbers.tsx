import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Globe, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const EmergencyNumbers = () => {
  const currentNumbers = [
    { number: "112", regions: "EU, Middle East, Asia (70+ countries)", coverage: "Largest" },
    { number: "911", regions: "North America, Caribbean", coverage: "Wide" },
    { number: "999", regions: "UK, Hong Kong, Malaysia, Singapore", coverage: "Moderate" },
    { number: "000", regions: "Australia", coverage: "Limited" },
    { number: "110", regions: "China, Japan, Germany (police)", coverage: "Regional" },
    { number: "119", regions: "South Korea, Japan (fire/EMS)", coverage: "Regional" },
    { number: "100", regions: "India, Israel (police)", coverage: "Regional" },
    { number: "190", regions: "Brazil (police)", coverage: "Limited" },
  ];

  return (
    <section id="emergency-numbers" className="py-20 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            One World, One Emergency Number
          </h2>
          <p className="text-lg text-muted-foreground">
            The confusion of multiple emergency numbers costs lives. It's time to consolidate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-warning">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning text-warning-foreground">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">The Problem Today</CardTitle>
              </div>
              <CardDescription>A fragmented global emergency response system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                When someone travels abroad or faces an emergency in an unfamiliar location, they must remember different emergency numbers:
              </p>
              <div className="space-y-2">
                {currentNumbers.map((item) => (
                  <div key={item.number} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <span className="font-mono font-bold text-lg">{item.number}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.regions}</p>
                    </div>
                    <Badge variant="outline">{item.coverage}</Badge>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-sm font-medium">
                  <AlertTriangle className="inline h-4 w-4 mr-1" />
                  This fragmentation creates confusion, delays response times, and can cost lives in emergencies.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-2 border-trust">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust text-trust-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Proposal: 112</CardTitle>
                </div>
                <CardDescription>The pragmatic choice - already dominant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>112</strong> is already the most widely adopted emergency number globally, used across the European Union and 70+ countries.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Largest existing infrastructure and recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Minimal transition required for most countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Proven effectiveness across diverse regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Works even when roaming on foreign networks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Alternative: 123</CardTitle>
                </div>
                <CardDescription>The fresh start - memorable and meaningful</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>123</strong> offers a clean slate: sequential, easy to remember, and carries symbolic meaning about following steps in an emergency.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sequential pattern (1-2-3) is universally memorable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Symbolic of step-by-step emergency response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Currently unused, avoiding conflicts with existing services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Easy to dial, even under stress</span>
                  </li>
                </ul>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> While 123 requires global coordination for implementation, 
                    its memorability and symbolic value could make it the ideal long-term solution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-emergency/5 to-trust/5 border-2">
          <CardContent className="pt-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">The Vision: Universal Access</h3>
              <p className="text-muted-foreground mb-6">
                Imagine a world where <strong>every person</strong>, in <strong>every country</strong>, 
                can dial the <strong>same three digits</strong> to reach emergency services. 
                No confusion. No hesitation. No lives lost to uncertainty.
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-background rounded-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-trust mb-1">112</div>
                  <div className="text-xs text-muted-foreground">Existing Leader</div>
                </div>
                <div className="text-muted-foreground">or</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emergency mb-1">123</div>
                  <div className="text-xs text-muted-foreground">Future Standard</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
