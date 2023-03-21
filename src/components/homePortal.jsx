import { Routes, Route } from "react-router-dom";
import About from "./about";
import AddPost from "./addPost";
import Home from "./foodieHome";
import Navbar from "./navbar";
import Post from "./post";
import SinglePost from "./singlepost";
import Upadate from "./update";
const HomePortal = () => {
    return (
        <div className="homeportal">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/:id" element={<SinglePost />} />
                <Route path="/update/:id" element={<Upadate />} />
            </Routes>
        </div>
    );
}

export default HomePortal;