import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyle =
    'px-6 py-3 rounded-xl font-medium transition'

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-800 to-cyan-800 hover:opacity-90 shadow-lg shadow-blue-500/20 text-white',

    outline:
  'border border-sky-200 bg-sky-50/80 text-sky-700 hover:bg-sky-100 hover:border-sky-300 shadow-sm',
  }

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}