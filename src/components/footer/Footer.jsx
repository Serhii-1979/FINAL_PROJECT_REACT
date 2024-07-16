import "./footer.css";
import whatsapp from "../../assets/svg/ic-whatsapp.svg";
import instagram from "../../assets/svg/ic-instagram.svg";
import map from "../../assets/images/map.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_title">
        <p>Contact</p>
      </div>
      <div className="footer_container">
        <div className="footer_info">
          <div className="footer_info-cards">
            <div className="footer_info-phone">
              <p className="footer_info-phone-title">Phone</p>
              <p className="footer_info-phone-numer">+49 30 915-88492</p>
            </div>
            <div className="footer_info-social">
              <p className="footer_info-phone-title">Social</p>
              <div className="footer_info-phone-img">
                <img src={instagram} alt="img" />
                <img src={whatsapp} alt="img" />
              </div>
            </div>
          </div>
          <div className="footer_info-cards">
            <div className="footer_info-phone">
              <p className="footer_info-phone-title">Address
</p>
              <p className="footer_info-phone-numer">Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
            </div>
            <div className="footer_info-social">
              <p className="footer_info-phone-title">Working Hours</p>
              <p className="footer_info-phone-numer">
                24 hours a day
              </p>
            </div>
          </div>
        </div>
        <div className="footer_map">
            <img src={map} alt="img" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
