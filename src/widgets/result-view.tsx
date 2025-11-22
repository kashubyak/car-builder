import { CarProduct } from '@/entities/car/car-builder'
import { Button } from '@/shared/ui/button'
import { RotateCcw, ShieldCheck } from 'lucide-react'
import React from 'react'

interface ResultViewProps {
	car: CarProduct | null
	onRestart: () => void
}

export const ResultView: React.FC<ResultViewProps> = ({ car, onRestart }) => {
	const info = car ? car.getInfo() : null
	if (!info) return null

	return (
		<div className='flex-1 flex flex-col items-center justify-center p-8 animate-in zoom-in duration-500'>
			<div className='w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-100'>
				<ShieldCheck size={48} />
			</div>

			<h2 className='text-3xl font-bold text-slate-800 mb-2'>Car is ready!</h2>
			<p className='text-slate-500 text-center max-w-sm mb-8'>
				Object successfully created by class{' '}
				<code className='bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-bold'>
					CarBuilder
				</code>
			</p>

			<div className='w-full max-w-md bg-slate-900 text-slate-300 rounded-xl overflow-hidden shadow-2xl'>
				<div className='bg-slate-800 p-3 border-b border-slate-700 flex justify-between items-center'>
					<span className='text-xs font-mono text-blue-400'>OUTPUT.JSON</span>
					<div className='flex gap-1.5'>
						<div className='w-2.5 h-2.5 rounded-full bg-red-500' />
						<div className='w-2.5 h-2.5 rounded-full bg-yellow-500' />
						<div className='w-2.5 h-2.5 rounded-full bg-green-500' />
					</div>
				</div>
				<pre className='p-6 font-mono text-sm overflow-x-auto'>
					{JSON.stringify(info, null, 2)}
				</pre>
			</div>

			<div className='mt-8 w-full max-w-xs'>
				<Button variant='dark' onClick={onRestart} className='w-full'>
					<RotateCcw size={18} />
					Build another car
				</Button>
			</div>
		</div>
	)
}
