// https://www.npmjs.com/package/react-youtube
import Iframe from 'react-iframe'
import YouTube from 'react-youtube'

interface props {
    link: string
    type: string
}
const IVideo = ({ link, type }: props) => {
    const video =
        <div className="ratio ratio-16x9">
            <Iframe url={link}
                id=""
                className=""
                display="block"
                allow="fullscreen"
                position="relative" />
        </div>
    const opts = {
        height: '480',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const youtube =
        <YouTube
            videoId={link}                  // defaults -> ''
            opts={opts}
            // id={string}                       // defaults -> ''
            // className={class}                // defaults -> ''
        // iframeClassName={string}          // defaults -> ''
        // style={object}                    // defaults -> {}
        // title={string}                    // defaults -> ''
        // loading={string}                  // defaults -> undefined
        // onReady={func}                    // defaults -> noop
        // onPlay={func}                     // defaults -> noop
        // onPause={func}                    // defaults -> noop
        // onEnd={func}                      // defaults -> noop
        // onError={func}                    // defaults -> noop
        // onStateChange={func}              // defaults -> noop
        // onPlaybackRateChange={func}       // defaults -> noop
        // onPlaybackQualityChange={func}    // defaults -> noop
        />
    return (
        <>
            {type === "youtube" ? youtube : video}
        </>
    )
}

export default IVideo;