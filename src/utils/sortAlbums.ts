import {type Album, SortingType} from '../common/types'

export const sortAlbums =
  (sorting: SortingType) => (previous: Album, next: Album) => {
    if (sorting === SortingType.Date) {
      return previous.dateAdded < next.dateAdded ? 1 : -1
    }

    if (sorting === SortingType.Name) {
      return previous.name.localeCompare(next.name)
    }

    if (sorting === SortingType.ID) {
      return previous.id < next.id ? 1 : -1
    }

    return 0
  }
