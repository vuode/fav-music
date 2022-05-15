import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';

import { addAlbum } from '../../store/features/albums/albumsSlice';

import List from '../List';
import Input from '../Input';

import styles from './App.module.css';

const App = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState('');

  return (
    <main className={styles.app}>
      <form className={styles.form} onSubmit={() => dispatch(addAlbum(input))}>
        <Input
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
        <button className={styles.button} type='submit'>
          Add album
        </button>
      </form>
      <List />
    </main>
  );
};

export default App;
