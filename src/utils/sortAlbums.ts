import { Album, SortingType } from '../common/types';

export const sortAlbums =
  (sorting: SortingType) => (prev: Album, next: Album) => {
    if (sorting === SortingType.Date) {
      return prev.dateAdded < next.dateAdded ? 1 : -1;
    }

    if (sorting === SortingType.Name) {
      return prev.name.localeCompare(next.name);
    }

    if (sorting === SortingType.ID) {
      return prev.id < next.id ? 1 : -1;
    }

    return 0;
  };
