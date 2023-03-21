import axios from "axios";
import { useEffect, useState } from "react";
import Banner from './banner'


const About = () => {

    let [user, setUser] = useState([])
    let [posts, setPost] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios('http://localhost:4000/post')
            let data = await res.data
            setPost(data)
            console.log(data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get('http://localhost:4000/user')
            let data = await res.data
            setUser(data)
            // console.log(data);
        }
        fetchData()
    }, [])

    return (

        <div className=" text-center text-light font-monospace m-3">
            <div className="row">
                <Banner />

            </div>
            <div className="container">

                <div className="row">

                    <div className="col-5 ms-5 mb-5">
                        <img width='500px' height="600px" src="../images/ice.webp" alt="" />
                    </div>

                    <div className="col-6 ">

                        <h1 className="bg-light text-dark p-2 rounded">About Stories</h1>
                        <p className="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aperiam.</p>

                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card p-4 m-5 bg-dark text-light ">
                                        Users
                                        <h4>{user.length}</h4>
                                    </div>
                                    <div className="card  p-4 m-5 bg-dark text-light">Lorem ipsum dolor sit amet.</div>
                                </div>
                                <div className="col-6">
                                    <div className="card  p-4 m-5 bg-dark text-light"> Lorem ipsum dolor sit amet.</div>
                                    <div className="card  p-4 m-5 bg-dark text-light">
                                        posts
                                        <h4>{posts.length}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 ">
                    <div className="card bg-lg-dark  mb-3 ">
                        <div className="card-body bg-dark ">

                            <div className="card-lg-title mt-3 mb-3">Watch Videos</div>
                            <div className="card-text mt-5 mb-5">
                                <h1>  Roger <br /> Bosch</h1>
                                <p className="text-secondary mt-5 mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                <p className="mt-5 mb-5"> <i> <u> Roger.Bosch</u> </i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <figure className="figure">
                        <img className=" mt-2 mb-2 ms-0" height={600} src="../images/black.webp" alt="" />
                    </figure>
                </div>
            </div>
            <footer class="ftco-footer ftco-footer-2 ftco-section mb-3">
                <div class="p-2 bg-dark">
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

export default About;