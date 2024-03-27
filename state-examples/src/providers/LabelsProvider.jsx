import React, { useContext, createContext } from "react"

const APP_LABELS = {
  en: {
    greeting: "Hello!",
  },
  de: {
    greeting: "Guter tag!",
  },
}

const LabelsContext = createContext()

export const LabelsProvider = ({ language = "en", children }) => {
  const labels = APP_LABELS[language]

  return (
    <LabelsContext.Provider value={{ language, labels }}>
      {children}
    </LabelsContext.Provider>
  )
}

export const useLabels = () => useContext(LabelsContext).labels
