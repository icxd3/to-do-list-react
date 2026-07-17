import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
    const buttons = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'increase', label: 'На повышение' },
        { name: 'salary', label: 'Зарплаты больше 1000$' }
    ]

    return (
        <div className="btn-group">
            {buttons.map(({ name, label }) => {
                const isActive = filter === name

                return (
                    <button
                        key={name}
                        className={`btn ${isActive ? 'btn-dark' : 'btn-light'}`}
                        type="button"
                        onClick={() => onFilterSelect(name)}>
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default AppFilter;