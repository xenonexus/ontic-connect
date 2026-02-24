import { Camera, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const skillCategories = [
  {
    name: "Computer Science",
    skills: ["React", "Python", "Machine Learning", "Node.js", "Flutter", "Data Science", "DevOps", "UI/UX", "Blockchain", "IoT", "Cloud", "Cybersecurity"],
  },
  {
    name: "Mechanical Engineering",
    skills: ["Thermodynamics", "Fluid Mechanics", "Solid Mechanics", "CAD/CAM", "Robotics", "Heat Transfer", "Manufacturing", "Finite Element Analysis", "HVAC", "Mechatronics"],
  },
  {
    name: "Electrical Engineering",
    skills: ["Circuits", "Power Systems", "Electronics", "Signal Processing", "Control Systems", "Embedded Systems", "VLSI", "Renewable Energy", "Instrumentation", "Communication Systems"],
  },
];

const graduationYears = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"];


interface Props {
  firstName: string; setFirstName: (v: string) => void;
  lastName: string; setLastName: (v: string) => void;
  bio: string; setBio: (v: string) => void;
  birthday: Date | undefined; setBirthday: (v: Date | undefined) => void;
  university: string; setUniversity: (v: string) => void;
  program: string; setProgram: (v: string) => void;
  degreeLevel: string; setDegreeLevel: (v: string) => void;
  year: string; setYear: (v: string) => void;
  selectedSkills: string[]; toggleSkill: (s: string) => void;
}

const StepPersonalInfo = ({
  firstName, setFirstName, lastName, setLastName,
  bio, setBio, birthday, setBirthday,
  university, setUniversity, program, setProgram,
  degreeLevel, setDegreeLevel, year, setYear,
  selectedSkills, toggleSkill,
}: Props) => (
  <div className="space-y-6">
    {/* Profile Picture */}
    <div className="flex flex-col items-center gap-3">
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

    {/* Name & Bio */}
    <div className="grid grid-cols-2 gap-4">
      <div><Label>First Name</Label><Input placeholder="Arjun" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
      <div><Label>Last Name</Label><Input placeholder="Patel" value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
    </div>
    <div><Label>Bio</Label><Input placeholder="CS undergrad passionate about ML & open source" value={bio} onChange={(e) => setBio(e.target.value)} /></div>

    {/* Birthday */}
    <div className="space-y-1">
      <Label>Birthday</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !birthday && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {birthday ? format(birthday, "PPP") : <span>Pick your birthday</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={birthday}
            onSelect={setBirthday}
            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
    </div>

    {/* Degree Info */}
    <div className="pt-4 border-t border-border space-y-4">
      <p className="text-sm font-semibold text-foreground">Degree Information</p>
      <div><Label>University</Label><Input placeholder="IIT Bombay" value={university} onChange={(e) => setUniversity(e.target.value)} /></div>
      <div><Label>Program</Label><Input placeholder="B.Tech Computer Science" value={program} onChange={(e) => setProgram(e.target.value)} /></div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Degree Level</Label>
          <Select value={degreeLevel} onValueChange={(v) => { setDegreeLevel(v); setYear(""); }}>
            <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="UG">UG</SelectItem>
              <SelectItem value="Masters">Masters</SelectItem>
              <SelectItem value="PhD">PhD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Year of Graduation</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger>
            <SelectContent>
              {graduationYears.map((y) => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

    {/* Skills & Domains */}
    <div className="pt-4 border-t border-border space-y-4">
      <p className="text-sm font-semibold text-foreground">Skills & Domains</p>
      {skillCategories.map((cat) => (
        <div key={cat.name} className="space-y-2">
          <Label className="text-xs text-muted-foreground">{cat.name}</Label>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <button
                key={s}
                type="button"
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
      ))}
      <p className="text-xs text-muted-foreground">Select 1–6 skills to continue.</p>
    </div>
  </div>
);

export default StepPersonalInfo;
