import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/app/providers/ThemeProvider'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/50 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'
            aria-label='Toggle theme'
        >
            {
                theme === 'dark' ?
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 duration-500 transition-all dark:rotate-0 dark:scale-100 text-foreground' /> :
                <Sun className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 duration-500 transition-all dark:rotate-0 dark:scale-100 text-foreground' />
            }
        </button>
    )
}

export default ThemeToggle