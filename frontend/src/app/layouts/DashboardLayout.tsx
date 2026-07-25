import { Outlet } from 'react-router-dom'
import ThemeToggle from '@/shared/components/ThemeToggle'
import { User } from 'lucide-react'

const DashboardLayout = () => {
  return (
    <div className='relative flex min-h-screen w-full bg-gradient-to-br from-background to-blue-50/30 dark:to-blue-950/20 overflow-hidden'>
        {/* 1. Background decoration (the visual interest behind the glass) */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none'>
            <div className='absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]'></div>
            <div className='absolute top-[60%] -right-[5%] w-[30%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]'></div>
        </div>

        {/* 2. Sidebar */}
        <aside className='hidden md:flex w-64 flex-col border-r border-border/50 bg-background/50 backdrop-blur-xl shadow-sm'>
            <div className='flex h-16 items-center px-6 border-b border-border/50'>
                <div className='flex items-center gap-2 text-primary'>
                    <span className='text-xl font-bold tracking-tight'>CraftOS</span>
                </div>
            </div>

            <nav className="flex-1 space-y-1 p-4">
                {/* Navigation Links Mock */}
                <div className="px-3 py-2 rounded-md bg-primary/10 text-primary font-medium cursor-pointer">
                    Dashboard
                </div>
                <div className="px-3 py-2 rounded-md text-muted-foreground hover:bg-foreground/5 hover:text-foreground cursor-pointer transition-colors">
                    Tasks
                </div>
                <div className="px-3 py-2 rounded-md text-muted-foreground hover:bg-foreground/5 hover:text-foreground cursor-pointer transition-colors">
                    Projects
                </div>
            </nav>
        </aside>

        <main className='flex-1 flex flex-col min-w-0'>
            <header className='sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/50 bg-background/50 backdrop-blur-xl px-6'>
                <div className='text-sm text-muted-foreground'>
                    Good afternoon! You have 4 tasks due today.
                </div>
                <div className='flex items-center gap-4'>
                    <ThemeToggle />
                    {/* Mock avatar */}
                    <div className='h-8 w-8 rounded-full bg-primary/20 border flex items-center justify-center p-1 cursor-pointer'>
                        <User />
                    </div>
                </div>
            </header>

            {/* Dashboard Canvas (Where your Outlets render) */}
            <div className="flex-1 overflow-auto p-6">
            <div className="mx-auto max-w-5xl space-y-6">
                
                {/* Mocking the actual content area where you'll inject your feature hooks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Main Task List Area - More opaque for readability */}
                <div className="md:col-span-2 rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-foreground">Today's Focus</h2>
                    <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-border bg-background/80 flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full border-2 border-primary" />
                        <span className="text-sm">Set up Dexie.js offline queue</span>
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-background/80 flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full border-2 border-primary" />
                        <span className="text-sm">Design shadcn/ui task cards</span>
                    </div>
                    </div>
                </div>

                {/* Sidebar Widget Area */}
                <div className="rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-foreground">Activity</h2>
                    <div className="text-sm text-muted-foreground">
                    Sync status: <span className="text-green-500 font-medium">Online</span>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default DashboardLayout