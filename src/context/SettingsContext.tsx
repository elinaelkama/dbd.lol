import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

type Settings = {
	showPerkDescription: boolean
	showCharacter: boolean
	showCharacterBio: boolean
	role: string
}

type SettingsContextContent = Settings & {
	setShowPerkDescription: (value: boolean) => void
	setShowCharacter: (value: boolean) => void
	setShowCharacterBio: (value: boolean) => void
	setRole: (role: string) => void
}

type Props = {
	children: ReactNode
}

const savedSettings = JSON.parse(localStorage.getItem('settings') ?? '{}')

const initialState: SettingsContextContent = {
	showPerkDescription: savedSettings.showPerkDescription ?? false,
	setShowPerkDescription: () => undefined,
	showCharacter: savedSettings.showCharacter ?? false,
	setShowCharacter: () => undefined,
	showCharacterBio: savedSettings.showCharacterBio ?? false,
	setShowCharacterBio: () => undefined,
	role: savedSettings.role ?? 'survivor',
	setRole: () => undefined,
}

export const SettingsContext = createContext(initialState)

export const SettingsProvider = ({ children }: Props) => {
	const [settings, setSettings] = useState(initialState)

	const setShowPerkDescription = (value: boolean) => {
		setSettings(prev => ({ ...prev, showPerkDescription: value }))
		localStorage.setItem('settings', JSON.stringify({ ...settings, showPerkDescription: value }))
	}

	const setShowCharacter = (value: boolean) => {
		setSettings(prev => ({ ...prev, showCharacter: value }))
		localStorage.setItem('settings', JSON.stringify({ ...settings, showCharacter: value }))
	}

	const setShowCharacterBio = (value: boolean) => {
		setSettings(prev => ({ ...prev, showCharacterBio: value }))
		localStorage.setItem('settings', JSON.stringify({ ...settings, showCharacterBio: value }))
	}

	const setRole = (role: string) => {
		setSettings(prev => ({ ...prev, role }))
		localStorage.setItem('settings', JSON.stringify({ ...settings, role }))
	}

	return (
		<SettingsContext.Provider
			value={{
				...settings,
				setShowPerkDescription,
				setShowCharacter,
				setShowCharacterBio,
				setRole,
			}}
		>
			{children}
		</SettingsContext.Provider>
	)
}
