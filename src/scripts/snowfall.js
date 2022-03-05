import $ from 'jquery'
// import snowfall from './plugins/snowfall'
require('./plugins/snowfall')

const SnowFall = () => {

    $(document).snowfall({
        flakeCount : 300,
        minSize: 3,
        maxSize:7,
        round: true,
    });
}

export default SnowFall
