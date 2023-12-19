import { useState} from "react"
import Column from "./Components/Column/column"
import s from './app.module.scss'
const App = () => { 
    const [form, setForm] = useState({ 
        id: 1,
        title: "",
        description: "",
        type: "Chose type"
    })
    const [list, setList] = useState([])
    const handleUpdateForm = (type,value) => { 
        setForm({
            ...form,
            [type]:value
        })
    }
    const handleCreateProduct = () => { 
        setList([
            ...list, 
            { 
                ...form
            }
        ])
        setForm({ 
            title: "",
            description: ""
        })
    }
    return( 
        <>  
            <div className={s.form}>
                <input
                    className={s.title}
                    type="text" 
                    value={form.title}
                    onChange={(e)=>handleUpdateForm("title", e.target.value)}
                    placeholder="Write title"
                />
                <input 
                    className={s.description}
                    type="text"
                    value={form.description}
                    onChange={(e)=>handleUpdateForm("description", e.target.value)}
                    placeholder="Write description"
                />
                <select className={s.select} onChange={(e)=>handleUpdateForm("type", e.target.value)}>
                <option value="ToDo">To do</option>
                <option value="InProgres">InProgres</option>
                <option value="Done">Done</option>
                </select>
                <button className={s.btnCreate} onClick={handleCreateProduct}>Create</button>
            </div>
            <div className={s.column}>
                <div className={s.column_ToDo}>
                    <Column setList={setList} type="To do" list={list.filter(el => el.type === "ToDo")}/>
                </div>
                <div className={s.column_InProgress}>
                    <Column type="In Progress" list={list.filter(el => el.type === "InProgres")}/>
                </div>
                <div className={s.column_Done}>
                    <Column type="Done" list={list.filter(el => el.type === "Done")}/>
                </div>
            </div>
        </>
    )
}

export default App