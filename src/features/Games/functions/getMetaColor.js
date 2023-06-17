

const getMetaColor = function(metascore) {
    if(metascore > 80) {
        return {color: '#00eb3f', border: '1px solid green'}
    } else if(metascore > 60 && metascore <= 80) {
        return {color: 'yellow', border: '1px solid yellow'}
    } else if(metascore > 40 && metascore <= 60) {
        return {color: 'orange', border: '1px solid orange'}
    } else {
        return {color: '#d4d4d4', border: '1px solid #d4d4d4'}
    }
}


export default getMetaColor