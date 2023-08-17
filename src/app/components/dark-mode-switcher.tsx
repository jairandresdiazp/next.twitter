'use client'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className={'w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 text-default-500'}
      onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}