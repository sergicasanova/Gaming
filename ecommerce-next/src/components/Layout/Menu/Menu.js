import styles from "./Menu.module.scss";
import { Image, Icon, Input } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Platform } from "@/api";
import { map } from "lodash";
import Link from "next/link";

const platformCtrl = new Platform();

export function Menu(props) {
    const { isOpenSearch } = props;
    const [platforms, setPlatforms] = useState(null);
    console.log(platforms);

    useEffect(() => {
        (async () => {
          try {
            const response = await platformCtrl.getAll();
            setPlatforms(response.data);
          } catch (error) {
            console.error(error);
          }
        })();
      }, []);

    return (
        <div className={styles.platforms}>
            {map(platforms, (platform) => (
                <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                    <Image src={`http://localhost:1337${platform.attributes.icon.data.attributes.url}`} />
                {platform.attributes.title}
                </Link>
            ))}
        </div>
    )
}
