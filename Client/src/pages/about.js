import React from "react";
import Navbar from "../Mycomps/Navbar";
import Footerc from "../Mycomps/Footer";
import "../stylesheets/About.css"; // Import the CSS file
import imag1 from "./propics/vishesh.png";
import imag2 from "./propics/rohan.png";
import imag3 from "./propics/shyam.png";
import imag4 from "./propics/tanay.png";
import imag5 from "./propics/kartik.png";
function About() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="about-section">
          <h1>About Us</h1>
          <p>
            "Our Company StockScope comprises of five talented and
            motivated individuals, each bringing a unique set of skills and
            qualities to the group. It aims to make the process of trading stocks a little
            less daunting by using the power of Artificial Intelligence. We have
            to tried to predict stock prices and movement using LSTM Neural
            Network to predict future prices of the stock and BERTA model and
            Technical Analysis to predict the future movement of price."
          </p>
          <p></p>
        </div>

        <h2
          style={{ textAlign: "center", fontSize: "35px", color: "white" }}
          aaa
        >
          <u />
          <br></br>
          Meet Our Team
          <br></br>
          <br></br>
          <u />
        </h2>

        <div className="row">
          <div className="column">
            <div className="card card5">
              <img
                src={imag1}
                alt="Jane"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container5" style={{textAlign:'center'}}>
                <h2>Vishesh Gupta</h2>
                <p className="title">Problem Solver</p>
                <p>
                  Vishesh Gupta is our go-to 'Problem Solver', known for his
                  witty humor and problem solving skills .<br></br>
                </p>
                <p>vishesh_g@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/vishesh-gupta-77b0342b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card1">
              <img
                src={imag2
                }
                alt="Alind"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container1" style={{textAlign:'center'}}>
                <h2>Rohan Gupta</h2>
                <p className="title">Tech Genius</p>
                <p>
                  {" "}
                  Rohan Gupta, the 'Tech Genius',who excels
                  at creative solutions and new technology.
                </p>
                <p>rohan_g@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/rohan-gupta-68bba5283/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card2">
              <img
                src={imag3}
                alt="shyam"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container2" style={{textAlign:'center'}}>
                <h2>Shyam Agarwal</h2>
                <p className="title">Dev Genius</p>
                <p>
                  Shyam Agarwal, affectionately known as 'Dev-genius,' brings a
                  sense of leadership and reliability.
                </p>
                <p>shyam_da@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/shyam-agarwal-68542028a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card3">
              <img
                src={imag4}
                alt="Tanay"
                style={{ width: "80%" , alignSelf:"center" }}
              />
              <div className="container container3" style={{textAlign:'center'}}>
                <h2>Tanay Kapadia</h2>
                <p className="title">Front end Expert</p>
                <p>
                  Tanay Kapadia, or 'Front End Expert,' adds a touch of creativity
                  and out-of-the-box thinking.<br></br>
                </p>
                <p>tanay_k@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/tanay-kapadia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card4">
              <img
                src={imag5}
                alt="Kartik"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container4" style={{textAlign:'center'}}>
                <h2>Kartik Sarda</h2>
                <p className="title" style={{textAlign:'center'}}>ML Lover</p>
                <p>
                  Kartik Sarda, the 'ML Lover,' is known for his strategic mindset
                  and determination.<br></br>
                </p>
                <p>kartik_s@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/kartik-sarda-6606362a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerc />
    </div>
  );
}

export default About;
