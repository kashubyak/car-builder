import { Check } from 'lucide-react'
import React from 'react'

interface OptionCardProps {
	icon: React.ElementType
	title: string
	subtitle?: string
	active: boolean
	onClick: () => void
	colorClass?: string
}

export const OptionCard: React.FC<OptionCardProps> = ({
	icon: Icon,
	title,
	subtitle,
	active,
	onClick,
	colorClass,
}) => (
	<div
		onClick={onClick}
		className={`
      cursor-pointer relative overflow-hidden rounded-xl border-2 transition-all duration-300 p-4 
      flex flex-col items-center text-center gap-3 group
      ${
				active
					? 'border-blue-600 bg-blue-50/50 shadow-md transform scale-[1.02]'
					: 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm'
			}
      ${colorClass ? colorClass : ''}
    `}
	>
		<div
			className={`
      p-3 rounded-full transition-colors
      ${
				active
					? 'bg-blue-100 text-blue-600'
					: 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-400'
			}
    `}
		>
			<Icon size={24} />
		</div>
		<div>
			<h3 className='font-bold text-slate-700 text-sm'>{title}</h3>
			{subtitle && <p className='text-xs text-slate-400 mt-1 font-medium'>{subtitle}</p>}
		</div>
		{active && (
			<div className='absolute top-2 right-2 animate-in zoom-in duration-200'>
				<div className='bg-blue-600 text-white rounded-full p-0.5'>
					<Check size={12} />
				</div>
			</div>
		)}
	</div>
)
