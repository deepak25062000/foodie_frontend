const Navbar = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid px-5 ">
                    <a className="navbar-brand" href="/"><h2>🍽️Foodie</h2></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/home/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/home/post">Foods</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/home/add-post">Add Post</a>
                            </li>

                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;