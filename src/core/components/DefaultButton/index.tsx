import './styles.scss'
import '../../../app.scss';
type Props = {
    text: string;
}

const DefaultButton = ({text} : Props) => (
    <button className="default-button">
        {text}
    </button>
);
 export default DefaultButton;