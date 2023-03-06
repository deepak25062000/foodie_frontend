
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
    let [author, setAuthor] = useState("");
    let [title, setTitle] = useState("");
    let [summary, setSummary] = useState("");
    let [image, setImage] = useState("");
    let [location, setLocation] = useState("")

let navigate=useNavigate()
    let addPost = (e) => {
        e.preventDefault()
        let data = { author, title, summary, image, location }
        if (author && title && image && summary && location) {
            axios.post("http://localhost:4000/add-post", data)
                .then(res => {
                    alert(res.data.message)
                }).catch(err => {
                    alert(err.data.message)
                })
                navigate('/home/about')
        } else {
            alert("Please fill all the fields")
        }
    }

 
    return (

        <div className="AddPost ">

            <div className="div1 d-flex ms-3 me-4 ">
                <div className="picture">
                    <img src="../images/bl.jpg" width="550px" height="650px" alt="" />
                </div>
                <div className="form my-4 ms-3">
                    <h1><u>ADD Post</u></h1>
                    <form action="" onSubmit={addPost}>
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


                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
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
                            <label htmlFor="">Location</label>
                            <input type="text"
                                className="form-control  p-2"
                                placeholder="location of the post"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <div className="signUP_button w-50 mb-5 mt-3 ">
                            <button className="btn btn-danger  w-50">Submit Post</button>
                      
                        </div>

                    </form>
           
                </div>
            </div>

            <footer class="ftco-footer ftco-footer-2 ftco-section mb-3">
                <div class=" bg-dark m-2 p-2">
                    <div class="row mb-4">
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2 text-white">Stories</h2>
                                <p className="text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-twitter"></span></a></li>
                                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-facebook"></span></a></li>
                                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4 ml-md-5">
                                <h2 class="ftco-heading-2 text-white">Information</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Terms of Uses</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">About Stories</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Privacy Policy</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Accessibility Help</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Advertise with us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-2">
                                <h2 class="ftco-heading-2 text-white">Categories</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Food</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Restaurant</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Dessert</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Lifestyle</a></li>
                                    <li><a href="#" class="py-2 d-block text-dark text-decoration-none text-white">Recipes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-2">
                                <h2 class="ftco-heading-2 text-white">Have a Questions?</h2>
                                <div class="block text-dark text-decoration-none text-white-23 mb-3 text-white">
                                    <ul>
                                        <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                        <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                                        <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p className="text-white">
                                Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js "></script><script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AddPost;