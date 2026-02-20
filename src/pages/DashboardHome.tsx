import { Rocket, Users, CheckCircle2, ArrowRight, TrendingUp, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

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

const browseProjects = [
  { title: "AI Study Planner", domain: "Machine Learning" },
  { title: "Blockchain Voting", domain: "Blockchain" },
  { title: "Smart Campus IoT", domain: "IoT" },
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

      {/* Top Row */}
      <div className="grid grid-cols-4 gap-4">
        {/* Active Project */}
        <div className="glass-card p-5 col-span-1 flex flex-col gap-3">
          <div>
            <h3 className="font-semibold text-base">Active Project</h3>
            <div className="mt-2 h-1.5 rounded-full bg-accent/20 overflow-hidden">
              <div className="h-full w-[63%] bg-accent rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-sm">AI Study Planner</p>
              <p className="text-xs text-muted-foreground">Details: Milestone</p>
              <p className="text-xs text-muted-foreground">Status: 19 / 30</p>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="glass-card p-5 col-span-2 flex flex-col gap-4">
          <h3 className="font-semibold text-base">Project timeline</h3>
          <div className="relative flex items-center">
            {/* Track */}
            <div className="absolute left-4 right-4 h-1.5 bg-muted rounded-full top-5 z-0">
              <div className="h-full w-[60%] bg-accent rounded-full" />
            </div>
            <div className="relative z-10 flex justify-between w-full">
              {timelineSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center gap-1.5">
                  <div className={`h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm ${step.done ? "bg-accent" : "bg-muted-foreground/40"}`}>
                    {i === 0 ? "▶" : i === 1 ? "↗" : i === 2 ? "▶" : "⚑"}
                  </div>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rating / Stats */}
        <div className="glass-card p-5 col-span-1 flex flex-col gap-3">
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
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-4 gap-4">
        {/* Completed Projects */}
        <div className="glass-card p-5 col-span-1 flex flex-col gap-3">
          <div>
            <h3 className="font-semibold text-base">Completed Projects</h3>
            <div className="mt-2 h-1.5 rounded-full bg-success/20 overflow-hidden">
              <div className="h-full w-full bg-success/60 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {["Blockchain Voting App", "Campus IoT Prototype"].map((p) => (
              <div key={p} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span className="text-xs text-muted-foreground truncate">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Browse Projects */}
        <div className="glass-card p-5 col-span-2 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Browse Projects</h3>
            <Button size="sm" variant="ghost" className="text-xs gap-1 text-accent" onClick={() => navigate("/dashboard/marketplace")}>
              View all <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-2">
            {browseProjects.map((p) => (
              <div
                key={p.title}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-muted/40 hover:bg-accent/10 transition-colors cursor-pointer"
                onClick={() => navigate("/dashboard/marketplace")}
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{p.title}</span>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">{p.domain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Your Network */}
        <div className="glass-card p-5 col-span-1 flex flex-col gap-3">
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
          <Button size="sm" variant="outline" className="text-xs mt-1" onClick={() => navigate("/dashboard/marketplace")}>
            Find teammates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
