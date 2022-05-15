import React, { useMemo } from 'react';
import cn from 'classnames';

import { Album as AlbumType } from '../../common/types';

import { useAppDispatch } from '../../hooks/redux';
import {
  likeAlbum,
  removeAlbum,
} from '../../store/features/albums/albumsSlice';

import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as Bin } from '../../assets/bin.svg';

import styles from './Album.module.css';

type Props = {
  data: AlbumType;
};

const Album = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  const { id, name, dateAdded, liked } = data;
  const date = useMemo(() => new Date(dateAdded).toLocaleString(), [dateAdded]);

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <h3 className={styles.date}>{date}</h3>
      <span className={styles.id}>ID: {id}</span>
      <div className={styles.actions}>
        <button
          className={styles.action}
          onClick={() => dispatch(removeAlbum(id))}
        >
          <Bin className={styles.icon} />
          Remove
        </button>
        <button
          className={cn(styles.action, { [styles.liked]: liked })}
          onClick={() => dispatch(likeAlbum(id))}
        >
          <Heart className={styles.icon} />
          Best of the best
        </button>
      </div>
    </article>
  );
};

export default Album;
