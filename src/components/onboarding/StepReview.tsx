import { User, ShieldCheck, Check } from "lucide-react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  selectedSkills: string[];
  linkedin: string;
  twitter: string;
  github: string;
}

const StepReview = ({ firstName, lastName, email, selectedSkills, linkedin, twitter, github }: Props) => {
  const name = `${firstName || "—"} ${lastName || "—"}`;
  const items = [
    { label: "Email verified", done: !!email },
    { label: "LinkedIn connected", done: !!linkedin },
    { label: "X connected", done: !!twitter },
    { label: "GitHub connected", done: !!github },
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
            <User className="h-6 w-6 text-accent" />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{email || "—"}</p>
          </div>
          <span className="trust-badge ml-auto">
            <ShieldCheck className="h-3 w-3" /> Verified
          </span>
        </div>
        {selectedSkills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
            {selectedSkills.slice(0, 6).map((s) => (
              <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-md text-muted-foreground">{s}</span>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-2 text-sm">
        {items.map((item) => (
          <div key={item.label} className={`flex items-center gap-2 ${item.done ? "text-success" : "text-muted-foreground"}`}>
            <Check className="h-4 w-4" />
            <span className="text-foreground">{item.label}</span>
            {!item.done && <span className="text-xs">(not provided)</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepReview;
