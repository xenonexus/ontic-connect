import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail, User, Share2, FileText, ShieldCheck,
  ArrowRight, ArrowLeft, Lock,
} from "lucide-react";
import StepIndicator from "@/components/onboarding/StepIndicator";
import { Button } from "@/components/ui/button";
import StepUniversityEmail from "@/components/onboarding/StepUniversityEmail";
import StepPersonalInfo from "@/components/onboarding/StepPersonalInfo";
import StepSocialMedia from "@/components/onboarding/StepSocialMedia";
import StepNPTELCerts from "@/components/onboarding/StepNPTELCerts";
import StepReview from "@/components/onboarding/StepReview";

const steps = [
  { icon: Mail, title: "University Email & ID", desc: "Verify your email and upload student ID" },
  { icon: User, title: "Personal Info", desc: "Profile, degree, and skills" },
  { icon: Share2, title: "Social Media", desc: "Connect your professional profiles" },
  { icon: FileText, title: "NPTEL / Certs", desc: "Add course certifications (optional)" },
  { icon: ShieldCheck, title: "Review & Confirm", desc: "Finalize your trusted profile" },
];

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Step 1
  const [email, setEmail] = useState("");
  const [idUploaded, setIdUploaded] = useState(false);

  // Step 2
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [year, setYear] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Step 3
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");

  // Step 4
  const [nptelCourse, setNptelCourse] = useState("");

  const toggleSkill = (s: string) =>
    setSelectedSkills((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const canContinue = useMemo(() => {
    switch (current) {
      case 0: return email.includes("@") && email.includes(".edu") && idUploaded;
      case 1: return firstName.trim() !== "" && lastName.trim() !== "" && university.trim() !== "" && program.trim() !== "" && degreeLevel !== "" && year !== "" && selectedSkills.length > 0;
      case 2: return linkedin.trim() !== "";
      case 3: return true; // optional
      case 4: return true;
      default: return false;
    }
  }, [current, email, idUploaded, firstName, lastName, university, program, degreeLevel, year, selectedSkills, linkedin]);

  const next = () => setCurrent((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  const renderStepContent = () => {
    switch (current) {
      case 0: return <StepUniversityEmail email={email} setEmail={setEmail} idUploaded={idUploaded} setIdUploaded={setIdUploaded} />;
      case 1: return <StepPersonalInfo firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} bio={bio} setBio={setBio} university={university} setUniversity={setUniversity} program={program} setProgram={setProgram} degreeLevel={degreeLevel} setDegreeLevel={setDegreeLevel} year={year} setYear={setYear} selectedSkills={selectedSkills} toggleSkill={toggleSkill} />;
      case 2: return <StepSocialMedia linkedin={linkedin} setLinkedin={setLinkedin} twitter={twitter} setTwitter={setTwitter} github={github} setGithub={setGithub} />;
      case 3: return <StepNPTELCerts nptelCourse={nptelCourse} setNptelCourse={setNptelCourse} />;
      case 4: return <StepReview firstName={firstName} lastName={lastName} email={email} selectedSkills={selectedSkills} linkedin={linkedin} twitter={twitter} github={github} nptelCourse={nptelCourse} idUploaded={idUploaded} />;
      default: return null;
    }
  };

  const lastStep = steps.length - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar: back + logo */}
      <div className="flex items-center justify-between px-6 pt-6">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>
        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-accent" />
          <span className="font-bold text-lg">ONTIC</span>
        </div>
      </div>

      {/* Step indicator centered */}
      <div className="w-full max-w-2xl mx-auto px-6 pt-6">
        <StepIndicator currentStep={current + 1} />
      </div>

      {/* Form content */}
      <div className="flex-1 flex items-start justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-md py-6">
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
            {current === lastStep ? (
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1" onClick={() => navigate("/dashboard", { replace: true })}>
                Complete Verification <ShieldCheck className="h-4 w-4" />
              </Button>
            ) : (
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1" onClick={next} disabled={!canContinue}>
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
