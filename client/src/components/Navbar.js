import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar=()=>{
    const [cookies, setCookies] = useCookies(["access_token"]);
    const logout=()=>{
        window.localStorage.clear();
        setCookies(["access_token",""]);
    }
    return(
        <>
        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand d-md-none" href="/"> 
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-egg-fried me-2" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                            </svg>
                        FOODIE
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="offcanvasLabel">FOODIE</h5>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                           <li className="nav-item">
                            <a className="nav-link" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-egg-fried" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                            </svg></a></li>
                            <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/mine">Your Recipes</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/addrecepie">Add Recipe</Link></li>
                            <li className="nav-item">
                            {!cookies.access_token ? (
                                <Link to="/auth" className="nav-link">Login/Register</Link>) : (
                                <button className="btn btn-outline-secondary" onClick={logout}> Logout </button>
                            )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>

    )
}