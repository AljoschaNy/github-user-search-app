import { RegularButtonProps } from "../../type/types";

function RegularButton({ buttonText }: Readonly<RegularButtonProps>) {
    return (
        <button className="regular-button">{buttonText}</button>
    );
}

export default RegularButton;
