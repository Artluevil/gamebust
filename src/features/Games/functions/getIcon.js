import PCicon from '../../../images/windows.png'
import PlayStationIcon from '../../../images/playstation.png'
import IoS from '../../../images/ios.png'
import Linux from '../../../images/linux.png'
import XBOX from '../../../images/xbox.png'
import Nintendo from '../../../images/nintendo.png'
import Android from '../../../images/android.png'

const getIcon = function(platform) {
    if(platform === 'PC') {
        return <img src={PCicon}/>
    } else if(platform === 'PlayStation') {
        return <img src={PlayStationIcon}/>
    } else if(platform === 'PlayStation') {
        return <img src={PlayStationIcon}/>
    } else if(platform === 'iOS') {
        return <img src={IoS}/>
    } else if(platform === 'Xbox') {
        return <img src={XBOX}/>
    } else if(platform === 'Nintendo') {
        return <img src={Nintendo}/>
    }else if(platform === 'Linux') {
        return <img src={Linux}/>
    }
}

export default getIcon