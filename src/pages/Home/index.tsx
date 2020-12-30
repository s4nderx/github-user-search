import DefaultButton from 'core/components/DefaultButton';
import '../../app.scss';
import './styles.scss'
const Home = () => (

        <div className="home-content">
            <h1 className="home-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
            <p>
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
            </p>
            <p>
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
            </p>
            <p>
                Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
            <DefaultButton text="começar"></DefaultButton>
        </div>

)

export default Home;
