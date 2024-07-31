import { AdvancedLanguageProvider } from "./components/AdvancedLanguageContext"
import LanguageRegionSwitcher from "./components/LanguageRegionSwitcher"
import LocalizedContent from "./components/LocalizedContent"


function App() {

  return (
    <>
      <AdvancedLanguageProvider>
        <LanguageRegionSwitcher />
        <LocalizedContent />
      </AdvancedLanguageProvider>
    </>
  )
}

export default App
