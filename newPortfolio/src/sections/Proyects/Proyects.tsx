/** @format */

import styles from "./Proyects.module.css";
import manegeTabsIos from "../../assets/images/manegeTabsIos.svg";
import Zone from "../../assets/images/Zone.png";
import { useState } from "react";
import Button from "../../components/Botton/Button";
import PalcareLogo from "../../assets/images/palcarelog.jpeg";

import GitHubSvg from "../../assets/svg/GitHubVector.svg";
import OpenSvg from "../../assets/svg/OpenSvg.svg";
import Instagram from "../../assets/svg/Instagram.svg";

type Props = {
  height?: number;
};

export default function Proyects({ height }: Props) {
  const [page, setPage] = useState(0);

  const content = [
    <div className={styles.zone}>
      <div className={styles.title}>
        <img src={Zone} alt="Zone" className={styles.image} />
        <h1>Zone</h1>
      </div>

      <div className={styles.description}>
        <p>
          <b>¿Que es Zone?</b> Zone es una <b>Red Social</b> que busca ayudar a
          las personas a encontrar su sitio ideal para salir a la noche y
          guardar recuerdos con tus amigos gracias a un <b>algoritmo</b> de
          buscade de conocidos cercanos. En esta aplicacion podras crear y{" "}
          <b>comercializar</b> tickets de tus eventos gracias a su{" "}
          <b>facil metodo de pago</b> (mercado pago).
        </p>
        <p>
          <b>¿Cual fue mi rol?</b> En Zone soy Full Stack Developer. Esto me
          permitío ganar experiencia en tanto en el Front-end (React-native)
          como en el Back-end programando las diferentes pantallas, creando un
          algoritmo, creando y manejando base de datos en MongoDb y Firebase,
          realizando APIs que nos permitan desde el pago de los tickets hasta
          cualquier otra consulta necesaria como puede ser Login y SingUp
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          link="https://github.com/DanteCastelao/Zone"
          children={
            <>
              {" "}
              <img src={GitHubSvg} /> <h1>Github</h1>{" "}
            </>
          }
        ></Button>
        <Button
          link="https://www.instagram.com/_zoneapp_/"
          children={
            <>
              {" "}
              <img src={Instagram} /> <h1>Instagram</h1>{" "}
            </>
          }
        ></Button>
      </div>
    </div>,

    <div className={styles.zone}>
      <div className={styles.title}>
        <img src={PalcareLogo} alt="Palcare" className={styles.image} />
        <h1>Palcare</h1>
      </div>

      <div className={styles.description}>
        <p>
          PalCare es una empresa internacional de salud con más de 15 años de
          experiencia brindando servicios de salud en el domicilio de nuestros
          pacientes. En el año 2018, PalCare inicia operaciones en el Ecuador,
          logrando innovar con sus servicios la red de salud en el país. Nuestro
          objetivo es brindar atención médica en domicilio para aquellos
          pacientes que son referidos del área de consulta médica, o están en
          etapa de hospitalización y que ameritan iniciar, continuar o terminar
          su tratamiento en domicilio para la resolución de su patología.
        </p>
        <p>
          <b>¿Cual es mi rol?</b> Actualmente me encuentro desarollando como
          Front-end Developer la pagina de HomeCare de palcare
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          link="https://www.instagram.com/palcare.ar/"
          children={
            <>
              {" "}
              <img src={Instagram} /> <h1>Instagram</h1>{" "}
            </>
          }
        ></Button>
        <Button
          link="
        www.palcarehomecare.com"
          children={
            <>
              {" "}
              <h1>Website</h1> <img src={OpenSvg} />{" "}
            </>
          }
        ></Button>
      </div>
    </div>,

    <div className={styles.zone}>
      <div className={styles.title}>
        <img
          src="https://boring-fermat-2d9e01.netlify.app/img/Picto_Logo_Black.ico"
          alt="Palcare"
          className={styles.image}
        />
        <h1>Picto</h1>
      </div>

      <div className={styles.description}>
        <p>
          Picto es una aplicacion que busca ayudar a la gente con problemas en
          la comunicacion, desde TEA (trastorno de aspecto autista) hasta mudos
          mediante el uso de pictogramas descriptivos y facil interpretacion
        </p>
        <p>
          <b>¿Cual es mi rol?</b> Mi rol fue Full Stack, tanto en la aplicacion
          de escritorio realizada con C# hasta la misma en web
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          link="https://www.instagram.com/picto_aplicacion/"
          children={
            <>
              {" "}
              <img src={Instagram} /> <h1>Instagram</h1>{" "}
            </>
          }
        ></Button>
        <Button
          link="
  whttps://boring-fermat-2d9e01.netlify.app/"
          children={
            <>
              {" "}
              <h1>Website</h1> <img src={OpenSvg} />{" "}
            </>
          }
        ></Button>
      </div>
    </div>,

    <div className={styles.zone}>
      <div className={styles.title}>
        <img
          src="data:image/png;base64,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"
          alt="EcoEye"
          className={styles.image}
        />
        <h1>EcoEye</h1>
      </div>

      <div className={styles.description}>
        <p>
          EcoEye es una aplicacion que mediante la utilizacion de Inteligencia
          artifical permite reconocer diferentes tipos de aves ya sea mediante
          su distintivo cantico o la imagen de ella
        </p>
        <p>
          <b>¿Cual es mi rol?</b> En este proyecto mi rol fue ser Front-End
          Developer donde desarolle una pagina web con mi compañero para la
          utilizacion de esta
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          link="https://www.instagram.com/picto_aplicacion/"
          children={
            <>
              {" "}
              <img src={Instagram} /> <h1>Instagram</h1>{" "}
            </>
          }
        ></Button>
        <Button
          link="
whttps://boring-fermat-2d9e01.netlify.app/"
          children={
            <>
              {" "}
              <h1>Website</h1> <img src={OpenSvg} />{" "}
            </>
          }
        ></Button>
      </div>
    </div>,
  ];

  return (
    <div className={styles.container} style={{ height: height }}>
      <h1 className={styles.myproyects}>Mis Proyectos</h1>
      <div className={styles.cmdcontainer}>
        <div className={styles.navbar}>
          <img className={styles.managetabs} src={manegeTabsIos} />
          <div className={styles.proyects} onClick={() => setPage(0)}>
            <img src={Zone} />
            <h1>Zone</h1>
          </div>
          <div className={styles.proyects} onClick={() => setPage(1)}>
            <img src="https://palcarehealth.com/favicon.png" />
            <h1>Palcare</h1>
          </div>
          <div className={styles.proyects} onClick={() => setPage(2)}>
            <img src="https://boring-fermat-2d9e01.netlify.app/img/Picto_Logo_Black.ico" />
            <h1>Picto</h1>
          </div>
          <div className={styles.proyects} onClick={() => setPage(3)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAADrCAYAAABU1kLLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACLbSURBVHgB7Z0LkFxVmce/yeSJSiYEJWwtmY6sJshjknULASFpqkBhJSRUKY8SKkF5VaFLqJLHGndn2BV2CWpgIVuKKwkCK9G1CAQBN7EyIeiiuCYTWZegMj0jlEQhmcgjz5n2/M/tM9zp6Z5+ne9239v/X9WpnumZ6e6599z//V7nOyKEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhERAixBSnLbcAKm8x7EYyI3w1xkhRCg6zU7KjLlmtJsxy4ypue/bZKTg+CSTGxCiPjN6zejJfb9NSOKh6DQHKTPS8o7AzJXyLJZ6AOHJSCBE7muKUYKg6CQPWCfp3OiQdyyXOOOsIAhRd24MCIklFJ34ExaZBRKITDMAEdosFKHYQdGJJ2kJBCadGyQQnnUSCBHdMUI8kDbjTjN2m5HlGHP0mrFaKMiEVExaKDQUIEKUSZvRKRQaTQFKCSFNDoLB15mxSeJ1Ecd5bDJjicQ/s0dIRaSF7lO9B479aqH1QxJOWmjVNOLYZMZiISQhOBeqV+J1ITbj6JXA9SIklkBsOoUuVJzFJyWExACKTbLEp1MoPqRBodgkX3wIaRgQs6HYNIf4LBFC6khaGCCm+BASAWlh6ptDZKsw3kOUQdxmpcTrwuDQH6uF4kMUYNyGY6zRa8YyIcQDaaErxVH+6BVaPQVhE6/SuBR40929UqmUzJ07V9rb2+1jW1ubfQ6PboQZGBgYMXp6euzjtm3bJJPJ2McmBGvrbhF2NhyGojM2aWkSPx0CAmFZsGCBpNPpYZHxiROgzZs3S3d3tx1NQsaMLjPuF0KK0BSBYiMq2euuuy67adOm7O7du7NRg/d85JFHskuWLMkaCypWx67KsVrocpECpCXhNTfGkqmb0IwFBGjx4sWxOpZVjF5hF0OSI9HWDayazs7OhhOaQvT29jaD9dMppKnBti29Eq9JmzixyQfig8+eYPHpFbpbTUki627iLDb5OPGJ0/GvcLCup0mAO/WIxGtyljUQF8GFmjSc2xWnc1HBWC20ehJNIt0puCEIECed1atXJ9Xl6hUKTyKBOxWXSVj2QOo7Ca5UuSTc6qG7lRDUs1NIRUd9B0bsBnf+ZgX/O45BlMcc5ziC87xSuD1OrElJ0H5A7cJfuXJl9s4779SeiKMmfxJjN5WCYxC12ONc45wrC16v0N2KJWlRjN/AusGkx4jyjov3bSZ3qhQ4FlEWFuJcu/Ou7Ob1ShCDJDFBLX7jrBtHlPEFxG9IYaJMrUP4HREEtxnniQFq8Rtn3YQnnNZ75Q9cVGRsohQeLN1wYE5gbii+X6eQhkS1/iZs3QCY9VHFEyg45ROV8ODc57u5yu/9iDDA3FCkRClgjMm1devWUZO7q6tLc4JRcGogKuHBHMhHObjdKwwwNwQpUQoYF6uBwcTSeD+h4Hhj2bJl6ucH8b1C8wPPKb5/r1B46gqi+97XT+UHi/OJIniMjAypDeU4ix1Lly4t+v6KqfVeYWarLiwWBcEp5k45orByCsULwixatMhOdtbqjE1UcbexzoOiu7U7dw2QiFgiCpOnnBoYbSvH1YGMBUTR/X6huAJ5hyjqqMaydtxnUKwlWiJEnU5ROHnlxE+isHLWrFlT8H3zCafrWaE8NlGUNpRTsKkY4O4UogYOrtcTVskaJm0rp9gdE9YMhAWCFBaXfNO9kNXD6uUA7cByuRan4pqxTiHewUH1eqJKxW/CaMcHxrJW8Bnde2PChuM5+eX4+a8DlxEXXLOjff6KZbIKoRjn6RTiDRxMrydo7ty5Fbkk2iZ6Ibeq1EQNi09+Ob6787q/owuWtT2HNM8hFoOWC4WnscFB9HpiENSr1O3QvEuWCkSGKbTWx4lPMasHlhLuxBSerOri0PCarHJQXKzaKaRqcPC8npBqFk1q3yELCQEsFQys8SnkAhYTH3zW8M8gNrgDO+HBKNelTCLa2axqOjgqBZg7hVQMDprXE1Ftha9mALnYZ8oPOEJEICoQobCVVkh8cMeFuxb+3O5v8bvNLjyaS1iqjZ9ReOoPDpbXEzBWhXEptFyrUu4OfgbLrND7Q1icBQNwh8031fM73UFs3O80s/BAtLWsHbxutWCOKnymTiElwUHyeuBraeup6VpVYnnhfyjm/4etoHCmq9RoZuHRtHZqaZKvlLDoFFKUJeLxYOOiqnWXBC3XqtqgLv4GExPZt3p+jrijae3UWqLg4m+eP9cSIaPAOhJvB9nXXVzLtSqVsYLVAnFxA+KJkV8c6CP70azCo2Xt1OJiOSg8+nhdLe5LcDRdq1IXeakKWggF4jq0eKoH1o7W+fWxD5lCLc9u4ep0S0o89sPxefFo7fJQbj0HhBNWTrEWDa462dfErKRC2weZP2ayj/1ifbaeaLW/8LUQV0l4UtLEpKRBBQdoTchS1cfFJp8TIFg3CEJrmOB4vXD/Xy02v/B09u4N92T/+dFbs/VEq9K80kLBsVAQnl5pUuFBv1f8814OpIZ74OuzSd5F7QO4Brib+nKv8kclJf3VMPum47Ind51qRefKb12d3f3WQLYeaAWUK1mLVQ5KwtN0PZe9NVHXSP1qxXMqWfJQDpjY+N81rDKNXj3b+nvsY495nPH5v7DjC9+5MVtPcE40zrXv/eUVqqk3SYSMk/rSKZ66npmTIObkirnji096enpEAyMO4oN169bJmWeeKdOmTZN58+ZJd3e3+MaIjtxyyy3ik/VbH5c5N31Ibnj4Jrn0tEtl6pSpsuftAfv9lfddLfVgwYIFooHvOWQsHTvXMec9kZZgy6bEA8HxptZagU+0BPX5Od3wZXJrfT5RtHgGjAsFt2r2TR/KTv7su6x79bEV59jn8H1PzgqKGq0slm+r1qEQy0v0hn5ea3FqqTQuhUasxGdwMcp9tzBqjfHsfisQW2SsIDQQmfA4yrhZ9YrrAA33FOdHC4UAeFqUqYd7lRKPptzKlSvF3ElEi23btolvfLqAMLGNjy/mrufNZRuLZcuWSSaTkWq5cNUl8uXHbpP12x6XM2afIZcZ12rhvPOkffpMaT9ypv2+7/U+qRe+3XNQy/EqBea+ER7xCGKsKUkQXjNV2vtBhRuf+xwaqWjNArf8Ue22OHCbnHUTtmiu+NZVw67W7BuPs1YQxhe+c0M2akyMTOWYaRdcel6d3iuKGa2oLZ3V4klFzUG2AU5N+vp07rgad1OAAGMUIHhdTcC6fXq7CRbvsV/j8TZj8div9+6Rvtf6pO2wqTJgvr5n4yo55Z9OG/5dnzzw4wftexWjo6NDNNCwmMPgWsA14YmUBNeqClGKDo6Il0zVkiVL1AUHaJjFcIc0xMFl72BqY2i7Wtdff71UyuYdT49wne424nKjyVb1v9YvU43gLJx7nhWaezb+uwyYRwiQLyA0GHDrxnpdnBuPWaF33r9P32XENYFrwxO4Vr2pWD1IiyfTD4HdqHY20Ng5wGcQuRhRBZcrDSojiIwiwE/dc9GwK5UfSHYDbpgLOvsAGbOTu06x9UBfNp8BLl0xNJIHUTXFx7n3/PnT4pkoLJ2UeDLVcBcy8RCVO1EhEKD1TVQuEMBxgsWj5c7hzlqJNdh2WJsNGDu3qe/1fplvgsntR7aHfmeqfYSlc+tj/yK1AusGLtXmHVvkjotX2NfF93jfgbcHCrpaGsdrYGBAogDnHNeIx3nmPbAcheh4+dDOfYjyot2zx39MIYrP7zJa5q5nLyCteAIupMsvv7yiv4HAhF2sp40Y4MJH5gqceMxJ8vt/e1l+eMMTsvz8v7fCcKuJ/fT8brtUA9y2B3/ykFy06mJ50IgNMmaXfvRSuWHtTXLczcfb989H4xxpZrDy8Vw8iBfxYjQ4xosuneJpCT3iFFEKDtC4O0X5P6xZs0aMCySaIKB81113yXXXXVfyd3GBf/yOc60QYMCqgdUD6wOpctjysEBWmZgOgsmI8dgYjPk5/hZW0r2f+YZUAl4fKXm89gNGfIL3HLDP470uMwKUT3t7u/gmStEBzitAtboH0hKUuVQeyCuApuikzegSDyAqb9K0EjUaoqMxoYsRRfASwM1atGhRUUGFJXPV6muGrYpwBsvx5Vwm69bQ30EkHBAOiES5wDJ66McPyXnm7yBa/ca6uvS0T8vjRsTg1kHAIHz4mXPpHFhSkgTgWuPa8bSEBdXKj5rRLTWi5V6lxJNJhuKnKDJVhYjKD9cCEw7Fk9rgOOGOWux4PWYv9L7hixsCAnDhO0465sRhFysMhOLey79u12edZFyvctnev92I1oPWsvqTEZYX/vVX8k1jJU01caUO814QHvwOgBjCsnJMnTpVfFOvueQ5o4VrumFXpK8RP5Hz3l27dtVtE25P/8OIEXUDdGQztPdelzIzcyj4Q/YKmSQ8YlU5skkuY3WD+R79dZDdwkCfnWozWGgKFn7tbz/zgH3efW/Xfpns2ZUmi4XvwyvcUcincXzqheds5iNSIxqWzlLx04MVt4YzjambqF4fUWXewu+H2E4USyQQ3wkHlhEEfmzr49a9wupxWB3bjdsD16ffPBe2LgDqdq6672rrRsH1gsuFv0MQ+AHjKo1V1JcPrJyBkPsG9w6vBWAxYVU7rB24cLC4YGklFZeE8TT3FkuN9XYt4p+t4id4DEfULmuWOtHS4v/wIKsUdUAcIKBcTUFfNSD+Nv3M98pD2/+z5O/abFaZYvLDG56sKK4DUcMIx44GClQ54zXhwrnUPYK+s2bNEt/UcSpbENvxFKpAOnSeVImG6EAFazbBJLB05sHalTqRJNEBjz76aKQBedxZ/zT1TWmZaC64N80FN7HFft36gfEy7ujWsl8Hlsjy85ebWNAnbK1POUBoYFmFU+0Ql3CK3Fo4M08yWbKF0jHzRGsBQQDxWZMmOhBS9FvyFFtaasb9UiUa2at1uVHr7Mbs2oSDFLVLklTQpAqpbYhPFClcO8ELzPHBXx+Slne3yPi/nmgFqBiwPOZ/8HSZaR4RZC5XcMBjW9dbl2lgLwoA+20Q2wnOHRffbsUF6XJXLIhMFuqB4A5+8fSbJUmUCvRXyBqpQXCAhqUDMDvgZqWkRhSW7pcNUqe+sw7wraOIr4wFrB0ITyMwYf6kEcIDcTgj50JhgaiL+3zp/C9aS8RlvoqBmNHdG1bZ1LhzpWDRIH4TBoKGep18dwvvf/z44+VHKzeIT3DjRLFmPcA1dP/9NemEI2PGmbnHqtGq08GViojiJqkRBEHhjnhcQVs2mCi+RacR0vBYJY74DuI8bqkEnouSlvcYS+f4CaOehwiglWk+sEawUHP+T86wYgRrJR+4Ugg6O8sG5LtUAD8rFEeCoCGd/tHDP6oiOvUAcRxPggNwTWekRjSLA7vNuMuM0qWqJUDwC65BvS0EH2gsragGuFmIMaApFyZllKIDwZn4t5ONi1V+8tRZKrB2YPUUosP8DPU4EBQXy0kZiwZZMGSrnPWDr5eb14B4IcuF7+FqwR2DC4cbnW/qITo4px5r3JDY6RYPaC+DQBUjGpSkpUYuuOAC2x0vyiAs3st37CPqcvhi4H/LXyLh/l93jLU+a8sRrUHFR5nAAmlzQhFaHOpAat5ZR/g50uM2ZnPap22geIuxdMKVxxAwpM/hdmEd1oNGeLDcAqIFIfrthl+Lb6IWHZy7StfFjQGyVV3iCa2YTpiUBPGdmo+6W8gWlfDgpPm+69UzRlUKTFS4f1gk6jG9WhRksBDPGSuYDOvjp53/U/TnyFJ9yrhUWwos3MynLbfsoRQHn95vg90+QRwNa6GiAOcRgWNPN42MeIjjhIlilXnGjAvEAziIsHiibBPgG+0OcrUAMXdtHaK4Mw/9ftBe4PvXvi2Hth6U7BtDI34OwfnutQ+P+RrIOv33DU/KvZ/5+qg1VPmUEhxkyGBNnTjtBPFNVDdKXBu4RjxaqV7iOGG03StHtwQ+Yc3RYFy0CIJGYS3EvcVBteAzRvk5URdz6BcHzBhp/fTDDVp703CF8nqTBl9x8QorNB1567CwSh2uEYLI82efbv8uWNTZZlPhhcDP4brB3WqzFcp91k3r2eZ/r7OoRAfXhscbm7c4Tpgo3KswsC+9VKd57glbEK1iunoWCBYCd0dMVAQeo6rhKQXqeFo/OEFa/6rVBJ5HGuRrr/2OnD9voRUi1NXAtYKVgoDx58661qbc+3MC8nQZbleY7BtZ2f/dt8U3cK20CzM9u8TILHjxUPKJWnS81e8AbeHRKoePYgKWAuuksPMkhAaC08gr6lumj5NxR4yT8fMmyDf/7t4RPXAgKkiTg3LiNaUY7DskBzfuF98gCaLVwRF4FpyMBMscVCZF1KIDUuIpsAwQ6PW4dH8UGkshkKaOouVEGAjL5s2brdhgxLVtB44d0v1hSzHIXv1Ablx7Y83C867tU+T1514T32gugUATNRwXT2TEc+A4n3qIDkiLx03bNYUHlo5vdwP1RsjCaQJRQf2Nc5vi3hsoTNv72uTyz31GvvYPXx3xPKwepMsRgEY9D6qTEbfB7hLlANfs59/4mff94GHhwNLRAOfY82aTcKmirRSNEEizlx4f2M9Zq08N9qH29TnDQ3NHC+w5rvGZG23g3LhN7NCrB/13tvX32K/Rl6fQtsXFBvrpaG1YWO3mhKVQ2Mu8SyKgXpaOA9VpNVcsA9czxLff7Nl0HSZu1lkY3FlxnKvddM83H170NzLrlFny+G+ekFp49yvvktee+oP4BkWY5fSQrgRYsB4XcQLbSkYioB57mYfB1dwtHnAraX1fbFo7PmperBBJraAlYlEoV3AXkdbmdJXwv4/+XL5/63/VXNC3+7e7RAPfc8gV/3kUHLhTXRIR9bZ0gNeMlu+qZZxYWA6+YyJumxitCxZWCIrEfAKhKbS7hLZlVQnltMwoxv4H3pbsgaz4JusxiOy52ti+pChmqgpRb0sH2Lak4ila7vukQBS0Nl/TbC8B0fVZC4TXWnbTaDcTFltDFTweFDm09YCtcj747H5b9ZzdX/qih5WkITg+FykrCQ6uvUizDI0gOiAjHv953ydHa3W7xmpmB4TSV19cZIvOuv5saZs6zaanC72PZtlCJUBgUJk87dgjpGVii2R3DZVlz/tea+XwVY+lKDgZiZhGcK/CwKTYJJ5qeHy5Wribe9q0bBRo7KQZE/FRZ3T2zR+TliOC+5PruLc8r70ELLcrvnKVia18TxoFuFq2hcZ7xr63alUhAx9N2xQEx3kX3tZLVEKjWDoOHARv3cNdX9ha16Jg0mgJA7JjmtT6uSecMUm2/PHHtuYFgvO5s68dJTjufRade7687/KjK+p/rEXLpBa7puvAo/tkaNfQmL8Ld0wD3OxqFRzMXcxhzy4sFnHWRXBA/WfHaHAw0NbNi126b98+Wbt2rZxzzjkyY8YMqZadO3fKs88+K77BpLrmmmtk8uTJosGcOXPk1FNPta+P/x8WCY5JOWDZwbELjjWWzacFRvGXzl8+3M/G9SuGEO2xvWrapGPmSfLcy8/JwSMPyhvvfdN2Bhx6ZVBE55oeG/O2ExdPkQmnTJSWKcWtPVg5VnQUPiNcq1rcK4W0OIDgPCx1pNHcqzBd4mFVephaamM0XawoFq86ynW3IDjIAuWD9hHP/uNPhsUHojPn5uOHd1ZAF74HQ9sBIziLtUwI6EaFjeUgKDwxcK/GTS9u0KOlBla4a1CLa4VKY5Q+eBacyGpxxqKRRQd0iWfhqaVQS6NRO9BOn4eBwGGhJ+6iMNlxUeTXDLUeP95YCJNGPIelBXv27rFLBTDCTLni3SXfN/v6kBzYst8+jpsxTrJvZa2V4YPpHdPl8MHDpff53uDzm3T5UN/gsPBMWlw4roP3P/DE3mB7HM/AtcI5rQaFpQ2gIQQHNKJ7FaZbAmFMiyeeeuope7ev5g6k5WLB3ZkyZUokPaDxHhdffLE1++d9ZJ48v+95eem5l4Z/jhXdE88a7ert/NMfrBv1s5eek+/97PsyecIk604BWDnbX96ec7Omyr6Do1dptxzWIq3vHy/jO4wFddwEaW0fH1ggxsio9aLfu3ufvHX82zL0UmBN4fUmnjXJCo8Y4cnuyhas2xn81aHgdxSo1rXCanGFCviGERzQ6KIDusWz8ODOXo3wIC7isbP+CGB5QAyiqu619UcnzpUFJy+Qx3/zA9n1wq5AcJDtaS1uAJ/8/pPlYyecLZ8/O7B24F7NnzNfFs49z2a1Fs5baIPOEKl88LruteECQXRgjQy9PGgDv5J3/Y8zwiSD2YLxFgSrh8XK/N34ORPs9/a5wSBzNeF0Y62hG6F5DfTmCQMr5+DG8mJb1YDK7UqzpkotYhtKcECju1dhusSzq4U7EUr6K7nQEdfRWsIQZR/dMKi9+fb6B2TaXx5hBePBvH3AHXCr3NYvp9xymu3gB+sGOy9Usj1wISA+B9buHS7Qg+CgfWm2SObps3dcKfct/493ft+IEOJQB57ICQncqoumWHErhEYfZEelrhVcdnT8U6jbajjBAXESHdAlnoWn0loerQWgjig340Mbz55cKrw/t8VLyT7CuYCxax1RaI+qanFtSyE2cL8O/rR4gHfShVOsaCAQPPzcZYfJoWcPDItJsWA4fg7R0aKShIXr+63QO7shBQc0Wp1OKbokOJjeqLTwCpNJ0wXCDhRR9b6ZeeRMKxrbf/dLKzblNMBCP2H8HrZ3wf5T+b2Ka8G6RPMnycRPTJFxHxw/wkqx7lcICFTrCRNG/M7g8wdlPFLk7wmeK2TJ2BT5L/Ry+Lh5LVq0qKzfdSnxZhIcEIeYTj7d4jnG4xpeHX300SXXWSGus3//fjUXC58Fr4+6Im2cYCD4e9TUo2TaYW0mFrOz5N+hUTr6En/y5E9aqwf9iq9If1a2vLjFuls+QOyn9VjjYr2OghuxFks46IsM2Lj3tdp4zdCrgQsGIRrfMTEIUkN4jOaMO6Z1RIzqkLGe3O9rABcZsblSYL5dcskl8uqrr4pnGlpwQBxFB3SLZ+FBBgkrs8sJMEOYbr/9dtECGTKs3NbsqYsue0/veEZW/WiVFZyjDj9Knut9rmDmyRHOTN192V2y4fmN1lLa8H8bZdXGVbJzj99eNLBiEABGtgtBZ4iFCx63trea51pt8HvohUNBEPpAkC5HehyCBNEKC06+O6YBYnKlLGGXoSq3SLMCGl5wQNxiOvksNWO1eAZ3q1LZB4+b0hcEE1dzR9O7jUjcZmI6A54skyiA++TiPBPOmDickQrHaMZ/ZKKMP2H0Hum2JmfdXpWV5I5SGynCioX7rLSFMyqN10gMiLvoABRD4Ex7DbSUCjBr7RSR/xkgPFoxJFgpV62+OjbCg2zZqTtPlnXfXRdUGofWeLlsFCwdxIXCYOW5FZw39QQHjLW1EOI2njfBcyAACMFRUTIN4hZILgQOtvcl+m6xaLEFmZhc2u0cXGZDA2SekLlacdEKG6MpBS547C3ldtEstKe4NogX/f+sF62o5C8qxXPIVhXi0JYD6oIDK6eY4GAOaXS1lHdWi8dGcEASLB1HSoK2GCnxDPxvrI3Ktzi0ugoWen9fW9agJsftaHnRqkus8JQL0uVY/Ln8/OX2e/wt9pzCrpr5YMM7TK5KN7vzjebaqjCFrBzMC8RvCnVb9EBG6tQPp1aSJDogJUrCU8zdUqoiHYWvRaGwFubc/KGaXCpYOzOnt9tHrMmaP3u+tYQcECcIG+qA6ik6UQkOzkv+HFB0p+zLS7BVTEZiSFyzV8WAyYHo7pzc8PfC5q4FMzk/u4UME1pnaFs71S7dyGfyhMkye8Zs2Xdon/26nBR5Pshg4e8gLDv37LTp8hkm+4XvNzy/Qb7y5Er56pNfs9/Xi6gEBzchFAOGW5NgnkBwlOaE2+7Xe649KpJm6YTpEs/Vyw5c+MhSOKtHowl6MWqxeO4xGaugGHC7sUzaKl62AMsGbhNeA5ZNR64qOepAND7HQG5xKVppoFYoXBkdleCAcPUxrBpkpxR3+kCAUa8cPiKSZumE6TYDV4P3KjtMLjRVR6sLWDpolIUte6NoUF6LxYPFmqg+hstTTREfLCMsl4Cls9+MvtzXUQKhufasa+0jRA+f4cVXXxz+HEipD/bo1uI4EDx2NwBYNyj2e+GFF0QJdNTskgSQZEvHgQo7rKJMiQLhiYdsV1RLGCpZrIrgMURmYO8eW0kM0cFjnGp0SoG0+MEfRdcszNVRAWXrJiNBSrxbEkIziA5IiVKAGWACwu3B/kZYLRwVlSxWvdBkmXwtzoSVseKi220rC7hoH//KuYGo1UnENJtxFQPZRFicOO+KN5pYB4yLkWT3KowLME8x4xTxDMrZ0Rxsx44dVoCisnYqWTOGpQ4QCwSAa10fBVcGXQRhMd26/jYbV0GzdlhSaH0x++jZ9m4WRSDZViNv3C/ZvdEJDhaU7nhphzz87Yc1ljI4EL+BhRPbgHExmsXSCYNAnJ+ilwbCuXmlrB64Wlt2PGOtkr7X+6ylEu5pXC1Ydb7CCA5iRlGkyuFOHdp20C6NSCAwl1WKexqBZhQdkBJFd6teQHBg7heqlEbmCkLTb0Tm6Refsc/V0nTL4TJJC+edF1mcCHEbLHuI0p2KiIwE7lTdtoeJgmZxr/KB/4M9fadJEGhOBHC3kL7v6+uz7pYLMrvuft/afN9w5spXCwqXNQpnkLSwvXC2HJBDPz9Qn21tdEH9zbmSsPhNIZrV0gmTSHcLOKsn7HJBbK5cfbVdurBn70BdA8DlAlcKTdThSmmuEq8TuAGiJUVi3al8KDoBKUmguwUgOIj3LL5wsWx55ZnhYrrt/b+U9dvWe2036puEiw3ISBO4U/lQdEbSJUpVzPUGrUBd8/JSe3vXmyYQG4DsVJcElk5TQdEZTVqC/jwpSSjYaaH1A622rWejAKHBzg9YwhDlbqB1ICMJK/arFIpOYVIS3IV0G+bUGWf9jEPrzxmto5qfa+OEZrDvkAz9ejDJVo2jaa2bMBSdsVkqgbuVkibAChAanpvHliPGSdu0NklNb6+o585YOJFBr2NYM9hiuAmEBmSkya2bMBSd0iDv3GVGdRugx5hpx0yTBR9eIL9863npf6PfChE2sWvBVlJ4DFlG6CqYeaUv2MbXbhU8ZNPaQ68bcXnTfL9r0Nve5TGD1g2pmpQZ2LYxy8FRxtgkHncrIc0N6np6JV4XAEd0Y7ckoOcNaTxSEmz3EaeLgUN/oMBPZ+sOQnKkzEBTlThdGBz+xyahK0UiZqnQ5WrG0SsUG1JnlgrFpxkG4zak4egSik9SxaZLGLchDUpKKD4UG0LqQErodlFsCKkTS4XiE4fRK0EFOsWGJIbFEqRZ43ABNtPYJMxGkYSTkqDIEGZ8XC7MpA0cexT1pYWQJgJm/FKh9RPl2CR0oQixpCSwfnolXhdxHIYLDKeFEFKQtFCAfAgN3SdCqiAtFCAKTQJgE694gr26FkiQBUsLAd1mbM49dgtpWCg68QeB0HRuQIgSs3lgCbBtS1hk2JkvJlB0kkdYhDokEKG4Z2ggKBCZHqHIxB6KTnMA4UnlHjtCXzciGQkEpi/32C1NsNVuM0HRaW6cFQQhmmVGe+77lOjsgDEQGhAU7GfcK+8ITEZI4qHokFKkJBAi56KFvx6LTN6jExtCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCSLPxZymDYLe0R1rOAAAAAElFTkSuQmCC" />
            <h1>EcoEye</h1>
          </div>{" "}
        </div>

        {content[page]}
      </div>
    </div>
  );
}
