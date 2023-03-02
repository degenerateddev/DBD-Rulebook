import PropTypes from "prop-types";

export default function RuleEntry({ title, content, date, killer }) {
    return (
        <div className={"flex" + killer ? "bg-rose-800" : "bg-teal-600"}>
            {title}
            {content}
            {date}
        </div>
    )
}

RuleEntry.defaultProps = {
    title: "Rule title",
    content: "Rule content",
    killer: false
}

RuleEntry.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    killer: PropTypes.bool
}