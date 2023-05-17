export type PerksResponse = {
	[key: string]: {
		categories: string[] | null
		name: string
		description: string
		role: string
		character: number | null
		tunables: string[][] | object
		modifier: string
		teachable: number
		image: string
	}
}
