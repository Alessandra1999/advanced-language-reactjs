import { useContext } from "react";
import { AdvancedLanguageContext } from "./AdvancedLanguageContext";
import moment from 'moment-timezone';

const LocalizedContent = () => {
    const { lang, reg } = useContext(AdvancedLanguageContext);

    const getLocalizedContent = () => {
        if (lang === 'português') {
            return 'O Studio Ghibli é um estúdio de animação japonês, sediado em Koganei, Tóquio. Fundado em 1985, o estúdio já produziu 23 longas de animação, sendo o primeiro O Castelo no Céu (1986) e o mais recente O Menino e a Garça (2023). O Studio Ghibli foi fundado em 1985 por Hayao Miyazaki, Isao Takahata, Toshio Suzuki e Yasuyoshi Tokuma, logo após o sucesso de Nausicaä do Vale do Vento, no ano anterior. O estúdio lançou seu primeiro filme, O Castelo no Céu, no ano seguinte. O logotipo da empresa é o Totoro, o personagem do filme Meu Amigo Totoro, lançado em 1988. Com exceção de sete produções, todos os filmes do estúdio foram dirigidos por Hayao Miyazaki e Isao Takahata. Toshio Suzuki, por sua vez, é o produtor da maioria deles. Em 2001, o Museu Ghibli, um museu dedicado as obras do estúdio, foi inaugurado.';
        } else if (lang === 'inglês') {
            return "Studio Ghibli is a Japanese animation studio based in Koganei, Tokyo. Founded in 1985, the studio has produced 23 animated features, the first being The Castle in the Sky (1986) and the most recent The Boy and the Crane (2023). Studio Ghibli was founded in 1985 by Hayao Miyazaki, Isao Takahata, Toshio Suzuki and Yasuyoshi Tokuma, shortly after the success of Nausicaä of the Valley of the Wind, the previous year. The studio released its first film, The Castle in the Sky, the following year. The company's logo is Totoro, the character from the film My Friend Totoro, released in 1988. With the exception of seven productions, all of the studio's films were directed by Hayao Miyazaki and Isao Takahata. Toshio Suzuki, in turn, is the producer of most of them. In 2001, the Ghibli Museum, a museum dedicated to the studio's works, opened.";
        } else if (lang === 'francês') {
            return "Le Studio Ghibli est un studio d'animation japonais basé à Koganei, Tokyo. Fondé en 1985, le studio a produit 23 longs métrages d'animation, le premier étant Le Château dans le ciel (1986) et le plus récent Le Garçon et la Grue (2023). Le Studio Ghibli a été fondé en 1985 par Hayao Miyazaki, Isao Takahata, Toshio Suzuki et Yasuyoshi Tokuma, peu après le succès de Nausicaä de la Vallée du Vent, l'année précédente. Le studio sort son premier film, Le Château dans le ciel, l'année suivante. Le logo de la société est Totoro, le personnage du film Mon ami Totoro, sorti en 1988. À l'exception de sept productions, tous les films du studio ont été réalisés par Hayao Miyazaki et Isao Takahata. Toshio Suzuki, quant à lui, est le producteur de la plupart d'entre eux. En 2001, le Musée Ghibli, un musée dédié aux œuvres du studio, ouvre ses portes.";
        } else if (lang === 'espanhol') {
            return "Studio Ghibli es un estudio de animación japonés con sede en Koganei, Tokio. Fundado en 1985, el estudio ha producido 23 largometrajes animados, siendo el primero El castillo en el cielo (1986) y el más reciente El niño y la grulla (2023). Studio Ghibli fue fundado en 1985 por Hayao Miyazaki, Isao Takahata, Toshio Suzuki y Yasuyoshi Tokuma, poco después del éxito de Nausicaä del Valle del Viento, el año anterior. El estudio estrenó su primera película, The Castle in the Sky, al año siguiente. El logo de la empresa es Totoro, el personaje de la película Mi amigo Totoro, estrenada en 1988. Con excepción de siete producciones, todas las películas del estudio fueron dirigidas por Hayao Miyazaki e Isao Takahata. Toshio Suzuki, a su vez, es el productor de la mayoría de ellos. En 2001 se inauguró el Museo Ghibli, un museo dedicado a las obras del estudio.";
        } else if (lang === 'alemão') {
            return "Studio Ghibli ist ein japanisches Animationsstudio mit Sitz in Koganei, Tokio. Das 1985 gegründete Studio hat 23 Zeichentrickfilme produziert, der erste war „Das Schloss im Himmel“ (1986) und der jüngste „Der Junge und der Kranich“ (2023). Studio Ghibli wurde 1985 von Hayao Miyazaki, Isao Takahata, Toshio Suzuki und Yasuyoshi Tokuma gegründet, kurz nach dem Erfolg von Nausicaä aus dem Tal des Windes im Jahr zuvor. Im folgenden Jahr veröffentlichte das Studio seinen ersten Film, The Castle in the Sky. Das Logo des Unternehmens ist Totoro, die Figur aus dem 1988 erschienenen Film Mein Freund Totoro. Mit Ausnahme von sieben Produktionen wurden bei allen Filmen des Studios Hayao Miyazaki und Isao Takahata Regie geführt. Toshio Suzuki wiederum ist der Produzent der meisten davon. Im Jahr 2001 wurde das Ghibli Museum eröffnet, ein Museum, das den Werken des Studios gewidmet ist.";
        } else if (lang === 'italiano') {
            return "Studio Ghibli è uno studio di animazione giapponese con sede a Koganei, Tokyo. Fondato nel 1985, lo studio ha prodotto 23 film d'animazione, il primo è stato Il castello nel cielo (1986) e il più recente Il ragazzo e la gru (2023). Lo Studio Ghibli è stato fondato nel 1985 da Hayao Miyazaki, Isao Takahata, Toshio Suzuki e Yasuyoshi Tokuma, poco dopo il successo di Nausicaä della Valle del Vento, l'anno precedente. Lo studio pubblicò il suo primo film, Il castello nel cielo, l'anno successivo. Il logo dell'azienda è Totoro, il personaggio del film Il mio amico Totoro, uscito nel 1988. Ad eccezione di sette produzioni, tutti i film dello studio sono stati diretti da Hayao Miyazaki e Isao Takahata. Toshio Suzuki, a sua volta, è il produttore della maggior parte di essi. Nel 2001 viene inaugurato il Museo Ghibli, museo dedicato alle opere dello studio.";
        } else if (lang === 'japonês') {
            return "スタジオジブリは、東京小金井市に拠点を置く日本のアニメーションスタジオです。 1985年に設立されたこのスタジオは、最初の『天空の城ラピュタ』（1986年）から最新作『少年と鶴』（2023年）まで、23本の長編アニメーションを制作してきた。スタジオジブリは、前年の『風の谷のナウシカ』の成功直後の1985年に、宮崎駿、高畑勲、鈴木敏夫、徳間康快によって設立された。翌年、スタジオは最初の映画『天空の城ラピュタ』を公開した。同社のロゴは、1988 年に公開された映画『ともだちトトロ』のキャラクター、トトロです。7 作品を除いて、このスタジオの映画はすべて宮崎駿と高畑勲の監督作品です。鈴木敏夫氏がそのほとんどのプロデューサーを務めています。 2001年にはジブリ作品を専門に展示する美術館「ジブリ美術館」が開館した。";
        } else if (lang === 'chinês') {
            return "吉卜力工作室是一家日本动画工作室，总部位于东京小金井。该工作室成立于 1985 年，已制作了 23 部动画长片，第一部是《天空之城》（1986 年），最新的是《男孩与鹤》（2023 年）。吉卜力工作室于 1985 年由宫崎骏、高畑勋、铃木敏夫和德间康嘉创立，紧随去年《风之谷》大获成功后不久。次年，该工作室发行了第一部电影《天空之城》。该公司的标志是龙猫，是 1988 年上映的电影《龙猫》中的角色。除了七部作品外，该工作室的所有电影均由宫崎骏和高畑勋执导。而铃木敏夫则是其中大部分作品的制片人。 2001年，专门展示工作室作品的吉卜力博物馆开幕。";
        } else if (lang === 'coreano') {
            return "스튜디오 지브리(Studio Ghibli)는 도쿄 코가네이에 본사를 둔 일본 애니메이션 스튜디오입니다. 1985년에 설립된 이 스튜디오는 23편의 애니메이션 장편을 제작했는데, 첫 작품은 천공의 성(1986)이고 가장 최근 작품은 소년과 학(2023)입니다. 스튜디오 지브리는 전년도 바람계곡의 나우시카의 성공 직후인 1985년 미야자키 하야오, 다카하타 이사오, 스즈키 도시오, 도쿠마 야스요시에 의해 설립되었습니다. 스튜디오는 이듬해 첫 번째 영화인 The Castle in the Sky를 개봉했습니다. 회사 로고는 1988년 개봉한 영화 내 친구 토토로의 캐릭터인 토토로입니다. 7개 작품을 제외하고 스튜디오의 모든 영화는 미야자키 하야오와 다카하타 이사오가 감독했습니다. 스즈키 도시오(Toshio Suzuki)가 대부분의 제작자입니다. 2001년에는 스튜디오의 작품을 전시하는 박물관인 지브리 미술관이 문을 열었습니다.";
        }
    }

    const getTimeZone = (reg) => {
        switch (reg) {
            case 'BRASIL':
                return 'America/Sao_Paulo';
            case 'ESTADOS UNIDOS':
                return 'America/New_York';
            case 'FRANÇA':
                return 'Europe/Paris';
            case 'ESPANHA':
                return 'Europe/Madrid';
            case 'ALEMANHA':
                return 'Europe/Berlin';
            case 'ITÁLIA':
                return 'Europe/Rome';
            case 'JAPÃO':
                return 'Asia/Tokyo';
            case 'CHINA':
                return 'Asia/Shanghai';
            case 'CORÉIA DO SUL':
                return 'Asia/Seoul';
        }
    }

    const currentTime = moment().tz(getTimeZone(reg)).format('DD/MM/YYYY, h:mm a');

    return (
        <div id="content">
            <h2>Data e hora atual: {currentTime}</h2>
            <p>{getLocalizedContent()}</p>
            <img src="./ghibli.jpg" width={500}></img>
        </div>
    )
}

export default LocalizedContent