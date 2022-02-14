import './App.css';
import cat1 from "./images/cat1.png"
import cat2 from "./images/cat2.png"
import cat3 from "./images/cat3.png"
import cat4 from "./images/cat4.png"
import cat5 from "./images/cat5.png"
import small_cat1 from "./images/small_cat1.png"
import small_cat2 from "./images/small_cat2.png"
import small_cat3 from "./images/small_cat3.png"
import small_cat4 from "./images/small_cat4.png"
import small_cat5 from "./images/small_cat5.png"
import small_cat6 from "./images/small_cat6.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import icons1 from "./images/icons1.png"
import icons2 from "./images/icons2.png"
import team_leaves from "./images/team_leaves.svg"
import footer_icon from "./images/footer_icon.png"
import to_top from "./images/to_top.png"
import { useContext, useState, useEffect } from 'react';
import tounge from './images/tounge_cat.png';
import foundation from './images/foundation.png';
import { FaBars } from 'react-icons/fa'
import AOS from 'aos';
import "aos/dist/aos.css";
import uncommon from './images/UNCOMMON.svg'



import logo from './images/Logo.png'
import herobackground from './images/HeroBackground.png'
import union from './images/Union.png'
import smsc_1 from './images/smsc_1.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import leaftop from './images/leaf-top.png'
import roadimg from './images/roadimg.png'
import roadline from './images/road-line.png'
import polygon from './images/Polygon.png'
import roadimg2 from './images/road-sm-2.png'
import roadimg3 from './images/road-sm-3.png'
import bghero from './images/bg-hero.svg'
import bgherosm from './images/bg-hero-sm.png'


