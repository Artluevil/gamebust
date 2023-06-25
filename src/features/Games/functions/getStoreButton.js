import PlayStationIcon from '../../../images/playstation.png'
import XBOX from '../../../images/xbox.png'
import Nintendo from '../../../images/nintendo.png'
import Steam from '../../../images/steam.png'
import EpicGames from '../../../images/epic_games.png'
import uniqid from 'uniqid';

const getStoreButton = function(storeName) {
    if(storeName === 'Steam') {
        return (
            <div className="store-button" key={uniqid()}>
                <p className="store-name">{storeName}</p>
                <img className="store-image" src={Steam}/>
            </div>
        )
    } else if(storeName === 'Xbox Store') {
        return (
            <div className="store-button" key={uniqid()}>
                <p className="store-name">{storeName}</p>
                <img className="store-image" src={XBOX}/>
            </div>
        )
    }else if(storeName === 'Xbox 360 Store') {
        return (
            <div className="store-button" key={uniqid()}>
                <p className="store-name">{storeName}</p>
                <img className="store-image" src={XBOX}/>
            </div>
        )
    }else if(storeName === 'PlayStation Store') {
        return (
            <div className="store-button" key={uniqid()}>
                <p className="store-name">{storeName}</p>
                <img className="store-image" src={PlayStationIcon}/>
            </div>
        )
    }else if(storeName === 'Epic Games') {
        return (
            <div className="store-button" key={uniqid()}>
                <p className="store-name">{storeName}</p>
                <img className="store-image" src={EpicGames}/>
            </div>
        )
    }else if(storeName === 'Nintendo Store') {
        return (
            <div className="store-button" key={uniqid()}>
                <p className="store-name">{storeName}</p>
                <img className="store-image" src={Nintendo}/>
            </div>
        )
    }
}

export default getStoreButton