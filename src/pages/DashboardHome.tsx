import { Rocket, Users, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VerifiedBadge from "@/components/VerifiedBadge";

const stats = [
  { label: "Active Projects", value: "24", icon: Rocket, change: "+3 this week" },
  { label: "Verified Students", value: "1,247", icon: ShieldCheck, change: "+56 this month" },
  { label: "Teams Formed", value: "89", icon: Users, change: "+12 this week" },
  { label: "Match Rate", value: "94%", icon: TrendingUp, change: "+2% vs last month" },
];

const recentProjects = [
  { title: "AI-Powered Study Planner", domain: "Machine Learning", college: "IIT Delhi", people: 2 },
  { title: "Blockchain Voting System", domain: "Blockchain", college: "BITS Pilani", people: 3 },
  { title: "IoT Smart Campus", domain: "IoT", college: "NIT Trichy", people: 1 },
];

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, Arjun 👋</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening in your trusted network.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className="h-4 w-4 text-accent" />
            </div>
            <div className="text-2xl font-bold">{s.value}</div>
            <p className="text-xs text-success mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass-card p-6 hover:border-accent/30 transition-all cursor-pointer" onClick={() => navigate("/dashboard/mutation")}>
          <Rocket className="h-8 w-8 text-accent mb-3" />
          <h3 className="font-semibold text-lg mb-1">Start a New Project</h3>
          <p className="text-sm text-muted-foreground mb-4">Use AI to refine your idea and find the perfect team.</p>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1">
            Launch Mutation Lab <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
        <div className="glass-card p-6 hover:border-accent/30 transition-all cursor-pointer" onClick={() => navigate("/dashboard/marketplace")}>
          <Users className="h-8 w-8 text-highlight mb-3" />
          <h3 className="font-semibold text-lg mb-1">Browse Marketplace</h3>
          <p className="text-sm text-muted-foreground mb-4">Discover projects from verified students across universities.</p>
          <Button size="sm" variant="outline" className="gap-1">
            Explore Projects <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Recent */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Trending Projects</h2>
        <div className="space-y-3">
          {recentProjects.map((p) => (
            <div key={p.title} className="glass-card p-4 flex items-center justify-between hover:border-accent/20 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{p.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-md text-muted-foreground">{p.domain}</span>
                    <span className="text-xs text-muted-foreground">{p.college}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <VerifiedBadge size="sm" />
                <span className="text-xs text-muted-foreground">Need {p.people} more</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
