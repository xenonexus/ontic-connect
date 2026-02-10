import { ShieldCheck } from "lucide-react";

interface VerifiedBadgeProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeClasses = {
  sm: "text-[10px] px-1.5 py-0.5 gap-0.5",
  md: "text-xs px-2 py-0.5 gap-1",
  lg: "text-sm px-2.5 py-1 gap-1.5",
};

const iconSize = { sm: 10, md: 12, lg: 14 };

const VerifiedBadge = ({ size = "md", label = "Verified" }: VerifiedBadgeProps) => (
  <span className={`trust-badge ${sizeClasses[size]}`}>
    <ShieldCheck size={iconSize[size]} />
    {label}
  </span>
);

export default VerifiedBadge;
