import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Rocket, Store, BookOpen, Settings, LogOut,
  Lock, ShieldCheck, ChevronLeft, ChevronRight, Bell, Search, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import VerifiedBadge from "@/components/VerifiedBadge";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Rocket, label: "Project Mutation", path: "/dashboard/mutation" },
  { icon: Store, label: "Marketplace", path: "/dashboard/marketplace" },
  { icon: BookOpen, label: "NPTEL Connect", path: "/dashboard/nptel" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className={`sidebar-gradient flex flex-col border-r border-sidebar-border transition-all duration-300 ${collapsed ? "w-16" : "w-60"}`}>
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 px-4 border-b border-sidebar-border">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary/20">
            <Lock className="h-4 w-4 text-sidebar-primary" />
          </div>
          {!collapsed && <span className="font-bold text-sidebar-accent-foreground tracking-tight">ONTIC</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User + Collapse */}
        <div className="p-3 border-t border-sidebar-border space-y-2">
          {!collapsed && (
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-primary text-sm font-semibold">AP</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-accent-foreground truncate">Arjun Patel</p>
                <p className="text-xs text-sidebar-muted truncate">IIT Bombay</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sidebar-muted hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50 transition-all text-xs"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <><ChevronLeft className="h-4 w-4" /> Collapse</>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                className="w-64 rounded-lg bg-muted/50 py-2 pl-10 pr-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-accent/40"
                placeholder="Search projects, people..."
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <VerifiedBadge />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-highlight" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold cursor-pointer">
              <User className="h-4 w-4" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
