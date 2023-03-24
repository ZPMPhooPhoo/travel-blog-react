import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BlogTitle from "./components/blog/blog_title";
import BlogItem from "./components/blog/blog_item";

function App() {
  return (
    <div className="wrap">
      <div className="bg">
        <header>
          <div className="l-wrap-outer">
            <div className="l-wrap-inner">
              <nav>
                <div className="nav-logo">
                  <div className="logo-inner">AA</div>
                  <span className="logo-nxt">
                    Austin's <br /> Atlaus
                  </span>
                </div>
                <div className="nav-menu">
                  <ul>
                    <li>
                      <a href="/" className="active">Home</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="./login.html" className="login">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="p-mainvisual">
          <div className="l-wrap-outer">
            <div className="l-wrap-inner">
              <div className="p-main-txt">
                <h1>
                  Let me show you <br />
                  the world
                </h1>
                <div className="p-search">
                  <h2>Where do you want to explore?</h2>
                  <div className="search-box">
                    <form>
                      <input
                        type="text"
                        name=""
                        id="text"
                        placeholder="Search......."
                      />
                      <button>GO</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="blog">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <div className="blog">
              <BlogTitle titleName={"TRAVEL TIPS & GUIDES"} />
              
              <div className="blog_wrap">
              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-kai-pilger-547494.jpg"}
              itemTitle={"7 Europe Travel Essentials You Can’t Travel Without"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-oleksandr-pidvalnyi-1008155.jpg"}
              itemTitle={"10 Tips for Solo Female Travel"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-lara-jameson-8828439-1536x1024.jpg"}
              itemTitle={"Budget Travel Tips in 2022 That You Must Know"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-ethan-brooke-2128042-scaled.jpg"}
              itemTitle={"Seoul South Korea Travel Itinerary"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-frederik-sorensen-2404843-scaled.jpg"}
              itemTitle={"24 Hours in New York City (Things You MUST Do)"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-jimmy-teoh-1010657-768x512.jpg"}
              itemTitle={"3-Day Weekend in Athens Greece"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-allphoto-bangkok-13612696-768x513.jpg"}
              itemTitle={"Grindelwald Switzerland Travel Guide"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-chelsea-cook-2929906-600x450.jpg"}
              itemTitle={"Machu Picchu Travel Guide"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />

              <BlogItem 
              itemImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-pixabay-259447-600x338.jpg"}
              itemTitle={"Cape Town South Africa Travel Guide"}
              itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"}
              itemLink={"READ MORE..."}
              />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <div className="content">
              <div className="content-title">
                <h3>SEND ME A MESSAGE</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore
                </p>
                <hr />
              </div>
              <form action="" className="contact-form">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" />
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <label>Message</label>
                <textarea name="comment">Enter Your Message</textarea>
                <button className="send-btn">
                  <a href="">Send</a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <div className="about-container">
              <h2>MY STORY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore
              </p>
              <div className="about-content1">
                <div className="content1">
                  <h3>CALLED IT QUITS</h3>
                  <p>
                    In spring of 2019, I handed in my letter of resignation to
                    my boss to travel the world. My friends and family couldn’t
                    believe my plan. Sometimes, I couldn’t either.
                    <br />
                    <br />
                    My first stop was Venice, Italty.
                  </p>
                </div>
                <div className="content1-img">
                  <img
                    src="https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-taryn-elliott-3889687-1638x2048.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="about-content2">
                <div className="content2-img">
                  <img
                    src="https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-alex-azabache-4171211-scaled.jpg"
                    alt=""
                  />
                </div>
                <div className="content2">
                  <h3>JUST THE BEGINNING</h3>
                  <p>
                    At the time, backpacking through Europe was a blast – but it
                    was also just the beginning.
                    <br />
                    <br />I started posting about my experiences around the
                    world on my blog, to help educate and inspire others to
                    travel more.
                  </p>
                </div>
              </div>
              <div className="about-content1">
                <div className="content1">
                  <h3>LOOKING AHEAD</h3>
                  <p>
                    Now, I blog full time from all around the world. I love
                    experiencing new places, new food, music, and more.
                    <br />
                    <br />
                    But my favorite part is educating and inspring. I hope you
                    find Austin’s Atlas helpful as your plan your next
                    adventure.{" "}
                  </p>
                </div>
                <div className="content1-img">
                  <img
                    src="https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-taryn-elliott-3889728-1634x2048.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="l-warp-outer">
          <div className="l-wrap-inner">
            <div className="social">
              <a
                href="
                      "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>

              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-youtube"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="4" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-twitter"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-telegram"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </a>
            </div>

            <ul className="list">
              <li className="list-item">
                <a href="/">Home</a>
              </li>
              <li className="list-item">
                <a href="/">Blog</a>
              </li>
              <li className="list-item">
                <a href="/">Contact</a>
              </li>
              <li className="list-item">
                <a href="/">About</a>
              </li>
              <li className="list-item">
                <a href="/">Login</a>
              </li>
            </ul>

            <p className="copyright">
              Company Name © 2023 .All rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
