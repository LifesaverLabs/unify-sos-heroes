import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Share2, FileText, Globe } from "lucide-react";

export const CallToAction = () => {
  return (
    <section id="take-action" className="py-20 bg-gradient-to-br from-emergency via-emergency/90 to-trust">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4">
              Join the Movement
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Every voice matters in this global effort to unify emergency response and empower upstanders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Contact Your Representatives</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Write to your local, regional, and national government officials advocating for unified emergency numbers and dual Samaritan laws.
                    </p>
                    <Button variant="secondary" size="sm">
                      Draft a Letter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <Share2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Spread Awareness</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Share this initiative on social media, in your community groups, and with organizations focused on public safety and international cooperation.
                    </p>
                    <Button variant="secondary" size="sm">
                      Share Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Sign Petitions</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Support existing petitions calling for emergency number unification and comprehensive Samaritan legislation in your country.
                    </p>
                    <Button variant="secondary" size="sm">
                      Find Petitions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 flex-shrink-0">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Support International Bodies</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Encourage the UN, WHO, and other international organizations to prioritize emergency response standardization.
                    </p>
                    <Button variant="secondary" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white text-center">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Get Emergency Response Training</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                While we advocate for free universal training, don't wait. Seek out CPR, AED, First Aid, 
                and violence interruption courses in your community today. Be prepared to be an upstander.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emergency hover:bg-emergency/90">
                  Find Training Near You
                </Button>
                <Button size="lg" variant="outline">
                  Online Courses
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-white/80 text-sm">
              Together, we can create a world where help is always just three digits away, 
              and every person has the protection, training, and duty to save lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
