import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="button-group">
            <button 
                className="btn btn-light"
                type='button'>
                    All the employees
            </button>

            <button 
                className="btn btn-outline-light"
                type='button'
            >
                    For awarding
            </button>

            <button 
                className="btn btn-outline-light"
                type='text'>
                    Salary more then 1000$
            </button>
        </div>
    )
}

export default AppFilter;