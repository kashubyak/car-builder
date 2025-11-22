export interface CarSpecs {
	body: string
	engine: string
	wheels: string
}

export interface CarVisual {
	color: string
}

export interface CarInfo {
	specification: CarSpecs
	visual: CarVisual
	addons: string[]
}

export class CarProduct {
	public bodyType: string = ''
	public engine: string = ''
	public color: string = ''
	public wheels: string = ''
	public features: string[] = []

	getInfo(): CarInfo {
		return {
			specification: {
				body: this.bodyType,
				engine: this.engine,
				wheels: this.wheels,
			},
			visual: {
				color: this.color,
			},
			addons: this.features.length > 0 ? this.features : ['Базова комплектація'],
		}
	}
}

export class CarBuilder {
	private car: CarProduct

	constructor() {
		this.car = new CarProduct()
		this.reset()
	}

	reset(): this {
		this.car = new CarProduct()
		return this
	}

	setBodyType(type: string): this {
		this.car.bodyType = type
		return this
	}

	setEngine(engine: string): this {
		this.car.engine = engine
		return this
	}

	setColor(color: string): this {
		this.car.color = color
		return this
	}

	setWheels(wheels: string): this {
		this.car.wheels = wheels
		return this
	}

	addFeature(feature: string): this {
		if (!this.car.features.includes(feature)) {
			this.car.features.push(feature)
		}
		return this
	}

	build(): CarProduct {
		const result = this.car
		this.reset()
		return result
	}
}
