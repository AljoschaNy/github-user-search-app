import { RegularButtonProps } from "../../type/types";

function RegularButton({ buttonText, onClick }: Readonly<RegularButtonProps>) {
    return (
        <button className="regular-button" onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default RegularButton;
