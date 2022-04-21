// copied over from server/api/guess.ts
const decode = (state = '[]'): GameState => JSON.parse(state)
const encode = (state: GameState): string => JSON.stringify(state)

export const useGameState = () => {
  // const state = [['guess', '00022']]
  // extract the game state from the cookie from the backend
  // useCookie tool from nuxt
  // const state = useCookie('state')
  // we want it to be more than a string, so we can pass in options
  const state = useCookie<GameState>('state', {
    // we need encode, decode and default value
    encode,
    decode,
    default: () => [],
  })

  // next set the state
  async function submitGuess(guess: string) {
    // get result from api call
    // $fetch is an isomorphic fetch, on server side it will just call a function, on client side it will perform a network request
    // const result = await $fetch('/api/guess' {
    //   method: 'POST',
    //   body: { guess },
    // })

    // because its GameState coming back we can replace result
    state.value = await $fetch('/api/guess', {
      method: 'POST',
      body: { guess },
    })
  }

  return { state, submitGuess }
}
