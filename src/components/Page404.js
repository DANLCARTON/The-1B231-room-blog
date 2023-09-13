import { Link } from "react-router-dom"

const Page404 = () => {
    return <div className="page-404">
        <h2>Sorry...</h2>
        <p>That page can not be found</p>
        <Link to="/">return to the Home page</Link>
    </div>
}

export default Page404