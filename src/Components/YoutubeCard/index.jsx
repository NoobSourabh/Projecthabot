import React from "react";
import "./youtube.css";
import Checked from "../../assets/checked";
function Ytube() {
  return (
    <div className="card">
      <div className="row">
        <iframe
          className="video"
          src={"https://www.youtube.com/embed/i8tgRHXx4oQ"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <div className="col">
          <div className="tab">
            <div className="ele1">Buyer</div>
            <div className="ele">Supplier</div>
          </div>
          <div className="checkpoints">
            <div className="pts">
              <Checked className="check" />
              <div>Post your requirements.</div>
            </div>
            <div className="pts">
              <Checked className="check" />
              <div>Sit back for multiple suppliers to contact you.</div>
            </div>
            <div className="pts">
              <Checked className="check" />
              <div>
                Choose among the suppliers based on the ratings and reviews.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ytube;
