
import { React, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {


    let [author, setAuthor] = useState("");
    let [title, setTitle] = useState("");
    let [summary, setSummary] = useState("");
    let [image, setImage] = useState("");
    let [location, setLocation] = useState("")
    const navigate = useNavigate()
    const params = useParams()


    // !preFilling data to form
    useEffect(() => {

        const getpostDetails = async () => {
            let result = await fetch(`http://localhost:4000/post/${params.id}`)
            result = await result.json();
            console.log(result);
            setAuthor(result.author)
            setTitle(result.title)
            setSummary(result.summary)
            setImage(result.image)
            setLocation(result.location)
        }
        getpostDetails()

    }, [])


    // !re-upadating all details to database 
    const UpdateProduct = async (e) => {
        e.preventDefault();

        let data = { author, title, summary, image, location }
        let response = await fetch(`http://localhost:4000/post/${params.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        });
        console.log(response);
        if (response) {
            navigate('/home/post')
        }
    }



    return (

        <div className="AddPost ">

            <div className="div1 d-flex ms-3 me-4 ">

                <div className="picture">
                    <img src="/images/bl.jpg" height="700px" alt="backpic" />
                </div>

                <div className="form my-4 ms-3">
                    <h1><u>ADD Post</u></h1>

                    <form onSubmit={UpdateProduct}>

                        <div className="author ">
                            <label htmlFor="Author">Author</label>
                            <input type="name"
                                placeholder="Author"
                                className="form-control  p-2 "
                                name="Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>

                        <div className="title">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                placeholder="Title of the post"
                                className="form-control  p-2 "
                                name="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}

                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                            <textarea name="summary" cols="100" id="exampleFormControlTextarea1" rows="3" className="form-control  p-2 " value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>

                        </div>

                        <div className="image">
                            <label htmlFor="image">image</label>
                            <input type="text"
                                className="form-control  p-2 "
                                placeholder="image of the post"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}

                            />
                        </div>

                        <div className="location">
                            <label htmlFor="location">Location</label>
                            <input type="text"
                                className="form-control  p-2"
                                placeholder="location of the post"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>


                        <div className="signUP_button w-50 mb-5 mt-3 ">
                            <button className="btn btn-danger  w-50" >update Post</button>
                        </div>


                        <div className="back_button w-50 mb-5 mt-3 ">
                            <Link to='/home/post' className="btn btn-warning  w-50" >back to Post</Link>
                        </div>


                    </form>

                </div>
            </div>


        </div>
    );
}

export default Update;