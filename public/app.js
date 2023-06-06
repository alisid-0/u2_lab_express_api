const $moviesButton = $(`#movies-button`)
const $actorsButton = $(`#actors-button`)
const $container = $(`#movies-actors-container`)
const $contentDiv = $(`#selected-content`)
$(`.sort`).addClass(`hide`)


const getActors = async()=>{
    const apiGet = await axios.get(`http://localhost:3001/api/actors`)
    const apiData = apiGet.data
    return apiData
}

const getMovies = async(sort)=>{
    let apiGet = null
    if (sort==`asc`){
        apiGet = await axios.get(`http://localhost:3001/api/movies?sort=asc`)
    } else if (sort==`desc`){
        apiGet = await axios.get(`http://localhost:3001/api/movies?sort=desc`)
    } else if (sort==`new`){
        apiGet = await axios.get(`http://localhost:3001/api/movies?sort=new`)
    } else if (sort==`old`){
        apiGet = await axios.get(`http://localhost:3001/api/movies?sort=old`)
    }
    
    const apiData = apiGet.data
    return apiData
}

$actorsButton.on(`click`, async()=>{
    $contentDiv.empty()
    $contentDiv.removeClass(`div-row`)
    $(`.sort`).addClass(`hide`)
    const apiData = await getActors(`asc`)
    for (let i of apiData){
        const $actor = $(`<div class="actor-in-list">`)
        const $actorName = $(`<h2 class="actor-name">`)
        const $actorImg = $(`<img class="actor-img">`)
        $actor.on(`click`, ()=>{
            $contentDiv.empty()

            $contentDiv.addClass(`div-row`)
            $actorImg.addClass(`bigger-img`)
            const $actorImgDiv = $(`<div class="actor-name-img">`)
            $actorName.addClass(`info`)
            $actorImgDiv.append($actorImg)

            const $actorInfoDiv = $(`<div class="actor-info">`)
            const $actorAge = $(`<h2>`)
            $actorAge.html(`Age: ${i.age}`)
            const $movies = $(`<div class="actor-movies">`)
            
            $actorInfoDiv.append($actorName)
            $actorInfoDiv.append($actorAge)
            for(let j of i.movies){
                const $movie = $(`<h2>`)
                $movie.html(j.title)
                $movies.append($movie)
            }
            $actorInfoDiv.append($movies)


            $contentDiv.append($actorImgDiv)
            $contentDiv.append($actorInfoDiv)
        })
        $actorName.html(i.name)
        $actorImg.attr(`src`, i.img)
        $actor.append($actorName)
        $actor.append($actorImg)
        $contentDiv.append($actor)
    }
})

const movieFunc = async(sort)=>{
    $contentDiv.empty()
    $contentDiv.removeClass(`div-row`)
    const apiData = await getMovies(sort)
    for(let i of apiData){
        const $movie = $(`<div class="movie-in-list" id="${i}"></div>`)
        const $movieTitle = $(`<h2 class="movie-title">`)
        const $movieImg = $(`<img class="movie-img">`)

        $movieTitle.html(i.title)
        $movie.on(`click`, ()=>{
            $contentDiv.empty()
            $contentDiv.addClass(`div-row`)
            $movieImg.addClass(`bigger-img`)
            const $movieImgDiv = $(`<div class="movie-img-div">`)

            const $movieInfoDiv = $(`<div class="movie-info-div">`)
            const $year = $(`<h2>`)
            const $runtime = $(`<h2>`)
            const $desc = $(`<h2>`)
            const $actors = $(`<h2>`)
            $year.html(i.year_released)
            $runtime.html(`${i.runtime} minutes`)
            $desc.html(i.description)
            $actors.html(`Starring: ${i.actors[0].name}`)
            $movieImgDiv.append($movieImg)
            $movieInfoDiv.append($movieTitle)
            $movieInfoDiv.append($year)
            $movieInfoDiv.append($runtime)
            $movieInfoDiv.append($actors)
            $movieInfoDiv.append($desc)
            $contentDiv.append($movieImgDiv)
            $contentDiv.append($movieInfoDiv)
        })
        $movieTitle.html(i.title)
        $movieImg.attr(`src`, i.img)
        $movie.append($movieTitle)
        $movie.append($movieImg)
        $contentDiv.append($movie)
    }
}

$moviesButton.on(`click`, async()=>{
    $(`.sort`).removeClass(`hide`)
    await movieFunc(`new`)
})

// $(`.sort`).on(`click`, async()=>{
//     let id = $(this).prop('value')
//     console.log(id)
//     await movieFunc(id)
// })

$(`#asc`).on(`click`, async()=>{
    await movieFunc(`asc`)
})

$(`#desc`).on(`click`, async()=>{
    await movieFunc(`desc`)
})

$(`#new`).on(`click`, async()=>{
    await movieFunc(`new`)
})

$(`#old`).on(`click`, async()=>{
    await movieFunc(`old`)
})