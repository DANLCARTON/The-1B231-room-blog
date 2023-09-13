import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import "../styles/BlogDetails.css"

const BlogDetails = () => {

    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/"+blog.id, {
            method: "DELETE",
        }).then(() => {
            navigate("/")
        })
    }

    return <div className="blog-details">
        <h2>Blog Details • {id}</h2>
        {isPending ? (error === null ? <p>loading...</p> : <p> {error} </p>) : <div>
            <h3><i>{blog.title}</i> by {blog.author}</h3>    
            <p>{blog.body}</p>
            <button onClick={() => handleClick()}>Delete Blog</button>
        </div>}
    </div>
}

export default BlogDetails