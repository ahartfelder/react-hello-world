const Greet = (props) => {
    const { name, surname } = props
    return (
        <div>
            <h1>Hello {name} {surname}</h1>
            {props.children}
        </div>
    ) 
}

export default Greet