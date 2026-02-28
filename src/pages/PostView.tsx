import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Trophy, User, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import VerifiedBadge from "@/components/VerifiedBadge";

interface PostData {
  title: string;
  projectType: string;
  competitionName?: string;
  domain: string;
  description: string;
  creator: string;
  institute: string;
  teamMembers?: { role: string; count: string }[];
  startDate?: string;
  endDate?: string;
  skills?: string[];
  verified?: boolean;
}

const PostView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const post: PostData = location.state?.post ?? {
    title: "Untitled Project",
    projectType: "personal",
    domain: "Other",
    description: "No description provided.",
    creator: "Unknown",
    institute: "Unknown",
  };

  const isCompetitive = post.projectType === "competitive";

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Back */}
      <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="gap-1.5 -ml-2">
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      {/* Header */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold leading-tight">{post.title}</h1>
          {post.verified && <VerifiedBadge size="sm" />}
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-md">
            <Globe className="h-3 w-3" /> {post.domain}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md ${
            isCompetitive ? "bg-highlight/10 text-highlight" : "bg-muted text-muted-foreground"
          }`}>
            {isCompetitive ? <Trophy className="h-3 w-3" /> : <User className="h-3 w-3" />}
            {isCompetitive ? "Competitive" : "Personal Project"}
          </span>
        </div>

        {/* Competition name */}
        {isCompetitive && post.competitionName && (
          <div className="glass-card p-3">
            <p className="text-xs text-muted-foreground">Competition</p>
            <p className="font-medium text-sm">{post.competitionName}</p>
          </div>
        )}

        {/* Creator info */}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <div className="h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center">
            <User className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium">{post.creator}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <GraduationCap className="h-3 w-3" /> {post.institute}
            </p>
          </div>
        </div>
      </div>

      {/* Team & Timeline */}
      {(post.teamMembers?.length || post.startDate) && (
        <div className="grid grid-cols-2 gap-4">
          {post.teamMembers && post.teamMembers.length > 0 && (
            <div className="glass-card p-4 space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Team Roles Needed</p>
              {post.teamMembers.map((m, i) => (
                <p key={i} className="text-sm font-medium">{m.role} × {m.count}</p>
              ))}
            </div>
          )}
          {post.startDate && (
            <div className="glass-card p-4 space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Timeline</p>
              <p className="text-sm">{post.startDate} — {post.endDate || "TBD"}</p>
            </div>
          )}
        </div>
      )}

      {/* Skills */}
      {post.skills && post.skills.length > 0 && (
        <div className="glass-card p-4">
          <p className="text-xs text-muted-foreground font-medium mb-2">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {post.skills.map((s) => (
              <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-md text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>
      )}

      {/* Description with blur gate */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold text-lg">Project Description</h2>
        <div className="relative">
          <div className={`text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap transition-all duration-500 ${
            !accepted ? "blur-md select-none pointer-events-none" : ""
          }`}>
            {post.description}
          </div>
          {!accepted && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card p-4 flex items-center gap-2 border-accent/20 shadow-lg">
                <Lock className="h-4 w-4 text-accent shrink-0" />
                <p className="text-xs text-muted-foreground">Accept the terms below to view the full description.</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-start gap-2 pt-2 border-t border-border">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={() => { if (!accepted) setAccepted(true); }}
            className="mt-0.5"
            disabled={accepted}
          />
          <Label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
            I accept the <span className="text-accent font-medium">Terms and Conditions</span> and the{" "}
            <span className="text-accent font-medium">Privacy Policy</span>.
          </Label>
        </div>
      </div>
    </div>
  );
};

export default PostView;
