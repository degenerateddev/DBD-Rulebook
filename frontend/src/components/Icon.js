import { Link } from "react-router-dom";

export default function Icon(props) {
    return (
        <Link style={iconStyle} className="sm:text-lg md:text-4xl font-bold font-raleway mx-4" to="/">The Rulebook</Link>
    );
}

const iconStyle = {
    color: "white",
    fontWeight: "bold"
}