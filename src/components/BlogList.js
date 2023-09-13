import { Link } from "react-router-dom"
import "../styles/BlogList.css"

const BlogList = ({blogs, title, handleDelete}) => {
    return <div className="blog-list">

        <h2>{title}</h2>

        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={"/blogs/"+blog.id}>
                    <h3>{blog.title}</h3>
                    {/*<p>{blog.body}...</p>*/}
                    <p><i>Author : {blog.author} </i></p>
                    {/*<button onClick={() => handleDelete(blog.id)}>Delete blog</button>*/}
                </Link>
            </div>
        ))}

    </div>
}

export default BlogList