import { BookOpen, ShieldCheck, Award, ExternalLink, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VerifiedBadge from "@/components/VerifiedBadge";

const courses = [
  {
    name: "Deep Learning",
    provider: "NPTEL - IIT Madras",
    matchedProjects: 5,
    students: 23,
    skills: ["TensorFlow", "PyTorch", "CNN"],
  },
  {
    name: "Cloud Computing",
    provider: "NPTEL - IIT Kharagpur",
    matchedProjects: 3,
    students: 18,
    skills: ["AWS", "Docker", "Kubernetes"],
  },
  {
    name: "Data Structures & Algorithms",
    provider: "NPTEL - IIT Delhi",
    matchedProjects: 8,
    students: 45,
    skills: ["C++", "Python", "Problem Solving"],
  },
  {
    name: "Blockchain Architecture",
    provider: "NPTEL - IIT Kanpur",
    matchedProjects: 2,
    students: 12,
    skills: ["Solidity", "Ethereum", "Web3"],
  },
];

const verifiedStudents = [
  { name: "Priya S.", college: "BITS Pilani", courses: 3, badge: "Gold" },
  { name: "Rahul K.", college: "NIT Trichy", courses: 5, badge: "Platinum" },
  { name: "Sneha R.", college: "IIT Madras", courses: 4, badge: "Gold" },
  { name: "Vikram D.", college: "IIIT Hyderabad", courses: 2, badge: "Silver" },
];

const badgeColors: Record<string, string> = {
  Platinum: "bg-accent/10 text-accent border-accent/25",
  Gold: "bg-highlight/10 text-highlight border-highlight/25",
  Silver: "bg-muted text-muted-foreground border-border",
};

const NPTELConnect = () => (
  <div className="space-y-8">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <BookOpen className="h-5 w-5 text-accent" />
        <h1 className="text-2xl font-bold">NPTEL Connect</h1>
      </div>
      <p className="text-muted-foreground">Find project matches based on verified course certificates and skill verification.</p>
    </div>

    {/* Course-Based Matching */}
    <div>
      <h2 className="font-semibold text-lg mb-4">Course-Based Project Matching</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map((c) => (
          <div key={c.name} className="glass-card p-5 hover:border-accent/20 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{c.provider}</p>
              </div>
              <Award className="h-5 w-5 text-highlight" />
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {c.skills.map((s) => (
                <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-md text-muted-foreground">{s}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {c.students} verified</span>
                <span>{c.matchedProjects} projects</span>
              </div>
              <Button variant="ghost" size="sm" className="text-xs text-accent gap-1 h-7 px-2">
                View <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Verified learners */}
    <div>
      <h2 className="font-semibold text-lg mb-4">Top Verified Learners</h2>
      <div className="glass-card divide-y divide-border">
        {verifiedStudents.map((s) => (
          <div key={s.name} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold">
                {s.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{s.name}</span>
                  <VerifiedBadge size="sm" />
                </div>
                <p className="text-xs text-muted-foreground">{s.college}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${badgeColors[s.badge]}`}>
                {s.badge}
              </span>
              <span className="text-xs text-muted-foreground">{s.courses} certs</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default NPTELConnect;
