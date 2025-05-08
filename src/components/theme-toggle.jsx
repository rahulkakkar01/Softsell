import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="default" // Changed from "icon" to "default"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="p-2.5 rounded-full" // Added padding and rounded-full for a circular button
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" /> // Increased icon size from 1.2rem to 5
      ) : (
        <Sun className="h-5 w-5" /> // Increased icon size from 1.2rem to 5
      )}
      <span className="ml-2 hidden md:inline">
        {theme === "light" ? "Dark" : "Light"} 
      </span>
    </Button>
  )
}