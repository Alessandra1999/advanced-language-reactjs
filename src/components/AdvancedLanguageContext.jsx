import { createContext, useState } from "react";

export const AdvancedLanguageContext = createContext();

export const AdvancedLanguageProvider = (props) => {
    const [lang, setLang] = useState('português');
    const [reg, setReg] = useState('BRASIL');

    const changeLang = (newLang) => {
        setLang(newLang);
    };

    const changeReg = (newReg) => {
        setReg(newReg);
    }

    return (
        <AdvancedLanguageContext.Provider value={{ lang, reg, changeLang, changeReg }}>
            {props.children}
        </AdvancedLanguageContext.Provider>
    )
}