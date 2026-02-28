import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowRight, Github, Users, Zap, Lock, GraduationCap, Sparkles, Globe, CheckCircle2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const features = [{
  icon: ShieldCheck,
  title: "University-Only Access",
  desc: "Every user verified via .edu email, phone OTP, and student ID — no fakes, no bots."
}, {
  icon: Zap,
  title: "AI Project Mutation",
  desc: "Drop a rough idea and our AI fills gaps, suggests sub-projects, and professionalizes your pitch."
}, {
  icon: Users,
  title: "Smart Team Matching",
  desc: "Find collaborators by verified skills and GitHub activity — not just buzzwords."
}, {
  icon: Github,
  title: "GitHub-Native Workflow",
  desc: "Mandatory GitHub integration means every profile is backed by real code and real commits."
}];
const trustStats = [{
  value: "100%",
  label: "Verified Users"
}, {
  value: "9-Step",
  label: "Trust Protocol"
}, {
  value: ".edu",
  label: "Email Only"
}, {
  value: "0",
  label: "Fake Profiles"
}];
const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const isEduEmail = email.endsWith(".edu") || email.endsWith(".edu.in") || email.endsWith(".ac.in");
  return <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              
            </div>
            <span className="text-lg font-bold tracking-tight">ONTIC</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-foreground transition-colors">How it Works</span>
            <span className="cursor-pointer hover:text-foreground transition-colors">Trust Protocol</span>
            <span className="cursor-pointer hover:text-foreground transition-colors">For Universities</span>
          </div>
          <div className="flex items-center gap-2">
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
              <DialogTrigger asChild>
                <Button size="sm" variant="ghost" className="gap-1.5">
                  <LogIn className="h-4 w-4" /> Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Login to ONTIC</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="login-id">Username or Email</Label>
                    <Input
                      id="login-id"
                      placeholder="Enter username or email"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => {
                      // TODO: Connect to backend auth
                      navigate("/dashboard");
                      setLoginOpen(false);
                    }}
                    disabled={!loginId || !loginPassword}
                  >
                    Sign In
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => navigate("/onboarding")}>
              Get Verified
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative pt-32 pb-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Trust-first student networking</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text">Build with people</span>
              <br />
              you can trust.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              ONTIC connects verified university students for projects, hackathons,
              and FYPs. No strangers — every member passes our 9-step trust protocol.
            </p>

            {/* Email CTA */}
            <div className="mx-auto max-w-md mb-6">
              <div className="flex gap-2 rounded-xl border border-border bg-card p-1.5 shadow-lg">
                <div className="relative flex-1">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type="email" placeholder="you@university.edu" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-lg bg-muted/50 py-2.5 pl-10 pr-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-accent/40" />
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5" onClick={() => navigate("/onboarding")}>
                  Start Verification <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              {email && !isEduEmail && email.includes("@") && <p className="mt-2 text-xs text-destructive flex items-center gap-1 justify-center">
                  <Lock className="h-3 w-3" /> Only .edu / .ac.in emails accepted
                </p>}
              {isEduEmail && <p className="mt-2 text-xs text-success flex items-center gap-1 justify-center">
                  <CheckCircle2 className="h-3 w-3" /> University email detected ✓
                </p>}
            </div>

            {/* Trust stats */}
            <div className="flex items-center justify-center gap-8 md:gap-12 mt-12">
              {trustStats.map(stat => <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-highlight/5 blur-3xl animate-float" style={{
        animationDelay: "3s"
      }} />
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why trust matters</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Every feature is built around one principle: you should know exactly who you're collaborating with.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map(f => <div key={f.title} className="glass-card p-6 group hover:border-accent/30 transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4 group-hover:trust-glow transition-all">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-highlight" />
            <span className="text-sm font-medium text-muted-foreground">Join the trusted network</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something real?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Complete the 9-step verification and join a community where every profile is real.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2" onClick={() => navigate("/onboarding")}>
            <ShieldCheck className="h-5 w-5" /> Begin Verification
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-accent" />
            <span className="font-semibold text-foreground">ONTIC</span>
            <span>© 2026</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-3 w-3" />
            Built for universities. Trusted by students.
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;