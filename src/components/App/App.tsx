import { useMemo, useState } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { addAlbum } from '../../store/features/albums/albumsSlice';

import List from '../List';
import Input from '../Input';

import styles from './App.module.css';
import { albumsList } from '../../store/features/albums/albumsSelectors';

const App = () => {
  const dispatch = useAppDispatch();

  const list = useAppSelector(albumsList);

  const empty = useMemo(() => list.length === 0, [list]);

  const [input, setInput] = useState('');

  return (
    <main className={cn(styles.app, { [styles.initial]: empty })}>
      {empty && <h1 className={styles.invitation}>Add your first album:</h1>}
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addAlbum(input));
          setInput('');
        }}
      >
        <Input
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
        <button className={styles.button} type='submit'>
          Add album
        </button>
      </form>
      {!empty && <List />}
    </main>
  );
};

export default App;
