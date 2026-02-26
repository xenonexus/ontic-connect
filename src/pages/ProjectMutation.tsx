import { useState } from "react";
import { Sparkles, Zap, ArrowRight, Copy, RotateCcw, Lightbulb, Target, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleMutations = [
  {
    type: "Sub-Idea",
    icon: Lightbulb,
    title: "Adaptive Quiz Module",
    desc: "Add an AI-driven quiz system that adapts difficulty based on student performance, using spaced repetition algorithms.",
  },
  {
    type: "Gap Filler",
    icon: Target,
    title: "Data Privacy Layer",
    desc: "Implement end-to-end encryption for student data with GDPR-compliant data handling and anonymized analytics.",
  },
  {
    type: "Tech Stack",
    icon: Wrench,
    title: "Recommended Architecture",
    desc: "React + FastAPI backend, PostgreSQL for data, Redis for caching quiz states, and TensorFlow Lite for on-device ML.",
  },
];

const ProjectMutation = () => {
  const [input, setInput] = useState("");
  const [mutated, setMutated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const professionalizedText = `An AI-Augmented Adaptive Learning Platform that leverages machine learning algorithms to create personalized study pathways for university students. The system analyzes learning patterns, course performance data, and peer collaboration metrics to generate optimized study schedules, recommend relevant resources, and facilitate group study sessions with skill-complementary peers.`;

  const handleMutate = () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMutated(true);
    }, 1500);
  };

  const handleReset = () => {
    setMutated(false);
    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-5 w-5 text-highlight" />
          <h1 className="text-2xl font-bold">Project Mutation Lab</h1>
        </div>
        <p className="text-muted-foreground">Drop a rough idea. Our AI fills gaps, suggests sub-projects, and professionalizes your pitch.</p>
      </div>

      {/* Input */}
      <div className="glass-card p-6">
        <label className="text-sm font-medium mb-2 block">Your Raw Idea</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., I want to build an app that helps students study better using AI..."
          className="w-full min-h-[120px] rounded-lg bg-muted/50 p-4 text-sm outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-accent/40 resize-none"
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-muted-foreground">{input.length} characters</span>
          <Button
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            onClick={handleMutate}
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                Mutating...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4" /> Mutate Project
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Output */}
      {mutated && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Professionalized */}
          <div className="glass-card p-6 border-accent/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-highlight" />
                <span className="text-sm font-semibold">Professionalized Description</span>
              </div>
              <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground">
                <Copy className="h-3 w-3" /> Copy
              </Button>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">{professionalizedText}</p>
          </div>

          {/* Mutations */}
          <div>
            <h3 className="font-semibold mb-4">AI-Generated Mutations</h3>
            <div className="grid gap-4">
              {sampleMutations.map((m) => (
                <div key={m.title} className="glass-card p-5 hover:border-accent/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <m.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-md">{m.type}</span>
                        <span className="font-semibold text-sm">{m.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1">
              Post to Ideasphere <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="gap-1" onClick={handleReset}>
              <RotateCcw className="h-4 w-4" /> Start Over
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectMutation;
