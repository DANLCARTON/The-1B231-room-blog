import { useState } from "react"
import "../styles/Create.css"
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [title, updateTitle] = useState("")
    const [body, udpateBody] = useState("")
    const [author, updateAuthor] = useState("Mario")
    const [isPending, updateIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {title, body, author}

        updateIsPending(true)

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            updateIsPending(false)
            navigate("/")
        })
    }

    return <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Blog title : </label><input type="text" required value={title} onChange={(e) => updateTitle(e.target.value)} />
            <label>Blog body : </label><textarea required value={body} onChange={(e) => udpateBody(e.target.value)} ></textarea>
            <label>Blog author</label><select value={author} onChange={(e) => updateAuthor(e.target.value)} >
                <option value="Mario">Mario</option>
                <option value="Luigi">Luigi</option>
                <option value="Hatsune Miku">Hatsune Miku</option>
            </select>   
            {isPending ? <button disabled>Adding Blog...</button> : <button>Add Blog</button>}
        </form>
    </div>
}

export default Create