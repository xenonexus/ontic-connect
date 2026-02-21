import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  email: string;
  setEmail: (v: string) => void;
}

const StepUniversityEmail = ({ email, setEmail }: Props) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <Label>University Email</Label>
      <Input
        placeholder="you@university.edu"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="text-xs text-muted-foreground">We'll send a verification link to your .edu email.</p>
    </div>
  </div>
);

export default StepUniversityEmail;
