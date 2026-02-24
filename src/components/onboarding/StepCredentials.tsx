import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  username: string;
  setUsername: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
}

const StepCredentials = ({ username, setUsername, password, setPassword }: Props) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label>Username</Label>
      <Input
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="text-xs text-muted-foreground">This will be your unique identifier on the platform.</p>
    </div>
    <div className="space-y-2">
      <Label>Password</Label>
      <Input
        type="password"
        placeholder="Create a strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="text-xs text-muted-foreground">Must be at least 8 characters long.</p>
    </div>
  </div>
);

export default StepCredentials;
