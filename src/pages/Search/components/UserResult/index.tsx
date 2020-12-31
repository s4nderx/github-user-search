import DefaultButton from 'core/components/DefaultButton';
import { UserResponse } from 'core/types/UserResponse';
import dayjs from 'dayjs';
import { Link, NavLink } from 'react-router-dom';
import InfoAttribute from './components/InfoAttribute';
import './styles.scss';

type Props = {
    user: UserResponse | undefined;
};

const UserResult = ({ user } : Props) => {
    return (
        <div className="user-result-content">

            <div className="left-column">
                <img 
                src={user?.avatar_url}
                alt={"avatar"}
                className="avatar-image"
                />
                <a  href={user?.html_url} target="_blank">
                <DefaultButton text="ver perfil"></DefaultButton>
                </a>
            </div>

            <div className="infos-goup">

                <div className="pills-group">
                    <div className="pill">
                        <p>Repositórios públicos: {user?.public_repos}</p>
                    </div>
                    <div className="pill followers">
                        <p>Seguidores: {user?.followers}</p>
                    </div>
                    <div className="pill following">
                        <p>Segindo: {user?.following}</p>
                    </div>
                </div>
         
                <div className="infos-container">
                    <h1>Informações</h1>
                    <div className="attributes-column">
                        <InfoAttribute attribute="Empresa" value={user?.company} />
                        <InfoAttribute attribute="Website/Blog" value={user?.blog} />
                        <InfoAttribute attribute="Localidade" value={user?.location}/>
                        <InfoAttribute attribute="Membro desde" value={dayjs(user?.created_at.toString()).format('DD/MM/YYYY')} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserResult;