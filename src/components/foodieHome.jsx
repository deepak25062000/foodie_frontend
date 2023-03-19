import { Card } from "react-bootstrap";

const Home = () => {
    return (

        <div className="home m-5 ">
            <div className="banner d-flex row">
                <div className=" col-sm-8">
                    <img height="700" width="1200" src="./images/14.jpeg" alt="" />
                </div>
                <div className="card-body col-4 p-5 text-bg-warning">
                    <p className="text-muted fs-4">Feautured Posts</p>
                    <h1 className="font-weight-bold">  <b> Love The  <br /> Delicious & <br /> <u>Tasty Foods</u> </b></h1>

                    <p className="mt-5">A Small river named duden flows <br /> by their place and supplies it with <br /> the necessary regelialia Lorem <br /> ipsum dolor sit amet consectetur <br /> adipisicing elit. Vero, quasi.</p>
                    <a className="btn btn-dark fs-5 mt-4" href="/home/about">About 🡲</a>
                </div>
            </div>

            <div className="stories m-sm-5">
                <h2>Recent Stories</h2>
                <div className="div2">
                    <div className=" card-sm-body d-sm-flex justify-content-sm-around display-6 mb-sm-5">
                        <div className="card1">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/2.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>
                                    <a className="btn btn-secondary fs-5" href="/home/post">More 🡲</a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card2">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/12.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Food</Card.Title>
                                    <a className="btn btn-secondary fs-5" href="/home/post">More 🡲</a>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/4.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>
                                    <a className="btn btn-secondary fs-5" href="/home/post">More 🡲</a>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/10.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>
                                    <a className="btn btn-secondary fs-5" href="/home/post">More 🡲</a>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row h-sm-auto justify-content-between">
                        <div className="col-sm-5">
                            <img height='600px' src="./images/7.webp" alt="" />
                        </div>
                        <div className="col-sm-5 ">
                            <img height='600px' src="./images/9.webp" alt="" />
                        </div>
                        <div className=" col-sm-2 bg-body">
                            <h1>Tasty & Delicious Foods</h1>
                            <a className="btn btn-warning fs-5" href="/home/post">More 🡲</a>
                            <p className="text-sm-dark mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime voluptatibus necessitatibus, modi asperiores, maiores doloremque minima </p>
                        </div>
                    </div>
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

export default Home;


{/* <div className="home d-lg-flex d-sm-block">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias autem ex, dicta labore provident deserunt consequatur sequi doloremque. Excepturi, necessitatibus?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis exercitationem dolores odit error labore quidem amet quis similique? Iste.</p>

      </div>
      <div className="para row bg-warning p-lg-5 p-sm-0">
         <p className="col-lg-6 col-sm-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, perferendis?</p>
         <p className="col-lg-6 col-sm-12" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptas?</p>
      </div> */}
