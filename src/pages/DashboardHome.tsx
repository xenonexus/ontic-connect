import { Rocket, Users, TrendingUp, Star, Sparkles, Zap, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from "recharts";

const timelineSteps = [
{ label: "Start", done: true },
{ label: "Milestone 1", done: true },
{ label: "Milestone 2", done: true },
{ label: "Milestone 3", done: false },
{ label: "End", done: false }];


const ratingData = [
{ v: 40 }, { v: 55 }, { v: 45 }, { v: 60 }, { v: 50 }, { v: 65 }, { v: 58 }];


const barData = [
{ v: 30 }, { v: 50 }, { v: 40 }, { v: 70 }, { v: 55 }, { v: 45 }];


const networkMembers = [
{ initials: "AP", color: "bg-accent" },
{ initials: "RK", color: "bg-highlight" },
{ initials: "SM", color: "bg-muted-foreground/40" },
{ initials: "VN", color: "bg-muted-foreground/30" },
{ initials: "TJ", color: "bg-muted-foreground/20" }];


const activePosts = [
{ title: "ML Pipeline for Campus Analytics", abstract: "Looking for 2 backend devs to build real-time data ingestion...", needed: 2, applied: 3 },
{ title: "Open-Source Study Timer App", abstract: "Need a UI/UX designer and a React dev for a pomodoro-based...", needed: 1, applied: 5 },
{ title: "Blockchain-Based Certificate Verifier", abstract: "Seeking a Solidity developer to help with smart contract...", needed: 3, applied: 1 }];


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
                  {timelineSteps.map((step, i) =>
                  <div key={step.label} className="flex items-center gap-3 w-full">
                      <div className="flex flex-col items-center">
                        {i > 0 &&
                      <div className={`w-0.5 h-5 ${timelineSteps[i - 1].done ? "bg-accent" : "bg-muted-foreground/30"}`} />
                      }
                        <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 ${step.done ? "bg-accent" : "bg-muted-foreground/40"}`}>
                          {step.done ? "✓" : i + 1}
                        </div>
                        {i < timelineSteps.length - 1 &&
                      <div className={`w-0.5 h-5 ${step.done ? "bg-accent" : "bg-muted-foreground/30"}`} />
                      }
                      </div>
                      <span className="text-xs text-muted-foreground">{step.label}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AspectRatio>
        </div>

        {/* Middle column – Network + Rating (16:9) and Active Posts below */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Your Network */}
            <AspectRatio ratio={16 / 9}>
              <div className="glass-card p-4 flex flex-col gap-2 h-full overflow-auto">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">Your Network</h3>
                  <span className="text-xs text-muted-foreground">5</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {networkMembers.map((m, i) =>
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${m.color} flex items-center justify-center text-[10px] font-semibold text-white cursor-pointer hover:scale-105 transition-transform`}>

                      {m.initials}
                    </div>
                  )}
                  <div className="h-8 w-8 rounded-full border-2 border-dashed border-accent/40 flex items-center justify-center text-accent cursor-pointer hover:bg-accent/10 transition-colors">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                </div>
                <Button size="sm" variant="outline" className="text-xs mt-auto" onClick={() => navigate("/dashboard/ideosphere")}>
                  Find teammates
                </Button>
              </div>
            </AspectRatio>

            {/* Your Rating */}
            <AspectRatio ratio={16 / 9}>
              <div className="glass-card p-4 flex flex-col gap-2 h-full overflow-auto">
                <h3 className="font-semibold text-sm">Your Rating</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={ratingData}>
                        <Line type="monotone" dataKey="v" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="h-12 w-12 rounded-full border-4 border-accent/30 flex flex-col items-center justify-center shrink-0">
                    <span className="text-base font-bold leading-none">82</span>
                    <Star className="h-2.5 w-2.5 text-accent mt-0.5" />
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} barSize={5}>
                      <Bar dataKey="v" fill="hsl(var(--accent) / 0.5)" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </AspectRatio>
          </div>

          {/* Active Posts */}
          <div className="glass-card p-4 gap-3 mx-0 my-[12px] flex-col flex items-center justify-end">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-accent" />
                <h3 className="font-semibold text-sm">Active Posts</h3>
              </div>
              <span className="text-xs text-muted-foreground">{activePosts.length} unfulfilled</span>
            </div>
            <div className="flex flex-col gap-2">
              {activePosts.map((post, i) =>
              <div key={i} className="rounded-lg bg-muted/40 p-3 flex items-start justify-between gap-3 cursor-pointer hover:bg-muted/60 transition-colors">
                  <div className="min-w-0">
                    <p className="text-xs font-medium truncate">{post.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{post.abstract}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] text-accent font-medium">{post.applied} applied</span>
                    <span className="text-[10px] text-muted-foreground">/ {post.needed} needed</span>
                  </div>
                </div>
              )}
            </div>
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
                onClick={() => navigate("/dashboard/mutation")}>

                <Sparkles className="h-3 w-3" /> Start Mutating
              </Button>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>);

};

export default DashboardHome;