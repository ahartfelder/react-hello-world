function FunctionClick() {
    function clickHandler() {
        console.log('Clicked Function')
    }
    
    return (
        <div>
            <button onClick={clickHandler}>Click Function</button>
        </div>
    )
}

export default FunctionClick