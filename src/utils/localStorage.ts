export enum SaveStateStatus {
  Success = 'success',
  Error = 'error',
}

/**
 * Function to load localStorage item, stored as serialized JSON
 * @param name localStorage key, where the data is stored
 * @returns parsed localStorage item if it was stored as JSON or undefined
 */
export const loadState = (name: string) => {
  try {
    const serializedState = localStorage.getItem(name)

    if (serializedState === null) {
      return undefined
    }

    const state = JSON.parse(serializedState) as {
      albums: {
        list: any
      }
    }

    return state
  } catch {
    return undefined
  }
}

/**
 * Function to save objects and arrays to localStorage as serialized JSON
 * @param name localStorage key, where the data will be stored
 * @param state data to store
 * @returns status of operation
 */
export const saveState = <T>(name: string, state: T) => {
  try {
    if (typeof state !== 'object') {
      return SaveStateStatus.Error
    }

    const serializedState = JSON.stringify(state)

    localStorage.setItem(name, serializedState)

    return SaveStateStatus.Success
  } catch {
    return SaveStateStatus.Error
  }
}
