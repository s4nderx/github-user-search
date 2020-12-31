import DefaultButton from 'core/components/DefaultButton';
import InfoAttribute from './components/InfoAttribute';
import './styles.scss';

const UserResult = () => {
    return (
        <div className="user-result-content">

            <div className="left-column">
                <img 
                src={"https://avatars1.githubusercontent.com/u/32679739?v=4"}
                alt={"avatar"}
                className="avatar-image"
                />

                <DefaultButton text="ver perfil"></DefaultButton>
            </div>

            <div className="infos-goup">

                <div className="pills-group">
                    <div className="pill">
                        <p>Repositórios públicos: 623</p>
                    </div>
                    <div className="pill followers">
                        <p>Seguidores: 623</p>
                    </div>
                    <div className="pill following">
                        <p>Segindo: 623</p>
                    </div>
                </div>
         
                <div className="infos-container">
                    <h1>Informações</h1>
                    <div className="attributes-column">
                        <InfoAttribute attribute="Empresa" value="-" />
                        <InfoAttribute attribute="Website/Blog" value="-" />
                        <InfoAttribute attribute="Localidade" value="-" />
                        <InfoAttribute attribute="Membro desde" value="-" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserResult;