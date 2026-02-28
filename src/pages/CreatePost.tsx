import { useState } from "react";
import { Check, Sparkles, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const STEPS = ["Project Type", "Project Details", "Team Requirements", "Timeline"];

const DOMAINS = [
  "AI / Machine Learning",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Cybersecurity",
  "IoT / Embedded",
  "Blockchain",
  "Game Development",
  "Cloud Computing",
  "Other",
];

const ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "ML Engineer",
  "UI/UX Designer",
  "Data Analyst",
  "DevOps Engineer",
  "Project Manager",
  "Researcher",
  "Other",
];

const StepIndicator = ({ currentStep }: { currentStep: number }) => (
  <div className="w-full mb-8">
    <div className="flex items-center justify-between">
      {STEPS.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;
        return (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div className="relative flex w-full items-center justify-center">
              {i > 0 && (
                <div className="absolute right-1/2 top-1/2 h-0.5 w-full -translate-y-1/2">
                  <div className={`h-full transition-colors duration-300 ${isCompleted || isActive ? "bg-accent" : "bg-border"}`} />
                </div>
              )}
              <motion.div
                className={`step-circle relative z-10 ${isCompleted ? "completed" : isActive ? "active" : "upcoming"}`}
                initial={false}
                animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {isCompleted ? <Check className="h-5 w-5" /> : stepNum}
              </motion.div>
            </div>
            <span className={`mt-2 hidden text-center text-xs font-medium md:block ${isActive ? "text-accent" : isCompleted ? "text-accent/70" : "text-muted-foreground"}`}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
    <p className="mt-4 text-center text-sm text-muted-foreground">Step {currentStep} of {STEPS.length}</p>
  </div>
);

const CreatePost = () => {
  const [step, setStep] = useState(1);

  // Step 1
  const [projectType, setProjectType] = useState("");

  // Step 2
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [domain, setDomain] = useState("");

  // Step 3
  const [needsMembers, setNeedsMembers] = useState("");
  const [role, setRole] = useState("");
  const [memberCount, setMemberCount] = useState("1");

  // Step 4
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const canProceed = () => {
    switch (step) {
      case 1: return !!projectType;
      case 2: return !!title.trim() && !!description.trim() && !!domain;
      case 3: return needsMembers === "no" || (needsMembers === "yes" && !!role && parseInt(memberCount) > 0);
      case 4: return !!startDate && !!endDate;
      default: return false;
    }
  };

  return (
    <div className="flex gap-6 h-full">
      {/* Left – Form */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Create Post</h1>
        <StepIndicator currentStep={step} />

        <div className="glass-card p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Is your idea competitive or a personal project?</h2>
              <RadioGroup value={projectType} onValueChange={setProjectType} className="space-y-3">
                <div className="flex items-center space-x-3 glass-card p-4 cursor-pointer hover:border-accent/30 transition-all">
                  <RadioGroupItem value="competitive" id="competitive" />
                  <Label htmlFor="competitive" className="cursor-pointer flex-1">
                    <span className="font-medium">Competitive</span>
                    <p className="text-xs text-muted-foreground mt-0.5">Hackathons, competitions, or contests</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 glass-card p-4 cursor-pointer hover:border-accent/30 transition-all">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="cursor-pointer flex-1">
                    <span className="font-medium">Personal Project</span>
                    <p className="text-xs text-muted-foreground mt-0.5">Side projects, learning, or portfolio work</p>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-lg">Tell us about your project</h2>
              <div className="space-y-2">
                <Label>Project Title</Label>
                <Input placeholder="e.g., AI-Powered Study Buddy" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Describe your idea</Label>
                <Textarea placeholder="What problem does it solve? What's the vision?" value={description} onChange={(e) => setDescription(e.target.value)} className="min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label>Domain</Label>
                <Select value={domain} onValueChange={setDomain}>
                  <SelectTrigger><SelectValue placeholder="Select a domain" /></SelectTrigger>
                  <SelectContent>
                    {DOMAINS.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-lg">Do you require members for any specific role?</h2>
              <RadioGroup value={needsMembers} onValueChange={setNeedsMembers} className="space-y-3">
                <div className="flex items-center space-x-3 glass-card p-4 cursor-pointer hover:border-accent/30 transition-all">
                  <RadioGroupItem value="yes" id="yes-members" />
                  <Label htmlFor="yes-members" className="cursor-pointer">Yes, I need team members</Label>
                </div>
                <div className="flex items-center space-x-3 glass-card p-4 cursor-pointer hover:border-accent/30 transition-all">
                  <RadioGroupItem value="no" id="no-members" />
                  <Label htmlFor="no-members" className="cursor-pointer">No, I'm working solo</Label>
                </div>
              </RadioGroup>

              {needsMembers === "yes" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label>Role needed</Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                      <SelectContent>
                        {ROLES.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>How many members?</Label>
                    <Input type="number" min="1" max="10" value={memberCount} onChange={(e) => setMemberCount(e.target.value)} />
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-lg">What's the project timeline?</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 1}>
              Back
            </Button>
            {step < 4 ? (
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setStep(step + 1)} disabled={!canProceed()}>
                Next
              </Button>
            ) : (
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={!canProceed()}>
                Publish Post
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Right – NAAN AI sidebar */}
      <div className="w-72 shrink-0 hidden lg:block">
        <div className="glass-card p-5 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Brain className="h-5 w-5 text-accent" />
            <h2 className="font-bold text-base">NAAN AI</h2>
          </div>
          <p className="text-xs text-muted-foreground mb-6 italic">food for thought</p>

          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 opacity-60">
            <Sparkles className="h-10 w-10 text-accent/50" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fill in your project details and NAAN AI will suggest improvements, identify gaps, and refine your pitch.
            </p>
          </div>

          <div className="mt-4 relative">
            <Input placeholder="Ask NAAN AI anything..." className="pr-10" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-accent hover:text-accent/80 transition-colors">
              <Sparkles className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
