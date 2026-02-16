import { FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  nptelCourse: string;
  setNptelCourse: (v: string) => void;
}

const StepNPTELCerts = ({ nptelCourse, setNptelCourse }: Props) => (
  <div className="space-y-4">
    <Label>NPTEL / Course Certificates</Label>
    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-accent/50 transition-colors cursor-pointer">
      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
      <p className="text-sm text-muted-foreground">Upload NPTEL or other course certificates</p>
    </div>
    <Input
      placeholder="NPTEL Course Name (e.g., Deep Learning - IIT Madras)"
      value={nptelCourse}
      onChange={(e) => setNptelCourse(e.target.value)}
    />
    <p className="text-xs text-muted-foreground">This step is optional. You can skip it and add certificates later.</p>
  </div>
);

export default StepNPTELCerts;
