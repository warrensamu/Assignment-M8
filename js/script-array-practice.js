//STEP 1
// let favMovies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon'
// ]
// console.log(favMovies[1])
//STEP 2
// let movies = new Array(5)
// movies[0] = 'Inception'
// movies[1] = 'The Matrix'
// movies[2] = 'Kill Bill'
// movies[3] = 'Terminator 2'
// movies[4] = 'Crouching Tiger, Hidden Dragon'
// console.log(movies[0])
//STEP 3
// let movies = new Array(5)
// movies[0] = 'Inception'
// movies[1] = 'The Matrix'
// movies[2] = 'Kill Bill'
// movies[3] = 'Terminator 2'
// movies[4] = 'Crouching Tiger, Hidden Dragon'
// movies.splice(2, 0, 'The Last Jedi')
// console.log(movies.length)
//STEP 4
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon'
// ]
// delete movies[0]
// console.log(movies)
//STEP 5
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'The Last Jedi',
//     'Thor: Ragnarok'
// ]
// for (let movie in movies) {
//     console.log(movies[movie])
// }
//STEP 6
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'The Last Jedi',
//     'Thor: Ragnarok'
// ]
// for (let i of movies) {
//     console.log(i)
// }
//STEP 7
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'The Last Jedi',
//     'Thor: Ragnarok'
// ]
// for (let i of movies.sort()) {
//     console.log(i)
// }
//STEP 8
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'The Last Jedi',
//     'Thor: Ragnarok'
// ]
// let leastFavMovies = [
//     'Mad Max',
//     'Highlander',
//     'Speed 2'
// ]
// console.log('Movies I like: \n \n')
// for (let movie in movies) {
//     console.log(`${movies[movie]}`)
// }
// console.log('... \n \n')
// console.log('Movies I regret watching: \n \n')
// for (let leastFavMovie in leastFavMovies) {
//     console.log(`${leastFavMovies[leastFavMovie]}`)
// }
// console.log('...')
//STEP 9
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'The Last Jedi',
//     'Thor: Ragnarok'
// ]
// let leastFavMovies = [
//     'Mad Max',
//     'Highlander',
//     'Speed 2'
// ]
// let allMovies = movies.concat(leastFavMovies)
// for (let allMovie in allMovies.sort().reverse())
// console.log(allMovies[allMovie])
//STEP 10
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'The Last Jedi',
//     'Thor: Ragnarok'
// ]
// let leastFavMovies = [
//     'Mad Max',
//     'Highlander',
//     'Speed 2'
// ]
// let allMovies = movies.concat(leastFavMovies)
// let sortedMovies = allMovies.sort().reverse()
// let lastMovie = sortedMovies.pop()
// console.log(lastMovie)
//STEP 11
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'The Last Jedi',
//     'Thor: Ragnarok'
// ]
// let leastFavMovies = [
//     'Mad Max',
//     'Highlander',
//     'Speed 2'
// ]
// let allMovies = movies.concat(leastFavMovies)
// let sortedMovies = allMovies.sort().reverse()
// let firstMovie = sortedMovies.shift()
// console.log(firstMovie)
//STEP 12
// let movies = [
//     'Inception',
//     'The Matrix',
//     'Kill Bill',
//     'Terminator 2',
//     'Crouching Tiger, Hidden Dragon',
//     'Mad Max',
//     'Highlander',
//     'Speed 2'
// ]
// let leastFavMovieOne = movies.indexOf('Mad Max')
// let leastFavMovieTwo = movies.indexOf('Highlander')
// let leastFavMovieThree = movies.indexOf('Speed 2')
// movies[leastFavMovieOne] = 'The Last Jedi'
// movies[leastFavMovieTwo] = 'Thoe: Ragnarok'
// movies[leastFavMovieThree] = 'Memento'
//STEP 13
// let movies = [
//     ['Inception', 1],
//     ['The Matrix', 2],
//     ['Kill Bill', 3],
//     ['Terminator 2', 4],
//     ['Crouching Tiger, Hidden Dragon', 5]
//  ]
// movies.forEach((item) => {
//     let justMovies = item.filter((name) => {
//         return typeof name === 'string'
//     })
//     console.log(justMovies)
//  })
//console.log(movieNames)
//STEP 14
// let employees = [
//     'ZAK',
//     'JESSICA',
//     'MARK',
//     'FRED',
//     'SALLY'
// ]
// const showEmployees = function(names) {
//     console.log(`Employees: \n \n`)
//     for (let employee of names) {
//         console.log(employee.toString())
//      }
// }
// showEmployees(employees)
//STEP 15
// function filterValues(myArray) {
//     return myArray.filter((item) =>
//     item !== false 
//     && item !== null 
//     && item !== 0 
//     && item !== ''
//     )
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
//STEP 16
// function randomNum(myArray) {
//     arrayMax = myArray.length - 1
//     arrayRanNum = Math.floor(Math.random() * (arrayMax + 1))
//     return myArray[arrayRanNum]
// }
//STEP 17
// const largestNum = myArray => {
//     return myArray.sort()[0]
// }