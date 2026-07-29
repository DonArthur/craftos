import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-background to-blue-50/30 dark:to-blue-950/20 overflow-hidden">
      
      {/* Background decoration for the glass effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <main className="w-full max-w-md p-6">
        {/* The Login form will render inside this Outlet */}
        <Outlet />
      </main>
      
    </div>
  );
}