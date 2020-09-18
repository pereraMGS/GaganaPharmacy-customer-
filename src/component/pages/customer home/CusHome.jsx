import React, { Component } from "react";
import "./CusHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from 'C:/Users/gimha/ITPproject/interfce/src/component/ImageSlider.jsx';
import Footer from "C:/Users/gimha/ITPproject/interfce/src/component/Footer.jsx"

export class CusHome extends Component {
  state = {
    prescriptionImage: "projectImages/arrow.jpg",
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ prescriptionImage: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { prescriptionImage } = this.state;

    return (
      <div>
        <ImageSlider/>
        <div className="container-fluid">

          <div className="homePage" align="center">
            <div className="container">
              <h1 className="heading">Add your prescription</h1>
              <div className="img-holder">
                <img
                  src={prescriptionImage}
                  alt=""
                  id="img"
                  className="img"
                ></img>
              </div>
              <input
                type="file"
                name="image-upload"
                id="input"
                accept="image/*"
                onChange={this.imageHandler}

              />
              <div className="lable">
                <lable htmlFort="input" className="image-upload">
                  <i className="material-icons">add_photo_alternate</i>
                  <h6>Choose your prescription</h6>
                </lable>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <h2>Special Promotions</h2>

          <div className="row" align="center">
            <div className="col-sm">
              <img
                src="projectImages/sanitizer.png"
                alt="sanitizer"
                width="150"
              ></img>
              <h6>Purel Hand Sanitizer</h6>
              <h3>Rs.250/-</h3>
              <div>
                <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
              </div>
            </div>

            <div className="col-sm">
              <img src="projectImages/mask.png" alt="mask" width="160"></img>
              <h6>Surgical face Mask</h6>
              <h3>Rs.100/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/mashine.png"
                alt="mashine"
                width="120"
              ></img>
              <h6>InfraRed Thermometer</h6>
              <h3>Rs.2500/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/handwash.png"
                alt="handwash"
                width="165"
              ></img>
              <h6>Dettol Handwash</h6>
              <h3>Rs.150/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img src="projectImages/gloves.png" alt="gloves" width="195"></img>
              <h6>Surgical Gloves</h6>
              <h3>Rs.125/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>
          </div>

          <br></br><br></br>
          <h2>Pain Management</h2>

          <div className="row" align="center">
            <div className="col-sm">
              <img
                src="projectImages/panadol.png"
                alt="panadol"
                width="170"
              ></img>
              <h6>Panadol Tab 144's</h6>
              <h3>Rs.220/-</h3>
              <div>
                <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
              </div>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/siddhalepa.png"
                alt="siddhalepa"
                width="170"
              ></img>
              <h6>Siddhalepa Balm 100g</h6>
              <h3>Rs.700/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/Voltaren.png"
                alt="Voltaren"
                width="255"
              ></img>
              <h6>Voltran 50g</h6>
              <h3>Rs.680/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/Strepsils.png"
                alt="Strepsils"
                width="155"
              ></img>
              <h6>Strepsils cool (24 pills)</h6>
              <h3>Rs.240/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img src="projectImages/Iodex.png" alt="Iodex" width="120"></img>
              <h6>Iodex Head Fast Balm 1X9G</h6>
              <h3>Rs.120/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>
          </div>

          <br></br><br></br>
          <h2>Ayurveda And Hurbal</h2>

          <div className="row" align="center">
            <div className="col-sm">
              <img
                src="projectImages/rajapura-handi-thela-.jpg"
                alt="rajapura"
                width="180"
              ></img>
              <h6>Rajapura Handi Thela</h6>
              <h3>Rs.2200/-</h3>
              <div>
                <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
              </div>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/chandanalepa.jpg"
                alt="chandanalepa"
                width="180"
              ></img>
              <h6>Chandanalepa Beauty Soap 100G</h6>
              <h3>Rs.195/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/peenus-thailaya.jpg"
                alt="peenus-thailaya"
                width="180"
              ></img>
              <h6>Peenas Thailaya</h6>
              <h3>Rs.670/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/ayurvedic-hair-oil.jpg"
                alt="ayurvedic"
                width="180"
              ></img>
              <h6>Ayurvedi Hair Oil</h6>
              <h3>Rs.650/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/chandanalepa-cream-.jpg"
                alt="chandanalepaCaream"
                width="180"
              ></img>
              <h6>Chandanalepa Cream</h6>
              <h3>Rs.250/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>
          </div>

          <br></br><br></br>
          <h2>Baby Care Range</h2>

          <div className="row" align="center">
            <div className="col-sm">
              <img
                src="projectImages/baby-cheramy.jpg"
                alt="babyCheramy"
                width="160"
              ></img>
              <h6>Baby Cheramy Funtime Cologne</h6>
              <h3>Rs.243/-</h3>
              <div>
                <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
              </div>
            </div>

            <div className="col-sm">
              <img src="projectImages/baby.jpg" alt="soap" width="160"></img>
              <h6>Baby Cheramy Soap 100g</h6>
              <h3>Rs.250/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/philips.jpg"
                alt="philips"
                width="160"
              ></img>
              <h6>Philips Avent Bottle Warmer</h6>
              <h3>Rs.12,950/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img
                src="projectImages/johnson-s-baby.jpg"
                alt="johnson-s-baby"
                width="160"
              ></img>
              <h6>Johnson's Baby Powder 200 g</h6>
              <h3>Rs.390/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>

            <div className="col-sm">
              <img src="projectImages/velona.jpg" alt="velona" width="160"></img>
              <h6>Velona Cuddles Wet Wipes (70 Pcs)</h6>
              <h3>Rs.475/-</h3>
              <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg" /></button>
            </div>
          </div>
          <br></br>
        </div>

        <div className="deliverImg">
          <img src="projectImages/delivery2.jpg" alt="deliver" width="100%" height="400"></img>
        </div>


      </div>

    );
  }
}

export default CusHome;
