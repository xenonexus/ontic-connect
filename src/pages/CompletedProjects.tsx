import { CheckCircle2 } from "lucide-react";

const completedProjects = [
  { name: "Blockchain Voting App", date: "Jan 2026" },
  { name: "Campus IoT Prototype", date: "Dec 2025" },
];

const CompletedProjects = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Completed Projects</h1>
      <p className="text-muted-foreground">Projects you've successfully finished.</p>
      <div className="grid gap-4 max-w-2xl">
        {completedProjects.map((p) => (
          <div key={p.name} className="glass-card p-5 flex items-center gap-4">
            <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
            <div>
              <p className="font-medium text-sm">{p.name}</p>
              <p className="text-xs text-muted-foreground">Completed {p.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;
