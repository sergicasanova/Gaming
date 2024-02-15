import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { Game } from "@/api";
import styles from "./BannerLastGamePublished.module.scss";
import {ENV} from '../../../utils';

const gameCtrl = new Game();

export function BannerLastGamePublished() {
    const [game, setGame] = useState(null);

    useEffect(() => {
        (async () => {
          try {
            const response = await gameCtrl.getLastPublished();
            setGame(response.data[0]);
          } catch (error) {
            console.error(error);
          }
        })();
      }, []);

    if (!game) return null;

    const wallpaper = game.attributes.wallpaper;
    const enlaceurlServer=`${ENV.SERVER_HOST}`
    const releaseDate = new Date(game.attributes.releaseDate).toISOString();
    console.log(wallpaper);

    return (
        <div className={styles.container}>
            <Image src={`${enlaceurlServer}${wallpaper.data.attributes.url}`} className={styles.wallpaper} alt="imagen" />        
        
            <Link className={styles.infoContainer} href={game.attributes.slug}>
                <Container>
                <span className={styles.date}>
                    {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
                </span>

                <h2>{game.attributes.title}</h2>
                

                <p className={styles.price}>
                    <label>-40%</label>
                    <span className={styles.finalPrice}>
                        37€
                    </span>
                </p>
                </Container>
            </Link>
        </div>
    )
}
