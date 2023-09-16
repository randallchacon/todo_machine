import './TodoCounter.css';

function TodoCounter({completed, total}){
    return(
        <h1 className="TodoCounter">
            {completed} of {total} todos complete
        </h1>
    )
}

export { TodoCounter }