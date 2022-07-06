// // TODO
// // check if its a valid guess
// // store the state
// // use nitro for api calls - no need to stringify
// // test in console with
// // http post localhost:3000/api/guess
// // http post localhost:3000/api/guess guess=adieu

// import { createError, defineHandle, useCookie, setCookie, useBody } from 'h3'
// import { storage } from '#storage'
// // you can swap out the driver in prod to your fav severless datatbase solution
// import MemoryDriver from 'unstorage/drivers/memory'

// import wordList from 'wordlist-english/index.js'
// const validWords = wordList['english/10'].filter((word) => word.length === 5)

// // you can mount driver to different sections of storage
// storage.mount('', MemoryDriver())

// const decode = (state = '[]'): GameState => JSON.parse(state)
// const encode = (state: GameState): string => JSON.stringify(state)

// export default defineHandle(async (req, res) => {
//   // TODO
//   // evaluate the guess that comes in
//   // score it in some way

//   // use helper function `useBody' https://github.com/unjs/h3
//   const { guess } = await useBody(req)

//   //  handle errors
//   if (!guess || guess.length !== 5) {
//     return createError({
//       statusCode: 422,
//       message: 'Invalid guess',
//     })
//   }

//   const day = new Date().toISOString().slice(0, 10)
//   const word: string =
//     (await storage.getItem(day)) ||
//     validWords[Math.floor(Math.random() * validWords.length)]

//   // then set word in storage
//   await storage.setItem(day, word)

//   // const word = 'super'

//   // preserve state in a cookie,
//   // so that when you hard refresh the page it will preserve your state
//   // example of a server rendered page with guesses
//   // todo: pull state from the cookie instead
//   // import helper function `useCookie'

//   //   const state: GameState = useCookie(req, 'state') || []
//   // remember to parse the string, see decode/encode function above
//   const state: GameState = decode(useCookie(req, 'state'))

//   // push new guess and hint onto the array
//   state.push([guess, generateHint(word, guess)])
//   // set the cookie
//   setCookie(res, 'state', encode(state))

//   return state
// })

// // create a function that will score guess
// // generate hint from a guess
// // 0 wrong, 1 right letter wrong place, 2 right letter right place
// function generateHint(word: string, guess: string): string {
//   // get access to word
//   const source = [...word]
//   // for each letter in the guess,
//   // iterate over each letter

//   return (
//     [...guess]
//       .map((letter, i) => {
//         // valid guess
//         // that gives us an array of exact matches
//         if (letter === word[i]) {
//           // delete the letter from the source
//           source[i] = null
//           return true
//         }
//         return false
//       })
//       // then itertate over it again

//       .map((exact, i) => {
//         if (exact) return '2'
//         if (source.includes(guess[i])) return '1'
//         return '0'
//       })
//       // join the whole thing
//       .join('')
//     // add string return type :string to the function definition
//   )

//   // TODO
//   // add some tests
// }
