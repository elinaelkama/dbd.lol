export type PerkCollection = {
	[key: string]: {
		name: string
		description: string
		role: string
		character: string | null
		tunables: object
		image: string
	}
}
