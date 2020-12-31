import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';
import './styles.scss'

const UserResultLoader = () => {
    return (
        <div className="user-result-content">

            <div className="left-column">
                <ImageLoader/>
            </div>

            <div className="infos-goup">

                <InfoLoader/>

            </div>

        </div>
    )
}

export default UserResultLoader;