import { OptionCard } from '@/shared/ui/option-card'
import { Car, Check, Disc, Palette, Settings, Zap } from 'lucide-react'
import React from 'react'

export interface ConfigState {
	bodyType: string
	engine: string
	color: string
	wheels: string
	features: string[]
}

interface ConfiguratorPanelProps {
	step: number
	config: ConfigState
	onUpdate: (key: keyof ConfigState | 'feature', value: string) => void
}

export const ConfiguratorPanel: React.FC<ConfiguratorPanelProps> = ({
	step,
	config,
	onUpdate,
}) => {
	return (
		<div className='flex-1 p-6 md:p-10 overflow-y-auto animate-in fade-in duration-500'>
			{step === 0 && (
				<>
					<h2 className='text-2xl font-bold text-slate-800 mb-6'>Select body type</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						{[
							{ id: 'Sedan', sub: 'Comfort and style' },
							{ id: 'SUV', sub: 'Off-road capability' },
							{ id: 'Sport', sub: 'Performance' },
							{ id: 'Minivan', sub: 'For a large family' },
						].map(i => (
							<OptionCard
								key={i.id}
								icon={Car}
								title={i.id}
								subtitle={i.sub}
								active={config.bodyType === i.id}
								onClick={() => onUpdate('bodyType', i.id)}
							/>
						))}
					</div>
				</>
			)}

			{step === 1 && (
				<>
					<h2 className='text-2xl font-bold text-slate-800 mb-6'>
						Technical specifications
					</h2>

					<div className='mb-8'>
						<p className='text-xs font-bold text-slate-400 uppercase tracking-wider mb-3'>
							Engine
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
							{['V4 Eco', 'V6 Turbo', 'Electric'].map(e => (
								<OptionCard
									key={e}
									icon={Settings}
									title={e}
									active={config.engine === e}
									onClick={() => onUpdate('engine', e)}
								/>
							))}
						</div>
					</div>

					<div>
						<p className='text-xs font-bold text-slate-400 uppercase tracking-wider mb-3'>
							Wheel discs
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
							{['R16 Steel', 'R18 Alloy', 'R20 Carbon'].map(w => (
								<OptionCard
									key={w}
									icon={Disc}
									title={w}
									active={config.wheels === w}
									onClick={() => onUpdate('wheels', w)}
								/>
							))}
						</div>
					</div>
				</>
			)}

			{step === 2 && (
				<>
					<h2 className='text-2xl font-bold text-slate-800 mb-6'>Exterior color</h2>
					<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
						{[
							{ name: 'White', tw: 'bg-slate-50' },
							{ name: 'Black', tw: 'bg-slate-900 text-white' },
							{ name: 'Red', tw: 'bg-red-600 text-white' },
							{ name: 'Blue', tw: 'bg-blue-600 text-white' },
						].map(c => (
							<div
								key={c.name}
								onClick={() => onUpdate('color', c.name)}
								className={`
                  h-40 rounded-2xl cursor-pointer border-2 flex flex-col items-center justify-center gap-2 transition-all hover:scale-105
                  ${c.tw}
                  ${
										config.color === c.name
											? 'ring-4 ring-blue-500 ring-offset-2 border-transparent'
											: 'border-transparent'
									}
                `}
							>
								<Palette className='opacity-80' />
								<span className='font-bold text-sm'>{c.name}</span>
							</div>
						))}
					</div>
				</>
			)}

			{step === 3 && (
				<>
					<h2 className='text-2xl font-bold text-slate-800 mb-6'>Additional options</h2>
					<div className='space-y-3'>
						{[
							{
								id: 'Autopilot',
								name: 'Autopilot Level 2',
								desc: 'Adaptive cruise control',
							},
							{ id: 'Sunroof', name: 'Panoramic roof', desc: 'Full view' },
							{ id: 'Premium Audio', name: '3D audio system', desc: '12 speakers' },
							{
								id: 'Winter Pack',
								name: 'Winter Pack',
								desc: 'Heated steering wheel and seats',
							},
						].map(feat => {
							const isActive = config.features.includes(feat.name)
							return (
								<div
									key={feat.id}
									onClick={() => onUpdate('feature', feat.name)}
									className={`
                    flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${
											isActive
												? 'border-green-500 bg-green-50/50'
												: 'border-slate-100 hover:border-slate-300'
										}
                  `}
								>
									<div className='flex items-center gap-4'>
										<div
											className={`
                      w-6 h-6 rounded flex items-center justify-center transition-colors
                      ${
												isActive
													? 'bg-green-500 text-white'
													: 'bg-slate-200 text-slate-400'
											}
                    `}
										>
											<Check size={14} />
										</div>
										<div>
											<h4 className='font-bold text-slate-700'>{feat.name}</h4>
											<p className='text-xs text-slate-400'>{feat.desc}</p>
										</div>
									</div>
									{isActive && <Zap size={18} className='text-green-500' />}
								</div>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}
