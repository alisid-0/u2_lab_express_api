const $moviesButton = $(`#movies-button`)
const $actorsButton = $(`#actors-button`)
const $container = $(`#movies-actors-container`)
const $contentDiv = $(`#selected-content`)

const movies = [`batman`, `spiderman`]

const getActors = async()=>{
    const apiGet = await axios.get(`localhost:3001/api/actors`)
    console.log(apiGet)
    return apiGet
}





    

$actorsButton.on(`click`, async()=>{
    $contentDiv.empty()
    await getActors()
    console.log(getActors())
    
    })

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