import { Activity, Check } from 'lucide-react'
import React from 'react'

interface HeaderProps {
	currentStep: number
	steps: { title: string }[]
}

export const Header: React.FC<HeaderProps> = ({ currentStep, steps }) => (
	<div className='bg-slate-900 text-white p-6 flex flex-col justify-between md:w-80 shrink-0'>
		<div>
			<div className='mb-8'>
				<div className='flex items-center gap-2 mb-1 text-blue-400'>
					<Activity size={20} />
					<span className='text-xs font-bold tracking-widest uppercase'>Car Builder</span>
				</div>
				<h1 className='text-2xl font-bold'>Course project</h1>
				<p className='text-slate-400 text-xs mt-2 opacity-70'>Builder</p>
			</div>

			<nav className='space-y-1'>
				{steps.map((step, idx) => (
					<div
						key={idx}
						className={`
              flex items-center gap-3 p-3 rounded-lg transition-all duration-300
              ${
								idx === currentStep
									? 'bg-slate-800 text-white shadow-inner'
									: 'text-slate-500'
							}
            `}
					>
						<div
							className={`
              w-6 h-6 rounded flex items-center justify-center text-xs font-bold border transition-colors
              ${
								idx === currentStep
									? 'border-blue-500 bg-blue-500 text-white'
									: idx < currentStep
									? 'border-green-500 bg-green-500 text-white'
									: 'border-slate-700 bg-slate-800'
							}
            `}
						>
							{idx < currentStep ? <Check size={12} /> : idx + 1}
						</div>
						<span
							className={`text-sm font-medium ${
								idx === currentStep ? 'text-blue-100' : ''
							}`}
						>
							{step.title}
						</span>
					</div>
				))}
			</nav>
		</div>
		<div className='mt-auto pt-6 border-t border-slate-800'>
			<div className='text-xs text-slate-500 font-mono'>
				STEP: {currentStep + 1} / {steps.length}
			</div>
		</div>
	</div>
)
