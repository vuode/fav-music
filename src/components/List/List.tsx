import {useMemo, useState} from 'react'
import cn from 'classnames'

import {useAppSelector} from '../../hooks/redux'
import {useView} from '../../hooks/useView'
import {sortAlbums} from '../../utils/sortAlbums'

import {albumsList} from '../../store/features/albums/albumsSelectors'

import {SortingType, View} from '../../common/types'

import Album from '../Album'
import ListControls from '../ListControls'

import styles from './List.module.css'

const List = () => {
  const albums = useAppSelector(albumsList)

  const [sorting, setSorting] = useState(SortingType.Date)

  const {view, displayViewToggle, handleViewToggle} = useView()

  const sortedAlbums = useMemo(
    () => [...albums].sort(sortAlbums(sorting)),
    [albums, sorting],
  )

  return (
    <div>
      <ListControls
        sorting={sorting}
        setSorting={setSorting}
        view={view}
        displayViewToggle={displayViewToggle}
        handleViewToggle={handleViewToggle}
      />
      <div
        className={cn(styles.data, {
          [styles.list]: view === View.List,
          [styles.grid]: view === View.Grid,
        })}
      >
        {sortedAlbums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </div>
    </div>
  )
}

export default List
