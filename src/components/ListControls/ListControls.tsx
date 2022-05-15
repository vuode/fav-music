import React from 'react';
import cn from 'classnames';

import { ReactComponent as ListIcon } from '../../assets/list.svg';
import { ReactComponent as GridIcon } from '../../assets/grid.svg';

import { SortingType, View } from '../../common/types';

import styles from './ListControls.module.css';

type Props = {
  sorting: SortingType;
  setSorting: (sorting: SortingType) => void;
  view: View;
  displayViewToggle: boolean;
  handleViewToggle: () => void;
};

const sortingOptions = [
  {
    name: 'Date',
    type: SortingType.Date,
  },
  {
    name: 'Name',
    type: SortingType.Name,
  },
  {
    name: 'ID',
    type: SortingType.ID,
  },
];

const ListControls = ({
  sorting,
  setSorting,
  view,
  displayViewToggle,
  handleViewToggle,
}: Props) => {
  return (
    <div className={styles.controls}>
      <div>
        <span>Sort by: </span>
        {sortingOptions.map(({ name, type }) => (
          <button
            type='button'
            className={cn(styles.button, {
              [styles.selected]: sorting === type,
            })}
            onClick={() => setSorting(type)}
          >
            {name}
          </button>
        ))}
      </div>
      {displayViewToggle && (
        <button
          className={styles.button}
          type='button'
          onClick={handleViewToggle}
        >
          {view === View.List ? <GridIcon /> : <ListIcon />}
        </button>
      )}
    </div>
  );
};

export default ListControls;
