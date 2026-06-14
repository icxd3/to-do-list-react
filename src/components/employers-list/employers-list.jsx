import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps}/>
        )
    })

// Важное про `key` в React:
// - `key` помогает React отличать элементы списка между собой и
//   эффективно обновлять только изменившиеся элементы в DOM.
// - `key` должен быть уникальным и стабильным (лучше `id`, не индекс).
// - `key` — это внутреннее свойство React, оно НЕ передаётся
//   в компонент в `props`. Поэтому мы отдельно деструктурируем `id`
//   и прокидываем остальные поля через `{...itemProps}`.
// - Если `key` меняется, React размонтирует старый компонент и
//   создаст новый — внутреннее состояние компонента сбросится.
//   Если `key` остаётся тем же, React просто обновит пропсы.
// - Размещайте `key` на непосредственном элементе списка (здесь —
//   на `<EmployersListItem />`). Не используйте индекс массива как `key`,
//   если порядок элементов может меняться.

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;