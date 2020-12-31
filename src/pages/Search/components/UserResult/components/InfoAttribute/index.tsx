import "./styles.scss";

type Props = {
    attribute: string,
    value: string | undefined
}

const InfoAttribute = ({attribute, value} : Props) => {
    return (
        <div className="attr-container">
            <p className="key">{attribute}: </p>
            <p>{value ? value : "-"} </p>
        </div>
    );
}

export default InfoAttribute;