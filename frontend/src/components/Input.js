import PropTypes from "prop-types";

export default function Input({ placeholder, icon, type, value, change }) {
    return (
        <div className="flex gap-2">
            {icon}
            <input class="p-3 text-xl shadow-none" onChange={change} value={value} placeholder={placeholder} type={type}></input>
        </div>
    )
}

Input.defaultProps = {
    placeholder: "Text",
    type: "text"
}

Input.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.element,
    type: PropTypes.string
}