import s from '../../app.module.scss'
const Column = (props) => {
    const updateType = (id) => {
        const updateProducts = props.list.map(item => {
            if (item.id === id) {
                item.type="InProgress"
            }
            return item
        })
        props.setList([...updateProducts])
    }
    const ListCollection = props.list.map((item,index) => {
        return (
            <div className={s.note}>
                <p className={s.note_titleNote}>{item.title}</p>
                <p className={s.note_noteDescription}>{item.description}</p>
            </div>
        )
    })
    return (
        <ul>
            <h2>{props.type}</h2>
            {ListCollection}
        </ul>
    )
}

export default Column