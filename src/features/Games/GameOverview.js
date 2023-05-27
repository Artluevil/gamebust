import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTrailers, setScreenshots } from './gamesSlice'
import GameOverviewRight from './GameOverviewRight'
import getIcon from './functions/getIcon'
import getMetaColor from './functions/getMetaColor'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { useParams } from 'react-router'
import { setCurrentGame } from './ScreenshotSlice'

function GameOverview() {

    const dispatch = useDispatch()

    const [gameData, setGameData] = useState({})
    const [gameDataMore, setGameDataMore] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [gameDataPlatforms, setGameDataPlatforms] = useState([])
    const [gameDataPlatformsOther, setGamePlatformsOther] = useState([])
    const [gameDataGenres, setGameDataGenres] = useState([])
    const [gameDataDevelopers, setGameDataDevelopers] = useState([])
    const [gamesDataPublishers, setGameDataPublishers] = useState([])
    const [gameDataMovies, setGameDataMovies] = useState({})
    const [gameDataScreenshots, setGameDataScreenshots] = useState({})
    const [gameDataStores, setGameDataStores] = useState([])
    const [moreDescription, setMoreDescription] = useState(false)
    const [shortDescription, setShortDescription] = useState('')
    const [gameReq, setGameReq] = useState({})

    const {gameName} = useParams()

    function getGameLink(gameName) {
        let linkName = gameName
        linkName = linkName.replace(/\s+/g, '-').toLowerCase()
        return linkName
    }

    useEffect(() => {        
        const getGameData = async () => {
            await axios.get('https://api.rawg.io/api/games', {
                params: {
                    key: '3dd9328ac4df40a89ea737d2070e850f',
                    search: gameName,
                    page_size: 1,
                    search_precise: true,
                    search_exact: true
                    }
                })
                .then(function (response) {
                    console.log(gameData)
                    setGameData(response.data.results[0])
                    setGameDataPlatforms(response.data.results[0].parent_platforms)

                })

            axios.get('https://api.rawg.io/api/games/' + gameData.id, {
                params: {
                    key: '3dd9328ac4df40a89ea737d2070e850f'
                    }
                })
                .then( function (response){
                    console.log(response.data)
                    setGameDataMore(response.data)
                    setGamePlatformsOther(response.data.platforms)
                    setGameDataGenres(response.data.genres)
                    setGameDataDevelopers(response.data.developers)
                    setGameDataPublishers(response.data.publishers)
                    setGameDataStores(response.data.stores)
                    setShortDescription(response.data.description_raw.substring(0, 500) + '...')
                    response.data.platforms.map(platformData => {
                        console.log(platformData.platform.name)
                        if(platformData.platform.name === "PC") {
                            setGameReq(platformData.requirements)
                        }
                    })

                })
            axios.get('https://api.rawg.io/api/games/' + gameData.id + '/movies', {
                params: {
                    key: '3dd9328ac4df40a89ea737d2070e850f'
                }
            })
            .then( function (response){
                console.log( response.data)
                setGameDataMovies(response.data)
            })
            axios.get('https://api.rawg.io/api/games/' + gameData.id + '/screenshots', {
                params: {
                    key: '3dd9328ac4df40a89ea737d2070e850f'
                }
            })
            .then( function (response){
                setGameDataScreenshots(response.data)
                setIsLoaded(true)
            })
        }
        getGameData()
    }, [gameData.id])

    dispatch(setCurrentGame(gameData.slug))
    return (
        <div>
            {isLoaded ? <div className="game-overview-container">
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img src={gameData.background_image}/>
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                    <div className="game-overview-content">
                        <p className="game-overview-text">Game Overview</p>
                        <div className="released-and-platform">
                            <p className="release-text">{gameData.released}</p>
                            <div className="platform-container">
                            {/* {gameData.parent_platforms.map(platformData => (
                                    <div key={nanoid(6)}>
                                        {getIcon(platformData.platform.name)}
                                    </div>
                                ))} */}
                                {gameDataPlatforms.map(platformData => (
                                    <div>
                                        {getIcon(platformData.platform.name)}
                                    </div>
                                ))}
                            </div>
                            <p className="average-text">Average playtime: {gameData.playtime}</p>
                        </div>
                        <p className="game-name">{gameData.name}</p>
                        <div className="buttons-container">
                            <button className="button-favorite">Add to favorites</button>
                            <button className="button-wishlist">Add to wishlist</button>
                        </div>
                        <div className="game-description-container">
                            <h2 className="about-text">About</h2>
                            <p className="description-text">{moreDescription ? gameDataMore.description_raw : shortDescription}</p>
                            {moreDescription ? <p className="roll-dsc-btn" onClick={() => setMoreDescription(!moreDescription)}>show less</p> : <p className="roll-dsc-btn" onClick={() => setMoreDescription(!moreDescription)}>show more</p>}
                        </div>
                        <div className="other-info-container">
                            <div className="other-info-platform-container">
                                <h2>Platforms</h2>
                                <p>
                                    {gameDataPlatformsOther.map(platformData => (
                                        platformData.platform.name + ', '
                                    ))}
                                </p>
                            </div>
                            <div className="other-info-metascore-container">
                                <h2>Metascore</h2>
                                <p style={getMetaColor(gameData.metacritic)} className="metascore-value">{gameData.metacritic}</p>
                            </div>
                            <div className="other-info-genre-container">
                                <h2>Genre</h2>
                                <p>{gameDataGenres.map(genreData => (
                                    genreData.name + ', '
                                ))}</p>      
                            </div>
                            <div className="other-info-release-container">
                                <h2>Release date</h2>
                                <p>{gameData.released}</p>
                            </div>
                            <div className="other-info-developer-container">
                                <h2>Developer</h2>
                                <p>{gameDataDevelopers.map(developerData => (
                                    developerData.name + ', '
                                ))}</p>
                            </div>
                            <div className="other-info-publisher-container">
                                <h2>Publisher</h2>
                                <p>{gamesDataPublishers.map(publisherData => (
                                    publisherData.name
                                ))}</p>
                            </div>
                        </div>
                        <div className="requirements-container">
                            <h2>System requirements for PC</h2>
                            <p>{gameReq.minimum}</p>
                            <p>{gameReq.recommended}</p>
                        </div>
                    </div>
                    <GameOverviewRight gameDataStores={gameDataStores} gameData={gameData} gameDataMovies={gameDataMovies} gameDataScreenshots={gameDataScreenshots}/>
            </div> : 
            <p>Loading...</p>}
        </div>
    )
}

export default GameOverview
