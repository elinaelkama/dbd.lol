import { createContext, ReactNode, useState } from "react";

type SettingsContextContent = {
  showPerkDescription: boolean;
  setShowPerkDescription: (value: boolean) => void;
  showCharacter: boolean;
  setShowCharacter: (value: boolean) => void;
  showCharacterBio: boolean;
  setShowCharacterBio: (value: boolean) => void;
};

type Props = {
  children: ReactNode;
};

const initialState: SettingsContextContent = {
  showPerkDescription: false,
  setShowPerkDescription: () => undefined,
  showCharacter: false,
  setShowCharacter: () => undefined,
  showCharacterBio: false,
  setShowCharacterBio: () => undefined,
};

export const SettingsContext = createContext(initialState);

export const SettingsProvider = ({ children }: Props) => {
  const [showPerkDescription, setShowPerkDescription] = useState(
    initialState.showPerkDescription
  );
  const [showCharacter, setShowCharacter] = useState(
    initialState.showCharacter
  );
  const [showCharacterBio, setShowCharacterBio] = useState(
    initialState.showCharacterBio
  );
  return (
    <SettingsContext.Provider
      value={{
        showPerkDescription,
        setShowPerkDescription,
        showCharacter,
        setShowCharacter,
        showCharacterBio,
        setShowCharacterBio,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
