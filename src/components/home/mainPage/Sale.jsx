import "./sale.css";
import img41 from "../../../assets/images/img41.png";

function Sale() {
  return (
    <div className="sale_container">
      <div className="sale_cont">
        <h1>Sale</h1>
        <button className="sale_cont-line">
          <div className="mainCategories_line"></div>
          <p>All sales</p>
        </button>
      </div>
      <div className="sale_flex">
        <div className="sale_flex-box">
          <div className="sale_flex-box-img">
            <img src={img41} alt="img" />
          </div>
          <div className="sale_text">
            <p  className="sale_text-1">Dry Dog Food for Adult </p>
            <p className="sale_text-p">
              $80 <span>$100</span>
            </p>
          </div>
        </div>
        <div className="sale_flex-box">
          <div className="sale_flex-box-img">
            <img src={img41} alt="img" />
          </div>
          <div className="sale_text">
            <p  className="sale_text-1">Dry Dog Food for Adult </p>
            <p className="sale_text-p">
              $80 <span>$100</span>
            </p>
          </div>
        </div>
        <div className="sale_flex-box">
          <div className="sale_flex-box-img">
            <img src={img41} alt="img" />
          </div>
          <div className="sale_text">
            <p  className="sale_text-1">Dry Dog Food for Adult </p>
            <p className="sale_text-p">
              $80 <span>$100</span>
            </p>
          </div>
        </div>
        <div className="sale_flex-box">
          <div className="sale_flex-box-img">
            <img src={img41} alt="img" />
          </div>
          <div className="sale_text">
            <p  className="sale_text-1">Dry Dog Food for Adult </p>
            <p className="sale_text-p">
              $80 <span>$100</span>
            </p>
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
}
export default Sale;
