import { Component } from 'react';

import './empoyers-add-form.css';

// Это устаревший метод - классовые компоненты (до 2019)
// Рекомендуется переписать на функциональные компоненты с React Hooks
// В современной разработке используется: const [state, setState] = useState()
// Эту лекцию изучаю только для того чтобы понять как устроен React изнутри

// Компонент формы для добавления нового сотрудника
// Содержит поля для ввода имени и зарплаты
class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        // Инициализируем состояние с пустыми данными
        this.state = {
            name: '',      // Имя сотрудника
            salary: 0      // Зарплата в долларах
        }
    }

    // Обновляет состояние при изменении значения в input'ах
    // Использует динамический ключ (name или salary) из события
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        if (name && salary) {
            this.props.onAddItem(name, salary);
            this.setState({ name: '', salary: 0 });
        }
    }

    render() {
        // Деструктурируем значения из состояния
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                {/* Форма с полями для ввода данных о сотруднике */}
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    {/* Кнопка отправки формы */}
                    <button type="submit" className="btn btn-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;