import { Linkedin, Twitter, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  linkedin: string; setLinkedin: (v: string) => void;
  twitter: string; setTwitter: (v: string) => void;
  github: string; setGithub: (v: string) => void;
}

const StepSocialMedia = ({ linkedin, setLinkedin, twitter, setTwitter, github, setGithub }: Props) => (
  <div className="space-y-5">
    <div className="space-y-2">
      <Label>LinkedIn <span className="text-destructive">*</span></Label>
      <div className="flex gap-2 items-center">
        <Linkedin className="h-5 w-5 text-muted-foreground shrink-0" />
        <Input placeholder="linkedin.com/in/your-profile" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
      </div>
      <p className="text-xs text-muted-foreground">LinkedIn is mandatory for profile verification.</p>
    </div>

    <div className="pt-4 border-t border-border space-y-2">
      <Label>X (Twitter) <span className="text-muted-foreground font-normal">(optional)</span></Label>
      <div className="flex gap-2 items-center">
        <Twitter className="h-5 w-5 text-muted-foreground shrink-0" />
        <Input placeholder="@your_handle" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
      </div>
    </div>

    <div className="pt-4 border-t border-border space-y-2">
      <Label>GitHub <span className="text-muted-foreground font-normal">(optional)</span></Label>
      <div className="flex gap-2 items-center">
        <Github className="h-5 w-5 text-muted-foreground shrink-0" />
        <Input placeholder="github.com/username" value={github} onChange={(e) => setGithub(e.target.value)} />
      </div>
    </div>
  </div>
);

export default StepSocialMedia;
