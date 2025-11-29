import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Vote, Heart, Users } from "lucide-react";

export const Suffrage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-trust/10 via-background to-safety/10">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-trust shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-trust text-trust-foreground">
                  <Vote className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">All Sufferers Deserve Suffrage</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Democracy must grant everyone old enough to perform CPR an opportunity to influence and force change on every kind of life, liberty, and death policy question—including critically <strong>calmunity⁵ emergency preparation and management</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-trust/20 flex-shrink-0">
                    <Heart className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Universal Participation</h3>
                    <p className="text-sm text-muted-foreground">
                      If you're old enough to save a life, you're old enough to have a voice in how we prepare for, respond to, and prevent emergencies in our communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-trust/20 flex-shrink-0">
                    <Users className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Shared Responsibility</h3>
                    <p className="text-sm text-muted-foreground">
                      As we accept and assume the human duty to rescue no matter where we are, we all deserve equal participation in shaping the policies that govern life-and-death decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-trust/5 rounded-lg border border-trust/20">
                <p className="text-sm text-muted-foreground italic">
                  "The duty to rescue is inseparable from the right to participate. When we ask citizens to act heroically in emergencies, we must grant them democratic power over emergency policy, training access, and resource allocation. Suffrage for all sufferers."
                </p>
              </div>

              <div className="mt-8 p-6 bg-emergency/5 rounded-lg border-2 border-emergency/30">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emergency text-emergency-foreground flex-shrink-0">
                    <Vote className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-emergency">Voting is Itself an SOS Duty</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The exercise of suffrage in democracy is not merely a right—it is an <strong>emergency signal</strong> that we all above CPR age have a duty to discharge. Just as we have a duty to rescue those in immediate peril, we have a duty to rescue our communities, our democracy, and future generations through active participation in governance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emergency flex-shrink-0" />
                    <span className="text-sm"><strong>Democracy is a perpetual emergency:</strong> Every election, every vote, every policy decision is a moment where lives hang in the balance—healthcare access, emergency response funding, climate action, public safety infrastructure, protection of mothers and precautious prevention, extraordinarily careful protection, and/or burial of the unborn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emergency flex-shrink-0" />
                    <span className="text-sm"><strong>Non-participation is abandonment:</strong> Just as standing by while someone drowns is inexcusable, standing by while democracy drowns in apathy, corruption, or authoritarianism is a form of bystander hesitation we cannot tolerate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emergency flex-shrink-0" />
                    <span className="text-sm"><strong>You are trained and capable:</strong> If you're old enough to perform CPR and save a life in crisis, you're old enough to discharge your democratic duty and save lives through policy, advocacy, and voting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emergency flex-shrink-0" />
                    <span className="text-sm"><strong>The signal must be answered:</strong> SOS means "Save Our Souls"—and democracy is the collective SOS of all sufferers calling for justice, protection, and life-affirming governance. Answer the call.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
