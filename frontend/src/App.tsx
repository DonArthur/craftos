import { useTheme } from './app/providers/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="p-4 bg-background text-foreground">
        <p>Current theme: {theme}</p>
        <button className='px-4 py-2 mt-2 bg-blue-500 text-white rounded-md' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
