import { Rocket, Users, TrendingUp, Star, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from "recharts";

const timelineSteps = [
  { label: "Start", done: true },
  { label: "Milestone 1", done: true },
  { label: "Milestone 2", done: true },
  { label: "Milestone 3", done: false },
  { label: "End", done: false },
];

const ratingData = [
  { v: 40 }, { v: 55 }, { v: 45 }, { v: 60 }, { v: 50 }, { v: 65 }, { v: 58 },
];

const barData = [
  { v: 30 }, { v: 50 }, { v: 40 }, { v: 70 }, { v: 55 }, { v: 45 },
];

const networkMembers = [
  { initials: "AP", color: "bg-accent" },
  { initials: "RK", color: "bg-highlight" },
  { initials: "SM", color: "bg-muted-foreground/40" },
  { initials: "VN", color: "bg-muted-foreground/30" },
  { initials: "TJ", color: "bg-muted-foreground/20" },
];

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome Back, Arjun 👋</h1>

      <div className="grid grid-cols-4 gap-4 items-start">
        {/* Active Projects – 9:16 vertical box */}
        <div className="col-span-1">
          <AspectRatio ratio={9 / 16}>
            <div className="glass-card p-5 flex flex-col gap-4 h-full overflow-auto">
              <h3 className="font-semibold text-base">Active Projects</h3>

              {/* Project info */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">AI Study Planner</p>
                  <p className="text-xs text-muted-foreground">Progress: 19 / 30</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-accent/20 overflow-hidden">
                <div className="h-full w-[63%] bg-accent rounded-full" />
              </div>

              {/* Graphical Timeline */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-xs font-medium text-muted-foreground mb-3">Timeline</p>
                <div className="relative flex flex-col items-center gap-0">
                  {timelineSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-3 w-full">
                      {/* Vertical line + dot */}
                      <div className="flex flex-col items-center">
                        {i > 0 && (
                          <div className={`w-0.5 h-5 ${timelineSteps[i - 1].done ? "bg-accent" : "bg-muted-foreground/30"}`} />
                        )}
                        <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 ${step.done ? "bg-accent" : "bg-muted-foreground/40"}`}>
                          {step.done ? "✓" : i + 1}
                        </div>
                        {i < timelineSteps.length - 1 && (
                          <div className={`w-0.5 h-5 ${step.done ? "bg-accent" : "bg-muted-foreground/30"}`} />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AspectRatio>
        </div>

        {/* Middle column – Rating + Network stacked */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Rating / Stats */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <h3 className="font-semibold text-base">Your rating</h3>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ratingData}>
                    <Line type="monotone" dataKey="v" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="h-14 w-14 rounded-full border-4 border-accent/30 flex flex-col items-center justify-center shrink-0">
                <span className="text-lg font-bold leading-none">82</span>
                <Star className="h-3 w-3 text-accent mt-0.5" />
              </div>
            </div>
            <div className="h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barSize={6}>
                  <Bar dataKey="v" fill="hsl(var(--accent) / 0.5)" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Your Network */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-base">Your Network</h3>
              <span className="text-xs text-muted-foreground">5 connections</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {networkMembers.map((m, i) => (
                <div
                  key={i}
                  className={`h-10 w-10 rounded-full ${m.color} flex items-center justify-center text-xs font-semibold text-white cursor-pointer hover:scale-105 transition-transform`}
                >
                  {m.initials}
                </div>
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-dashed border-accent/40 flex items-center justify-center text-accent cursor-pointer hover:bg-accent/10 transition-colors">
                <Users className="h-4 w-4" />
              </div>
            </div>
            <Button size="sm" variant="outline" className="text-xs mt-1" onClick={() => navigate("/dashboard/ideosphere")}>
              Find teammates
            </Button>
          </div>
        </div>

        {/* Project Mutation – 9:16 vertical box */}
        <div className="col-span-1">
          <AspectRatio ratio={9 / 16}>
            <div className="glass-card p-5 flex flex-col gap-4 h-full overflow-auto">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-highlight" />
                <h3 className="font-semibold text-base">Project Mutation</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Drop a rough idea and our AI fills gaps, suggests sub-projects, and professionalizes your pitch.
              </p>
              <div className="flex-1 flex flex-col justify-center gap-3">
                <div className="rounded-lg bg-muted/40 p-3 flex items-start gap-2">
                  <Zap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium">AI-Powered</p>
                    <p className="text-[10px] text-muted-foreground">Get sub-ideas, gap analysis & tech stack suggestions</p>
                  </div>
                </div>
                <div className="rounded-lg bg-muted/40 p-3 flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium">Professionalize</p>
                    <p className="text-[10px] text-muted-foreground">Transform rough ideas into polished project pitches</p>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1 w-full mt-auto"
                onClick={() => navigate("/dashboard/mutation")}
              >
                <Sparkles className="h-3 w-3" /> Start Mutating
              </Button>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
