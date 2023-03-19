import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";
const Post = () => {
    let [post, setPost] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get('http://localhost:4000/post')
            let data = await res.data
            setPost(data)
            console.log(data);
        }
        fetchData()
    }, [])

    return (
        <div className="container mb-3">
            <Banner />
            <div className="row">
                <div className="col-9 bg-light  d-flex flex-wrap ">
                    {post.map(x => (
                        <div className="posts m-2 ">
                            <div className=" mb-4">
                                <Link to={`/home/post/${x._id}`}><img className="rounded" src={x.image} height={350} width={300} alt="" /></Link>
                                <h5 className="text-muted">{x.title}</h5>
                                <h4 className="font-weight-normal">{x.author}</h4>
                                <Link to={`/home/post/${x._id}`} className="btn btn-dark"> Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-3 ">
                    <div className="card p-1 m-1">
                        <div className="card-body align-content-center ">
                            <div className="card-title text-center"><h2>About Me</h2></div>
                            <figure className="figure">
                                <img className=" rounded-circle img-fluid figure-img mt-2 mb-2" src="../images/fm.jpg" alt="" />
                            </figure>
                            <div className="card-text text-muted ">
                                Lorem ipsum dolor sit amet <strong> consectetur</strong>  consectetur adipisicing elit. Placeat numquam, quos <strong> voluptatibus</strong> harum est voluptatibus alias beatae atque itaque voluptate!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laboriosam repellat aspernatur est nam explicabo modi, ab rem enim consectetur?
                            </div>
                            <figure className="figure ">
                                <img className=" mt-3 rounded img-fluid figure-img mt-2 mb-2" src="../images/14.jpeg" alt="" />
                                <img className=" mt-3 rounded img-fluid figure-img mt-2 mb-2" src="../images/13.jpeg" alt="" />

                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

