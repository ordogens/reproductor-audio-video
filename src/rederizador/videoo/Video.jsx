import "./Video.css";
import afirmaciones from "../../../public/video/afirmaciones.mp4";
import modificada from "../../../public/video/modificada.mp4";
import Freeride from "../../../public/video/Freeride.mp4";
import system from "../../../public/video/system.mp4";
import BrosInjetada from "../../../public/video/brosInjetada.mp4";
import yamaha from "../../../public/video/Yamaha.mp4";
import HondaC90 from "../../../public/video/HondaC90.mp4";
import Honda70 from "../../../public/video/Honda70.mp4";
import SubaruRS from "../../../public/video/SubaruRS.mp4";

export const Video = () => {
  return (
    <div className="Video">
      <input className="imput" type="text" placeholder="🔎" />
      <button className="btn">Search</button>
      <span className="spann">
        <div>
          <h2>Subaru RS</h2>
          <video controls>
            <source src={SubaruRS} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Afirmaciones</h2>
          <video controls>
            <source src={afirmaciones} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Modificada</h2>
          <video controls>
            <source src={modificada} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Freeride</h2>
          <video controls>
            <source src={Freeride} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>system</h2>
          <video controls>
            <source src={system} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Bros injetada</h2>
          <video controls>
            <source src={BrosInjetada} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Yamaha</h2>
          <video controls>
            <source src={yamaha} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Honda C90</h2>
          <video controls>
            <source src={HondaC90} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Honda 70</h2>
          <video controls>
            <source src={Honda70} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Honda 70</h2>
          <video controls>
            <source src={Honda70} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </span>
    </div>
  );
};
