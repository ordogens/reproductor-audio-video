import "./audio.css";
import notions from "../../../public/audio/notions.mp3";
import artics from "../../../public/audio/artic-monkeys.mp3";
import amor from "../../../public/audio/amor-de-siempre.mp3";
import artics1 from "../../../public/audio/artic-monkeys1.mp3";
import aurora from "../../../public/audio/aurora.mp3";
import camino from "../../../public/audio/el-camino-de-tu-ombligo.mp3";
import burn from "../../../public/audio/burn-to-die.mp3";
import cinco from "../../../public/audio/505.mp3";
import oscuro from "../../../public/audio/el-lado-oscuro.mp3";
import hoy from "../../../public/audio/hoy-por-hoy.mp3";
import distancia from "../../../public/audio/la-distancia.mp3";
import lover from "../../../public/audio/lover-day.mp3";
import ojos from "../../../public/audio/mis-ojos-no-odian-ver.mp3";
import odio from "../../../public/audio/odio-al-ser-humano.mp3";
import ride from "../../../public/audio/ride.mp3";
import save from "../../../public/audio/save-your-tears.mp3";
import buses from "../../../public/audio/no-buses.mp3";

export const Audio = () => {
  return (
    <div className="Audio">
      <input className="input2" type="text" placeholder="🔎" />
      <button className="btn2">Search</button>
      <div className="aud">
        <h3 className="Mus">musica rara</h3>
        <audio controls>
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>

        <h3 className="Mus">notions</h3>
        <audio controls>
          <source src={notions} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>

        <h3 className="Mus">Artic monkeys</h3>
        <audio controls>
          <source src={artics} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <h3 className="Mus">amor de siempre</h3>
        <audio controls>
          <source src={amor} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <h3 className="Mus">artic monkeys1</h3>
        <audio controls>
          <source src={artics1} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <h3 className="Mus">run aurora</h3>
        <audio controls>
          <source src={aurora} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <h3 className="Mus">el camino de tu ombligo</h3>
        <audio controls>
          <source src={camino} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <h3 className="Mus">burn to die</h3>
        <audio controls>
          <source src={burn} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <h3 className="Mus">no buses</h3>
        <audio controls>
          <source src={buses} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>

      <div className="aud2">
        <div className="Mu2">
          <h3 className="Mus">505</h3>
          <audio controls>
            <source src={cinco} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">lado oscuro</h3>
          <audio controls>
            <source src={oscuro} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">Hoy por hoy</h3>
          <audio controls>
            <source src={hoy} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">la distancia</h3>
          <audio controls>
            <source src={distancia} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">lover day</h3>
          <audio controls>
            <source src={lover} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">tengo dias pensando en ti</h3>
          <audio controls>
            <source src={ojos} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">odio al ser humano</h3>
          <audio controls>
            <source src={odio} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">ride</h3>
          <audio controls>
            <source src={ride} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <h3 className="Mus">save your tears</h3>
          <audio controls>
            <source src={save} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </div>
  );
};
