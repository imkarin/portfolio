const Heading = props => {
    const H = `h${props.level}`

    const slash = props.children.indexOf("/")
    const firstLine = props.children.substr(0, slash)
    const lastLine = props.children.substr(slash + 1)

    return (
        <H className="Heading">
            {firstLine}
            <span>{lastLine}</span>
        </H>
    )
}

export default Heading