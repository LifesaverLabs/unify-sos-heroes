import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Zap, BookOpen, Users2 } from "lucide-react";

export const Training = () => {
  return (
    <section id="training" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Universal Emergency Training
          </h2>
          <p className="text-lg text-muted-foreground">
            Legal protection and duty are meaningless without the knowledge and confidence to act. 
            We advocate for free, government-sponsored training for all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency text-emergency-foreground mb-3">
                <Heart className="h-6 w-6" />
              </div>
              <CardTitle>CPR Training</CardTitle>
              <CardDescription>Life-saving chest compressions</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Cardiopulmonary resuscitation can double or triple survival rates for cardiac arrest victims when performed immediately.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning text-warning-foreground mb-3">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>AED Training</CardTitle>
              <CardDescription>Automated external defibrillation</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Learning to use AEDs can restart hearts in cardiac arrest situations, with each minute of delay reducing survival by 10%.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-safety text-safety-foreground mb-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle>First Aid</CardTitle>
              <CardDescription>Basic emergency response</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              From bleeding control to burn treatment, basic first aid knowledge prepares citizens to stabilize victims until professionals arrive.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust text-trust-foreground mb-3">
                <Users2 className="h-6 w-6" />
              </div>
              <CardTitle>Violence Interruption</CardTitle>
              <CardDescription>De-escalation techniques</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Programs like Take 10 and Take 100 teach bystanders to safely intervene in conflicts before they escalate to violence.
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-trust-light to-safety-light border-2 border-trust">
          <CardHeader>
            <CardTitle className="text-2xl">Our Training Vision</CardTitle>
            <CardDescription>Empowering every citizen as a potential first responder</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We advocate for governments worldwide to provide <strong>free, accessible emergency training</strong> to all citizens. This creates a foundation where:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-trust/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-trust">1</span>
                </div>
                <span><strong>Fear is replaced with confidence</strong> - People know what to do and feel prepared to act</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-trust/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-trust">2</span>
                </div>
                <span><strong>Legal duty becomes achievable</strong> - Bad Samaritan laws are fair when everyone has access to training</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-trust/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-trust">3</span>
                </div>
                <span><strong>Communities become resilient</strong> - Every neighborhood has trained responders before professionals arrive</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-trust/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-trust">4</span>
                </div>
                <span><strong>Lives are saved</strong> - Immediate bystander action in the critical first minutes dramatically improves outcomes</span>
              </li>
            </ul>
            <div className="p-4 bg-background rounded-lg border mt-6">
              <p className="text-sm">
                <strong>The Complete Package:</strong> Good Samaritan immunity + Bad Samaritan duty + Free universal training = 
                A society where everyone can and will rise to upstander status when emergencies occur.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
