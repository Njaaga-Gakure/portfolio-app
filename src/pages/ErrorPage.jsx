import {Link} from "react-router-dom"
const ErrorPage = () => {
    return (
        <section className="error">
            <div className="error-center">
                <h1 className="error-title">ERROR: <span>404</span></h1>
                 <p className="error-text">The page you are looking for cannot be found</p>
                <Link className="error-btn" to='/'>
                    back home
                </Link>
            </div>
        </section>
    )
}

export default ErrorPage