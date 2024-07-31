import { useContext } from "react";
import { AdvancedLanguageContext } from "./AdvancedLanguageContext";

const LanguageRegionSwitcher = () => {
    const { lang, reg, changeLang, changeReg } = useContext(AdvancedLanguageContext);

    return (
        <div id="options">
            <h2>Idioma Atual: {lang}</h2>
            <h2>Região Atual: {reg}</h2>
            <div>
                <label>Mudar Idioma: </label>
                <select onChange={(event) => changeLang(event.target.value)} value={lang}>
                    <option value={'português'}>Português-br</option>
                    <option value={'inglês'}>English</option>
                    <option value={'francês'}>French</option>
                    <option value={'espanhol'}>Spanish</option>
                    <option value={'alemão'}>German</option>
                    <option value={'italiano'}>Italian</option>
                    <option value={'japonês'}>Japanese</option>
                    <option value={'chinês'}>Chinese</option>
                    <option value={'coreano'}>Korean</option>
                </select>
            </div>
            <div>
                <label>Mudar Região: </label>
                <select onChange={(event) => changeReg(event.target.value)} value={reg}>
                    <option value={'BRASIL'}>Brasil</option>
                    <option value={'ESTADOS UNIDOS'}>United States</option>
                    <option value={'FRANÇA'}>France</option>
                    <option value={'ESPANHA'}>Spain</option>
                    <option value={'ALEMANHA'}>Germany</option>
                    <option value={'ITÁLIA'}>Italy</option>
                    <option value={'JAPÃO'}>Japan</option>
                    <option value={'CHINA'}>China</option>
                    <option value={'CORÉIA DO SUL'}>Korea</option>
                </select>
            </div>
        </div>
    )
}

export default LanguageRegionSwitcher