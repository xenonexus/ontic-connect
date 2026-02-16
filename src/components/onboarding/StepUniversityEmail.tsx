import { CreditCard, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  email: string;
  setEmail: (v: string) => void;
  idUploaded: boolean;
  setIdUploaded: (v: boolean) => void;
}

const StepUniversityEmail = ({ email, setEmail, idUploaded, setIdUploaded }: Props) => (
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
    <div className="space-y-4">
      <Label>Student ID Card</Label>
      <div
        onClick={() => setIdUploaded(true)}
        className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors cursor-pointer ${
          idUploaded ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
        }`}
      >
        <CreditCard className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
        <p className="text-sm text-muted-foreground">
          {idUploaded ? "Student ID uploaded ✓" : "Drag & drop or click to upload"}
        </p>
        <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
      </div>
    </div>
  </div>
);

export default StepUniversityEmail;
