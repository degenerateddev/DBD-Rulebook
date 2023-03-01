import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Anchor(props) {
    return (
        <Link className="text-2xl text-zinc-50 hover:text-zinc-400 hover:shadow-md transition duration-150" to={props.to}>
            {props.title}
        </Link>
    );
}

Anchor.defaultProps = {
    title: "Default",
    to: "/"
}

Headers.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string
}