import "./audio.css";
import { useState } from "react";
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
import so from "../../../public/audio/so-fe.mp3";

export const Audio = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const audioList = [
    {
      name: "musica rara",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    { name: "notions", src: notions },
    { name: "Artic monkeys", src: artics },
    { name: "amor de siempre", src: amor },
    { name: "artic monkeys1", src: artics1 },
    { name: "run aurora", src: aurora },
    { name: "el camino de tu ombligo", src: camino },
    { name: "burn to die", src: burn },
    { name: "505", src: cinco },
    { name: "lado oscuro", src: oscuro },
    { name: "Hoy por hoy", src: hoy },
    { name: "la distancia", src: distancia },
    { name: "lover day", src: lover },
    { name: "tengo dias pensando en ti", src: ojos },
    { name: "odio al ser humano", src: odio },
    { name: "ride", src: ride },
    { name: "save your tears", src: save },
    { name: "no buses", src: buses },
    { name: "so fe", src: so }
  ];

  const filterWithRegex = (list, query) => {
    try {
      const regex = new RegExp(query, "i");
      return list.filter((item) => regex.test(item.name));
    } catch {
      return [];
    }
  };

  const filteredAudios =
    query.trim() === "" ? audioList : filterWithRegex(audioList, query);

  return (
    <div className="Audio">
      <input
        className="input2"
        type="text"
        placeholder="🔎 Buscar audio..."
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          if (value.trim() === "") {
            setQuery(""); // Restaurar todos los audios
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setQuery(search);
          }
        }}
      />
      <button className="btn2" onClick={() => setQuery(search)}>
        Search
      </button>

      <div className="audio">
        {filteredAudios.map((audio, index) => (
          <div key={index}>
            <h3 className="Mus">{audio.name}</h3>
            <audio controls>
              <source src={audio.src} type="audio/mpeg" />
              Tu navegador no soporta la etiqueta de audio.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};
