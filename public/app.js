const $moviesButton = $(`#movies-button`)
const $actorsButton = $(`#actors-button`)
const $container = $(`#movies-actors-container`)
const $contentDiv = $(`#selected-content`)

const movies = [`batman`, `spiderman`]
const actors = [`rdj`, `denzel`]


$moviesButton.on(`click`, ()=>{
    $contentDiv.empty()
    for(let i of movies){
        console.log(i)
        const $movie = $(`<div class="movie-in-list" id="${i}"></div>`)
        const $movieTitle = $(`<h2 class="movie-title">`)
        const $movieImg = $(`<img class="movie-img">`)
        $movie.on(`click`, ()=>{
            $contentDiv.empty()
        })
        $movieTitle.html(i)
        $movie.append($movieTitle)
        $contentDiv.append($movie)
    }
    console.log(`movies`)
    })
    

$actorsButton.on(`click`, ()=>{
    $contentDiv.empty()
    for(let i of actors){
        console.log(i)
        const $actor = $(`<div class="movie-in-list" id="${i}"></div>`)
        const $actorName = $(`<h2>`)
        $actor.on(`click`, ()=>{
            $contentDiv.empty()
        })
        $actorName.html(i)
        $actor.append($actorName)
        $contentDiv.append($actor)
    }
    console.log(`actors`)
    })
