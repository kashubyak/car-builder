'use client'

import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import { CarBuilder, CarProduct } from '../entities/car/car-builder'
import { Button } from '../shared/ui/button'
import { ConfigState, ConfiguratorPanel } from '../widgets/configurator'
import { Header } from '../widgets/header'
import { ResultView } from '../widgets/result-view'

export default function CarBuilderApp() {
	const [step, setStep] = useState<number>(0)
	const [finishedCar, setFinishedCar] = useState<CarProduct | null>(null)
	const [builder] = useState<CarBuilder>(new CarBuilder())
	const [config, setConfig] = useState<ConfigState>({
		bodyType: 'Sedan',
		engine: 'V4 Eco',
		color: 'White',
		wheels: 'R16 Steel',
		features: [],
	})

	const stepsData = [
		{ title: 'Body' },
		{ title: 'Engine and Wheels' },
		{ title: 'Color' },
		{ title: 'Options' },
		{ title: 'Result' },
	]

	const handleUpdate = (key: keyof ConfigState | 'feature', value: string) => {
		if (key === 'feature') {
			setConfig(prev => {
				const exists = prev.features.includes(value)
				return {
					...prev,
					features: exists
						? prev.features.filter(f => f !== value)
						: [...prev.features, value],
				}
			})
		} else {
			setConfig(prev => ({ ...prev, [key]: value }))
		}
	}

	const handleBuild = () => {
		builder.reset()

		builder
			.setBodyType(config.bodyType)
			.setEngine(config.engine)
			.setColor(config.color)
			.setWheels(config.wheels)

		config.features.forEach(f => builder.addFeature(f))

		const result = builder.build()
		setFinishedCar(result)
		setStep(4)
	}

	const handleReset = () => {
		setFinishedCar(null)
		setStep(0)
		setConfig({
			bodyType: 'Sedan',
			engine: 'V4 Eco',
			color: 'White',
			wheels: 'R16 Steel',
			features: [],
		})
	}

	return (
		<main className='min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans text-slate-800'>
			<div className='bg-white w-full max-w-5xl min-h-[600px] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row'>
				<Header currentStep={step} steps={stepsData} />

				<div className='flex-1 flex flex-col relative'>
					{step === 4 ? (
						<ResultView car={finishedCar} onRestart={handleReset} />
					) : (
						<ConfiguratorPanel step={step} config={config} onUpdate={handleUpdate} />
					)}

					{step < 4 && (
						<div className='p-6 border-t border-slate-100 bg-white flex justify-between items-center sticky bottom-0 z-10'>
							<Button
								variant='secondary'
								disabled={step === 0}
								onClick={() => setStep(s => s - 1)}
							>
								Back
							</Button>

							{step === 3 ? (
								<Button variant='success' onClick={handleBuild}>
									Finish Build <Check size={18} />
								</Button>
							) : (
								<Button onClick={() => setStep(s => s + 1)}>
									Next <ArrowRight size={18} />
								</Button>
							)}
						</div>
					)}
				</div>
			</div>
		</main>
	)
}
