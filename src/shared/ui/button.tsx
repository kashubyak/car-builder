import React from 'react'

interface ButtonProps {
	children: React.ReactNode
	onClick: () => void
	variant?: 'primary' | 'success' | 'secondary' | 'dark'
	disabled?: boolean
	className?: string
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = 'primary',
	className = '',
	disabled = false,
}) => {
	const baseStyle =
		'px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95'

	const variants = {
		primary:
			'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed',
		success: 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-200',
		secondary:
			'bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:text-slate-300 disabled:bg-slate-50',
		dark: 'bg-slate-900 text-white hover:bg-slate-800',
	}

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${baseStyle} ${variants[variant]} ${className}`}
		>
			{children}
		</button>
	)
}
