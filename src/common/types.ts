export type Album = {
  id: string
  dateAdded: string
  name: string
  liked: boolean
}

export enum View {
  List = 'list',
  Grid = 'grid',
}

export enum SortingType {
  Date = 'date',
  Name = 'name',
  ID = 'id',
}
