import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail, Phone, CreditCard, GraduationCap, Github, Code2,
  User, FileText, ShieldCheck, ArrowRight, ArrowLeft, Check, Lock, Twitter, Camera, Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const steps = [
  { icon: Mail, title: "University Email", desc: "Verify your .edu email address" },
  { icon: Phone, title: "Phone OTP", desc: "Confirm your phone number" },
  { icon: CreditCard, title: "Student ID", desc: "Upload your college ID card" },
  { icon: User, title: "Personal Info", desc: "Your name and profile details" },
  { icon: GraduationCap, title: "Degree Info", desc: "Program, year, and university" },
  { icon: Code2, title: "Skills & Domains", desc: "Select your areas of expertise" },
  { icon: Github, title: "GitHub Integration", desc: "Connect your GitHub profile" },
  { icon: FileText, title: "NPTEL / Certs", desc: "Add course certifications" },
  { icon: ShieldCheck, title: "Review & Confirm", desc: "Finalize your trusted profile" },
];

const skills = ["React", "Python", "Machine Learning", "Node.js", "Flutter", "Data Science", "DevOps", "UI/UX", "Blockchain", "IoT", "Cloud", "Cybersecurity"];

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (s: string) =>
    setSelectedSkills((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const next = () => setCurrent((p) => Math.min(p + 1, 8));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  const renderStepContent = () => {
    switch (current) {
      case 0:
        return (
          <div className="space-y-4">
            <Label>University Email</Label>
            <Input placeholder="you@university.edu" type="email" />
            <p className="text-xs text-muted-foreground">We'll send a verification link to your .edu email.</p>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <Label>Phone Number</Label>
            <Input placeholder="+91 9876543210" type="tel" />
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Input key={i} className="w-12 text-center font-mono text-lg" maxLength={1} placeholder="•" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Enter the 6-digit OTP sent to your phone.</p>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Label>Student ID Card</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-10 text-center hover:border-accent/50 transition-colors cursor-pointer">
              <CreditCard className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            {/* Profile Picture */}
            <div className="flex flex-col items-center gap-3 mb-2">
              <div className="relative group cursor-pointer">
                <div className="h-20 w-20 rounded-full bg-muted border-2 border-dashed border-border flex items-center justify-center hover:border-accent/50 transition-colors">
                  <Camera className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-bold">+</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Upload a profile picture</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>First Name</Label><Input placeholder="Arjun" /></div>
              <div><Label>Last Name</Label><Input placeholder="Patel" /></div>
            </div>
            <div><Label>Bio</Label><Input placeholder="CS undergrad passionate about ML & open source" /></div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div><Label>University</Label><Input placeholder="IIT Bombay" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Program</Label><Input placeholder="B.Tech Computer Science" /></div>
              <div><Label>Year</Label><Input placeholder="3rd Year" /></div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <Label>Select Your Skills</Label>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSkill(s)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    selectedSkills.includes(s)
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-muted text-muted-foreground border-border hover:border-accent/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <Label>GitHub Username</Label>
            <div className="flex gap-2 items-center">
              <Github className="h-5 w-5 text-muted-foreground" />
              <Input placeholder="github-username" />
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Github className="h-4 w-4" /> Connect GitHub Account
            </Button>
            <p className="text-xs text-muted-foreground">GitHub integration is mandatory for profile verification.</p>

            <div className="pt-4 border-t border-border">
              <Label>X (Twitter) Profile <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <div className="flex gap-2 items-center mt-2">
                <Twitter className="h-5 w-5 text-muted-foreground" />
                <Input placeholder="@your_handle" />
              </div>
              <Button variant="outline" className="w-full gap-2 mt-2">
                <Twitter className="h-4 w-4" /> Link X Account
              </Button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <Label>NPTEL / Course Certificates</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-accent/50 transition-colors cursor-pointer">
              <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Upload NPTEL or other course certificates</p>
            </div>
            <Input placeholder="NPTEL Course Name (e.g., Deep Learning - IIT Madras)" />
          </div>
        );
      case 8:
        return (
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Arjun Patel</p>
                  <p className="text-sm text-muted-foreground">arjun@iitb.ac.in</p>
                </div>
                <span className="trust-badge ml-auto">
                  <ShieldCheck className="h-3 w-3" /> Verified
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                {["React", "Python", "ML"].map((s) => (
                  <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-md text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-sm">
              {["Email verified", "Phone verified", "Student ID uploaded", "GitHub connected", "NPTEL certs added"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-success">
                  <Check className="h-4 w-4" /> <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left: Step sidebar */}
      <div className="hidden lg:flex w-80 border-r border-border bg-muted/30 flex-col p-6">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>
        <div className="flex items-center gap-2 mb-10">
          <Lock className="h-5 w-5 text-accent" />
          <span className="font-bold text-lg">ONTIC</span>
        </div>
        <div className="space-y-1 flex-1">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left ${
                i === current
                  ? "bg-accent/10 text-accent font-medium"
                  : i < current
                  ? "text-success"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`flex h-7 w-7 items-center justify-center rounded-md text-xs font-semibold ${
                i === current ? "bg-accent text-accent-foreground" : i < current ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
              }`}>
                {i < current ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </div>
              <div>
                <div className="leading-tight">{step.title}</div>
              </div>
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Step {current + 1} of 9</p>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile back + progress */}
          <div className="lg:hidden mb-4">
            <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm mb-4">
              <Home className="h-4 w-4" /> Home
            </button>
          </div>
          <div className="lg:hidden mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step {current + 1} of 9</span>
              <span className="text-xs text-muted-foreground">{Math.round(((current + 1) / 9) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${((current + 1) / 9) * 100}%` }} />
            </div>
          </div>

          <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            {(() => { const Icon = steps[current].icon; return <Icon className="h-5 w-5" />; })()}
          </div>
          <h2 className="text-2xl font-bold mt-3 mb-1">{steps[current].title}</h2>
          <p className="text-sm text-muted-foreground mb-8">{steps[current].desc}</p>

          {renderStepContent()}

          <div className="flex justify-between mt-10">
            <Button variant="outline" onClick={prev} disabled={current === 0} className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            {current === 8 ? (
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1" onClick={() => navigate("/dashboard")}>
                Complete Verification <ShieldCheck className="h-4 w-4" />
              </Button>
            ) : (
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1" onClick={next}>
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
