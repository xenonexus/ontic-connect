import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Store, Settings, LogOut, CheckCircle2,
  Lock, ShieldCheck, ChevronLeft, ChevronRight, Search, ArrowLeft,
  Inbox, PenSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import VerifiedBadge from "@/components/VerifiedBadge";

const mainNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: CheckCircle2, label: "Completed Projects", path: "/dashboard/completed" },
  { icon: Store, label: "Ideosphere", path: "/dashboard/ideosphere" },
  { icon: Inbox, label: "Inbox", path: "/dashboard/inbox" },
  { icon: PenSquare, label: "Create Post", path: "/dashboard/create-post" },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const renderNavButton = (item: typeof mainNavItems[0]) => {
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
  };

  const settingsActive = location.pathname === "/dashboard/settings";

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
          {mainNavItems.map(renderNavButton)}
        </nav>

        {/* Settings + User + Collapse */}
        <div className="p-3 border-t border-sidebar-border space-y-2">
          <button
            onClick={() => navigate("/dashboard/settings")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              settingsActive
                ? "bg-sidebar-accent text-sidebar-primary font-medium"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            }`}
          >
            <Settings className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Settings</span>}
          </button>
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
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
            </Button>
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
