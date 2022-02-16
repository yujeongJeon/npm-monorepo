type ButtonProps = {
    text: string
    onClick?(e: React.SyntheticEvent): void
}

function Button({text, onClick}: ButtonProps) {
    return <button onClick={onClick}>{text}</button>
}

export default Button
