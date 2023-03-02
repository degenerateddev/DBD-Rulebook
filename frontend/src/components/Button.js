import PropTypes from "prop-types";

export default function Button({ title, click, type }) {
    return (
        <button onClick={click} type={type} className="py-3 px-5 rounded-lg text-2xl text-zinc-50 bg-rose-800 hover:bg-rose-700 hover:scale-105 hover:shadow-md transition duration-150">
            {title}
        </button>
    );
}

Button.defaultProps = {
    title: "Default",
    type: "button"
}

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    click: PropTypes.func
}