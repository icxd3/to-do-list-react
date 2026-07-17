import './search-panel.css';

const SearchPanel = ({ term, onUpdateSearch }) => {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={term}
            onChange={(e) => onUpdateSearch(e.target.value)} />
    )
}

export default SearchPanel;