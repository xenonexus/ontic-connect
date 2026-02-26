import { useState } from "react";
import { Search, Filter, Rocket, Users, MapPin, ShieldCheck, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import VerifiedBadge from "@/components/VerifiedBadge";

const domains = ["All", "Machine Learning", "Web Dev", "Blockchain", "IoT", "Cybersecurity", "Data Science", "Mobile"];

const projects = [
  {
    title: "Smart Attendance System using Face Recognition",
    domain: "Machine Learning",
    college: "IIT Bombay",
    poster: "Arjun P.",
    people: 2,
    desc: "Building a real-time attendance system using deep learning-based face recognition with anti-spoofing.",
    skills: ["Python", "TensorFlow", "OpenCV"],
    verified: true,
  },
  {
    title: "Decentralized Academic Credential Verification",
    domain: "Blockchain",
    college: "BITS Pilani",
    poster: "Priya S.",
    people: 3,
    desc: "A blockchain-based platform for universities to issue and verify academic credentials with zero-knowledge proofs.",
    skills: ["Solidity", "React", "Node.js"],
    verified: true,
  },
  {
    title: "Campus IoT Energy Monitor",
    domain: "IoT",
    college: "NIT Trichy",
    poster: "Rahul K.",
    people: 1,
    desc: "IoT sensor network to monitor and optimize energy usage across campus buildings with ML predictions.",
    skills: ["Arduino", "Python", "MQTT"],
    verified: true,
  },
  {
    title: "AI Mental Health Chatbot for Students",
    domain: "Machine Learning",
    college: "IIT Madras",
    poster: "Sneha R.",
    people: 2,
    desc: "Conversational AI providing mental health support, mood tracking, and crisis detection for university students.",
    skills: ["NLP", "React", "FastAPI"],
    verified: true,
  },
  {
    title: "Collaborative Code Review Platform",
    domain: "Web Dev",
    college: "IIIT Hyderabad",
    poster: "Vikram D.",
    people: 2,
    desc: "GitHub-integrated platform for peer code reviews with AI-powered suggestions and gamified learning.",
    skills: ["React", "TypeScript", "Go"],
    verified: true,
  },
  {
    title: "Network Intrusion Detection using ML",
    domain: "Cybersecurity",
    college: "IIT Kanpur",
    poster: "Ananya M.",
    people: 1,
    desc: "Real-time network traffic analysis using ensemble ML models to detect and classify intrusion attempts.",
    skills: ["Python", "Scikit-learn", "Wireshark"],
    verified: true,
  },
];

const Marketplace = () => {
  const [activeDomain, setActiveDomain] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter(
    (p) =>
      (activeDomain === "All" || p.domain === activeDomain) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) || p.domain.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Ideasphere</h1>
        <p className="text-muted-foreground mt-1">Discover projects from verified students across universities.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg bg-muted/50 py-2.5 pl-10 pr-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-accent/40"
            placeholder="Search projects..."
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDomain(d)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeDomain === d
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-muted/50 text-muted-foreground border-border hover:border-accent/40"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <div key={p.title} className="glass-card p-5 flex flex-col hover:border-accent/20 transition-all group">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-md">{p.domain}</span>
              {p.verified && <VerifiedBadge size="sm" />}
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.skills.map((s) => (
                <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-md text-muted-foreground">{s}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <GraduationCap className="h-3 w-3" />
                <span>{p.poster} · {p.college}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-accent font-medium">
                <Users className="h-3 w-3" /> {p.people} needed
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
