import { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import classNames from "classnames";
import { Wishlist } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./WishlistIcon.module.scss";


export function WishlistIcon(props) {
  const {gameId, className} = props;
  const [hasWishlist, setHasWishlist] = useState(null);
  const { user } = useAuth();



  if (hasWishlist === null) return null;

  return (
      <Icon 
      name="heart" 
      className={classNames(styles.wishlistIcon, {
        [className]: className,
      })}/>
  )
}