function App() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  const [days, setGet_days] = useState(0);
  const [get_hours, setGet_hours] = useState(0);
  const [get_min, setGet_min] = useState(0);
  const [get_sec, setGet_sec] = useState(0);


  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "03/19/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      setGet_days(Math.floor(distance / (day)));
      setGet_hours(Math.floor((distance % (day)) / (hour)));
      setGet_min(Math.floor((distance % (hour)) / (minute)));
      setGet_sec(Math.floor((distance % (minute)) / second));
      if (distance < 0) {
        clearInterval(x);
      }
      //seconds
    }, 1000)


  const settings2 = {
    centerMode: true,
    centerPadding: '-20px',
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    focusOnSelect: false,

    responsive: [{
      breakpoint: 991,
      settings: {
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      }
    }]
  };

  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.typekit.net/gqm2nti.css"></link>
      {/* header */}
      <header className='header-wrapper bg_hero' id='top'>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="#"><img className='img-fluid' src={logo} alt="" /></a>
            <button className='walt'>Connect wallet</button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto mb-2 mb-lg-0 bg-custom me-5 ">
                <li class="nav-item">
                  <a class="nav-link p-2 m-1" aria-current="page" href="#">Sanctuary</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2 m-1" href="#roadmap">Roadmap</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2 m-1" aria-current="page" href="#team">Team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2 m-1" href="#faq">FAQs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2 m-1" href="#">Connect Wallet</a>
                </li>
              </ul>
              <form class="d-flex  border_nav mx-0 ms-5">
                <button class="btn fw-bold btn_nav " type="submit">Join the club</button>
                <a href=""><i className='fab fa-twitter p-2 m-1'></i></a>
                <a href=""><i class="fab fa-instagram-square p-2  m-1"></i></a>
                <a href=""><i className='fab fa-discord p-2 m-1'></i></a>
              </form>
            </div>
          </div>
        </nav>
        <img src={bghero} className='bg-img d-lg-block d-none' alt="" />
        <img src={bgherosm} className='bg-img d-lg-none d-block' alt="" />
      </header>

      {/* counter */}
      <div className="container count_par col-lg-12 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center counter-top">
        <p className='sloth_10 fs-5' style={{ color: "#0D3727", fontWeight: "lighter !important" }}>10,000 sloths, coming to the Ethereum blockchain in:</p>
        <div className='counter' data-aos="zoom-in">
          <div className='count'>{days}<p>DAYS</p></div>
          <div className='count'>{get_hours}<p>HOURS</p></div>
          <div className='count'>{get_min}<p>MINUTES</p></div>
          <div className='count'>{get_sec}<p>SECONDS</p></div>
        </div>
        <button className='btn sloth_icon  btn_custom' data-aos="zoom-in">Mint your Sloths</button>
        <form class="d-lg-none d-flex count_icon  border_nav mx-0">
          <button class="btn btn_nav fs-6 " type="submit">Join the club</button>
          <a href=""><i className='fab fa-twitter  fs-4 p-2 m-1'></i></a>
          <a href=""><i class="fab fa-instagram-square  fs-4 p-2  m-1"></i></a>
          <a href=""><i className='fab fa-discord fs-4  p-2 m-1'></i></a>
        </form>
      </div>

      {/* sanctuary_section */}
      <section className='sanctuary_section'>
        <div className="container sanctuary_head">
          <div className="col-lg-12 col-md-12 col-12  wel_sanc" data-aos="zoom-in">
            <h1 className='sanctuary_heading text-center'>WELCOME TO</h1>
            <h1 className='sanctuary_heading1 text-center'>THE SANCTUARY </h1>
          </div>

          <div className='sanc_cont'>
            <div className="sanc_imgs col-12 col-md-3 col-lg-3">
              <img className='img-fluid ' src={img1} alt="" width="290px" />
              <form class="d-lg-flex d-none mt-5 count_icon   border_nav mx-0">
                <button class="btn fw-bold btn_nav fs-6 " type="submit">Join the club</button>
                <a href=""><i className='fab fa-twitter  fs-4 p-2 m-1'></i></a>
                <a href=""><i class="fab fa-instagram-square  fs-4 p-2  m-1"></i></a>
                <a href=""><i className='fab fa-discord fs-4  p-2 m-1'></i></a>
              </form>
            </div>
            <div className="snac_para col-12 col-md-5 col-lg-5" data-aos="fade-up">
              <p className='text-start smalltext2' ><span style={{ letterSpacing: "2px", fontWeight: "bold", wordBreak: "break-all" }}>Slow Mo Sloth Club is an NFT collection of the 10,000 most philoslothical creatures living on the Ethereum blockchain.</span>
                <br /><br />
                Join us in caring for these slow movers in today's fast-moving world. Head to our discord before it's too late to find out how to adopt your own unique sloths.
                <br /><br />
                This is just the beginning. Sloths might be slow movers but have been around since the age of Pangea. It's safe to say we are here to stay.
                With you, our community, we can continue to build the sanctuary and welcome more struggling creatures.
                <br /><br />
                SMSC will strive to continuously create more value for our most trusted volunteers. Early adopters will be handsomely rewarded for laying the foundations of our wildlife hub.
                We welcome you along for this exciting journey.
                It's a long haul.</p>
            </div>
            <div className="sanc_imgs2 col-12 col-md-4 col-lg-4">
              <img className='img-fluid ' src={img1} alt="" width="210px" />
            </div>
          </div>
        </div>
      </section>

      {/* mission */}
      <div className='container mission'>
        <p style={{ lineHeight: '58px', fontWeight: "900", marginTop: "50px", textAlign: "center" }} data-aos="zoom-in">OUR MISSION</p>
        <div className='main_mission'>
          <div className="mission_img d-lg-flex d-none flex-column align-items-center justify-content-center" data-aos="zoom-in">
            <img className='tounge' src={tounge} alt="" />
            <img className='found_logo' src={foundation} alt="" />
          </div>
          <div className="mis_cont" data-aos="zoom-in">
            <p className='text-start smalltext'><span style={{ fontWeight: "900", color: "#0D3727" }}>The Sloth Conservation Foundation (SloCo) is a charity dedicated to saving sloths in the wild through research and conservation initiatives.</span>
              <br /><br />
              We pledge to donate 5% from the pre-sale and public sale, as well as 0.5% of the royalty income to help their cause.</p>
            <div className="mission_img2 d-flex flex-column align-items-center justify-content-center w-100" data-aos="zoom-in">
              <img className='tounge' src={tounge} alt="" />
              <img className='found_logo' src={foundation} alt="" />
            </div>
            <div className='w-100 '>
              <div className='find_btn w-100 d-flex justify-content-lg-start justify-content-center'>
                <button className='report'>Find out more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* leaves */}
      <div className='tem_lev col-12 col-lg-12 col-md-12'>
        <img className='miss_leaves' src={team_leaves} alt="" />
      </div>

      {/* male female */}
      <div className="container mission gender">
        <div className="row justify-content-center text-center mx-0">
          <div className="col-lg-8 text_sanctuary text-center smalltextbold" data-aos="zoom-out">
            The SMSC sloths are divided into two genders: male and female. This trait will be
            revealed alongside your unique artwork 24 hours after the sale has ended.
          </div>
        </div>
        <div className="row sanctuary_head4 mx-0  ">
          <div className="mal_par col-6 px-0 ">
            <div className="container male_head " data-aos="zoom-in">
              <h1 className='font_sanc text-right'>MALE</h1>
              <h4 className='font_sanc_1 text-center'>SUPPLY : 7,500</h4>
            </div>
            <img className='img-fluid mt-5 gend_img ' src={img2} alt="" />
          </div>
          <div className="col-6 px-0 d-flex flex-column align-items-start">
            <div className="container female_head  " data-aos="zoom-in">
              <h1 className='font_sanc text-left'>FEMALE</h1>
              <h4 className='font_sanc_2 text-center'>SUPPLY : 2,500</h4>
            </div>
            <img className='img-fluid mt-5 gend_img ' src={img2} alt="" />
          </div>
          <div className="row mx-0  hex-bottom justify-content-center  " data-aos="flip-left">
            <div className="col-lg-6 col-8  ">
              <div className='img_res2 d-flex  justify-content-center'>
                <img className='  gend_img ' src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* roadmap */}
      <section className='py-5'>
        <h1 className=' head-big my-5 text-center' data-aos="fade-up">ROADMAP</h1>
        <div className="container">
          <div className="canvas">
            <img src={roadimg} className='road-img' alt="" />
            <img src={roadline} className='road-line d-lg-none d-block' alt="" />
            <div className="road-item item-1 d-flex align-items-start col-lg-6 col-12" data-aos="zoom-in">
              <span className="bullet me-3 d-lg-none d-flex">
                <img src={polygon} alt="" />
                <span>1</span>
              </span>
              <div className="d-flex flex-column align-items-start">
                <p class="name fs-5 mb-0" style={{ fontWeight: "900", color: "#0d3727" }}>DEC 2021</p>
                <h5 class="smalltext fs-5" style={{ color: "rgb(13, 55, 39)", marginBottom: "15px", fontSize: "17px" }}>The Journey Begins</h5>
                <span className='fs-7 text-start smalltext' style={{ color: "rgb(13, 55, 39)" }}>From 3 different continents, the SMSC team is established. Talented artists and blockchain developers join the NFT community, delivering quality only seen in blockbuster movies and best selling games.The mission: create 10,000 uniquely styled sloths and help endangered animals.</span>
              </div>
            </div>
            <div className="road-item item-2 d-flex  align-items-start col-lg-6 col-12" data-aos="zoom-in">
              <span className="bullet me-3 d-lg-none d-flex">
                <img src={polygon} alt="" />
                <span>2</span>
              </span>
              <div className='d-flex flex-column align-items-start'>
                <p class="name fs-5 mb-0" style={{ fontWeight: "900", color: "#0d3727" }}>JAN 2022</p>
                <h5 class="smalltext fs-5" style={{ color: "rgb(13, 55, 39)", fontSize: "17px" }}>Art front and center</h5>
                <span className='fs-7 text-start smalltext' style={{ color: "rgb(13, 55, 39)" }}>The first of the sloths make their appearance, and the flood gates are opened. Discord and the website are launched as we build our community and make new friends.</span>
              </div>
            </div>
            <div className="road-item item-3 d-flex  align-items-start col-lg-4 col-12" data-aos="zoom-in">
              <span className="bullet me-3 d-lg-none d-flex">
                <img src={roadimg2} alt="" />
                <span>3</span>
              </span>
              <div className='d-flex flex-column align-items-start'>
                <p class="name fs-5 mb-0 " style={{ fontWeight: "900", color: "#0d3727" }}>FEB 2022</p>
                <h5 class="smalltext fs-5" style={{ color: "rgb(13, 55, 39)", fontSize: "17px" }}>Sloth adoption program</h5>
                <span className='fs-7 text-start smalltext' style={{ color: "rgb(13, 55, 39)" }}>Whitelist slots are open, and everyone has an equal chance to become one of the 1,000 early adopters. Don’t sloth on this one.</span>
              </div>
            </div>
            <div className="road-item item-4 d-flex  align-items-start col-lg-4 col-12" data-aos="zoom-in">
              <span className="bullet me-3 d-lg-none d-flex">
                <img src={roadimg3} alt="" />
                <span>4</span>
              </span>
              <div className='d-flex flex-column align-items-start'>
                <p class="name fs-5 mb-0" style={{ fontWeight: "900", color: "#0d3727" }}>MARCH 18 - 20 2022</p>
                <h5 class="smalltext fs-5" style={{ color: "rgb(13, 55, 39)", fontSize: "17px" }}>Sales go live</h5>
                <span className='fs-7 text-start smalltext' style={{ color: "rgb(13, 55, 39)" }}>Whitelist: March 18th @ 6pm EST
                  Public: March 20th @ 2pm EST</span>
              </div>
            </div>
            <div className="road-item item-5 d-flex  align-items-start col-lg-4 col-12" data-aos="zoom-in">
              <span className="bullet me-3 d-lg-none d-flex">
                <img src={roadimg3} alt="" />
                <span>5</span>
              </span>
              <div className='d-flex flex-column align-items-start'>
                <p class="name fs-5 mb-0" style={{ fontWeight: "900", color: "#0d3727" }}>MARCH 21 2022</p>
                <h5 class="smalltext fs-5" style={{ color: "rgb(13, 55, 39)", fontSize: "17px" }}>The Grand reveal</h5>
                <span className='fs-7 text-start smalltext' style={{ color: "rgb(13, 55, 39)" }}>10,000 unique sloths are revealed. 10% of our profits are donated to selected charities working together to save endangered animals.
                  Phase two of the roadmap is made public..</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}

      <Slider className="gallery2" {...settings2}>
        <div className="">
          <img src={cat1} alt="" />
        </div>
        <div className="">
          <img src={cat2} alt="" />
        </div>
        <div className="">
          <img src={cat3} alt="" />
        </div>
        <div className="">
          <img src={cat4} alt="" />
        </div>
        <div className="">
          <img src={cat1} alt="" />
        </div>
        <div className="">
          <img src={cat2} alt="" />
        </div>
        <div className="">
          <img src={cat3} alt="" />
        </div>
        <div className="">
          <img src={cat4} alt="" />
        </div>
        <div className="">
          <img src={cat5} alt="" />
        </div>
      </Slider>

      {/* team */}
      <div className='conatiner team'>
        <div className='team_intro'>
          <p className='tem_head' data-aos="fade-up">OUR TEAM</p>
          <p className='tem_cont text-center ' data-aos="zoom-in">The Slow Mo team has extensive and diverse experience ranging from feature film and games to online marketplaces and web3 development.</p>
        </div>

        <div className='container tem_par'>
          <div className="container">
            <div className='row mx-0'>
              <div className="mem_intro col-lg-6 col-md-12 col-12">
                <img className='sml_cats' src={small_cat1} alt="" data-aos="flip-right" />
                <div className='mem_content' data-aos="zoom-in">
                  <p className='name fs-5 mb-0' style={{ fontWeight: "750" }}>OHMATTY / MATHIAS S. GAUSTAD</p>
                  <p className='position fs-5 mb-0' style={{ fontWeight: "bold", color: "#68DDB0" }}>PROJECT LEAD</p>
                  <p className='location' style={{ fontWeight: "bold", fontSize: "13px" }}>OSLO, NORWAY</p>
                  <p className='info smalltext' style={{ wordBreak: "break-all", fontWeight: "bold", fontSize: "13px" }}>Started CSGOShop.com, the first marketplace for CS:GO skins outside of Steam. Experience in business development and robotic process automation.</p>
                  <img className='icon1' src={icons1} alt="" style={{ width: "110px" }} />
                </div>
              </div>

              <div className="mem_intro col-lg-6 col-md-12 col-12">
                <img className='sml_cats' src={small_cat2} alt="" data-aos="flip-right" />
                <div className='mem_content' data-aos="zoom-in">
                  <p className='name fs-5 mb-0' style={{ fontWeight: "750" }}>LYU / LYU JINHANG</p>
                  <p className='position fs-5 mb-0' style={{ fontWeight: "bold", color: "#68DDB0" }}>BLOCKCHAIN ENGINEER</p>
                  <p className='location' style={{ fontWeight: "bold", fontSize: "13px" }}>LIAONING, CHINA</p>
                  <p className='info smalltext' style={{ wordBreak: "break-all", fontWeight: "bold", fontSize: "13px" }}>Fullstack Engineer with over 10 years of experience. Highly skilled with Web3 and Smart Contract Development.</p>
                  <img className='icon2' src={icons1} alt="" style={{ width: "110px" }} />
                </div>
              </div>

              <div className="mem_intro col-lg-6 col-md-12 col-12">
                <img className='sml_cats' src={small_cat3} alt="" data-aos="flip-right" />
                <div className='mem_content' data-aos="zoom-in">
                  <p className='name fs-5 mb-0' style={{ fontWeight: "750" }}>CIVILMUFFIN / TOM MCCALL</p>
                  <p className='position fs-5 mb-0' style={{ fontWeight: "bold", color: "#68DDB0" }}>ARTIST</p>
                  <p className='location' style={{ fontWeight: "bold", fontSize: "13px" }}>MONTRÉAL, CANADA</p>
                  <p className='info smalltext' style={{ wordBreak: "break-all", fontWeight: "bold", fontSize: "13px" }}>Lead VFX Artist in the movie industry working on Disney, Netflix, Riot, and more projects. Bringing Art Direction and experience in sculpting and look development to the team.</p>
                  <img className='icon3' src={icons2} alt="" style={{ width: "180px" }} />
                </div>
              </div>

              <div className="mem_intro col-lg-6 col-md-12 col-12">
                <img className='sml_cats' src={small_cat4} alt="" data-aos="flip-right" />
                <div className='mem_content' data-aos="zoom-in">
                  <p className='name fs-5 mb-0' style={{ fontWeight: "750" }}>KIORY / DARREN HARRISON</p>
                  <p className='position fs-5 mb-0' style={{ fontWeight: "bold", color: "#68DDB0" }}>ARTIST</p>
                  <p className='location' style={{ fontWeight: "bold", fontSize: "13px" }}>SOUTH WALES</p>
                  <p className='info smalltext' style={{ wordBreak: "break-all", fontWeight: "bold", fontSize: "13px" }}>Experienced 3D graphics designer with knowledge in next-gen asset creation and workflows. Bringing cutting edge hard surface work to the project.</p>
                  <img className='icon3' src={icons2} alt="" style={{ width: "180px" }} />
                </div>
              </div>

              <div className="mem_intro col-lg-6 col-md-12 col-12">
                <img className='sml_cats' src={small_cat5} alt="" data-aos="flip-right" />
                <div className='mem_content' data-aos="zoom-in">
                  <p className='name fs-5 mb-0' style={{ fontWeight: "750" }}>EL PAPI / OLIVER MUÑOZ</p>
                  <p className='position fs-5 mb-0' style={{ fontWeight: "bold", color: "#68DDB0" }}>DESIGNER</p>
                  <p className='location' style={{ fontWeight: "bold", fontSize: "13px" }}>MELBOURNE, AUSTRALIA</p>
                  <p className='info smalltext' style={{ wordBreak: "break-all", fontWeight: "bold", fontSize: "13px" }}>Visual Design Director by profession. In his 10+ years of experience, Oliver has solved design challenges for many local and global brands, across web and native apps.</p>
                  <img className='icon4' src={icons2} alt="" style={{ width: "180px" }} />
                </div>
              </div>

              <div className="mem_intro col-lg-6 col-md-12 col-12">
                <img className='sml_cats' src={small_cat6} alt="" data-aos="flip-right" />
                <div className='mem_content' data-aos="zoom-in">
                  <p className='name fs-5 mb-0' style={{ fontWeight: "750" }}>ALEJOMEVEZ / ALEJANDRO MEJIAS</p>
                  <p className='position fs-5 mb-0' style={{ fontWeight: "bold", color: "#68DDB0" }}>DESIGNER</p>
                  <p className='location' style={{ fontWeight: "bold", fontSize: "13px" }}>MELBOURNE, AUSTRALIA</p>
                  <p className='info smalltext' style={{ wordBreak: "break-all", fontWeight: "bold", fontSize: "13px" }}>Experience Design Director by profession. Creative and curious, helping some of the most recognised Australian brands and companies design products end-to-end from discovery to production.</p>
                  <img className='icon5' src={icons1} alt="" style={{ width: "110px" }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* leaves */}
      <div className='tem_lev col-12 col-lg-12 col-md-12'>
        <img src={team_leaves} alt="" />
      </div>

      {/* faqs */}
      <div className='faqs'>
        <h1 className='mb-5'>FAQS</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h1 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How many sloths are there?
              </button>
            </h1>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">10,000 SMSC Adult Sloths will exist on the Ethereum Blockchain.
                <br />
                <br />
                3,000 sloths are reserved for the whitelisted presale.
                50 sloths are reserved for giveaways and marketing purposes.
                4 sloths are reserved for the team.
                <br />
                <br />
                This means 6947 adult sloths are available for public sale.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Genders
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How much will the mint cost?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                When does the minting start?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                What should I do to prepare myself?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                How many sloths can I mint?
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeven">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                Where can I sell my sloth?
              </button>
            </h2>
            <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingEight">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                What are the second hand royalties?
              </button>
            </h2>
            <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingNine">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                How will you help endangered animals?
              </button>
            </h2>
            <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start smalltext">Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <div className='footer'>
        <div className='col-lg-3 col-md-3 col-3 d-flex justify-content-center'>
          <img src={logo} alt="" />
        </div>
        <div className='fot_main col-lg-4 col-md-4 col-5'>
          <div className='sub_foot'>
            <p className='ms-0'>Sanctuary</p>
            <p>Team</p>
            <p>Roadmap</p>
            <p>FAQs</p>
          </div>
          <p className='foot_cont smalltext'>A collection of the 10,000 most philoslothical creatures,
            <br />living on the Ethereum Blockchain.
            <br />
            2022 Slow Mo Sloth Club (SMSC). All rights reserved.</p>
        </div>
        <div className='foot_club col-lg-5 col-md-5 col-4'>
          <form class="d-lg-flex d-flex count_icon   border_nav mx-0"><button class="btn fw-bold btn_nav fs-6 " type="submit">Join the club</button><a href=""><i class="fab fa-twitter  fs-4 p-2 m-1" aria-hidden="true"></i></a><a href=""><i class="fab fa-instagram-square  fs-4 p-2  m-1" aria-hidden="true"></i></a><a href=""><i class="fab fa-discord fs-4  p-2 m-1" aria-hidden="true"></i></a></form>
          <p className='created mb-1 mt-4'>Website created by</p>
          <img src={uncommon} alt="" />
        </div>
      </div>

      <div className='mob_footer'>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center col-12 col-md-12'>
            <div className='col-md-3 col-3'>
              <img src={logo} alt="" style={{ width: "100px" }} />
            </div>
            <div className="d-flex justify-content-end col-9 col-md-9">
              <a href="#top"><button style={{ borderRadius: "40px", padding: "7px 15px", backgroundColor: "#E6FFF1", color: "#0D3727", fontWeight: "bold", fontSize: "20px", border: "none" }}>Back to top <img src={to_top} alt="" /></button></a>
            </div>
          </div>
          <div className='sml_fot_main col-md-12 col-12 mt-3'>
            <p>A collection of the 10,000 most philoslothical creatures, living on the Ethereum Blockchain.
              2022 Slow Mo Sloth Club (SMSC). All rights reserved.</p>
          </div>
          <div className='sml_foot_club col-md-12 col-12'>
            <p className='created2 mb-0 mt-4 text-lg-start text-center'>Webiste designed by</p>
            <img className='mb-4' src={uncommon} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
