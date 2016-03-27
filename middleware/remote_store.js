const localStorageKey = "my-list"

export const remoteMiddleware = store => next => action => {
  const result = next(action)
  localStorage.setItem(localStorageKey, JSON.stringify(store.getState()))
  return result
}

export const remoteState = () => {
  const state = localStorage.getItem(localStorageKey)
  return state ? JSON.parse(state) : {}
}
