import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/shared/components/ThemeToggle";
// Import icons from lucide-react as needed
import { LayoutDashboard, CheckSquare, Settings } from "lucide-react";

export function DefaultLayout() {
  return (
    <div className="relative flex min-h-screen w-full bg-gradient-to-br from-background to-blue-50/30 dark:to-blue-950/20 overflow-hidden">
      
      {/* Background Decoration (Glassmorphism canvas) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      {/* Main Sidebar (Fixed) */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border/50 bg-background/50 backdrop-blur-xl shadow-sm">
        <div className="flex h-16 items-center px-6 border-b border-border/50">
          <span className="text-xl font-bold tracking-tight text-primary">CraftOS</span>
        </div>
        
        <nav className="flex-1 space-y-1 p-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'}`}
          >
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </NavLink>
          
          <NavLink 
            to="/tasks" 
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'}`}
          >
            <CheckSquare className="h-4 w-4" /> Tasks
          </NavLink>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'}`}
          >
            <CheckSquare className="h-4 w-4" /> Projects
          </NavLink>

          <NavLink 
            to="/settings" 
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'}`}
          >
            <Settings className="h-4 w-4" /> Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Universal Top Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-end border-b border-border/50 bg-background/50 backdrop-blur-xl px-6">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30" /> {/* Avatar Mock */}
          </div>
        </header>

        {/* Dynamic Page Content (This is where the magic happens) */}
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-5xl">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}