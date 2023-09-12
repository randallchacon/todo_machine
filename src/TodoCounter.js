function TodoCounter({completed, total}){
    return(
        <h1>
            {completed} of {total} todos complete
        </h1>
    )
}

export { TodoCounter }