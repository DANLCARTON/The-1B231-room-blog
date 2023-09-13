import "../styles/Home.css"
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Home = () => {

    const [author, setAuthor] = useState("All")
    const [authorsList, updateAuthorsList] = useState([])

    const changeAuthor = (name) => {
        setAuthor(name)
    }

    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    useEffect(() => {
        if (!isPending) {
            updateAuthorsList(blogs.reduce((auth, val) => auth.includes(val.author) ? auth : auth.concat(val.author), []))
        }
        console.log(authorsList)
    }, [isPending])

    return <div className="home">
        {!isPending && authorsList.map((name) => (<button key={name} onClick={() => changeAuthor(name)}>{name}</button>))}
        {isPending ? (error === null ? <p>loading...</p> : <p> {error} </p>) : <BlogList blogs={author !== "All" ? blogs.filter((blog) => blog.author === author) : blogs} title={author+"'s blogs"} />}
    </div>
}

export default Home 