import "./Video.css";
import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const [boton, setBoton] = useState("");

  const videoList = [
    { id: 1, name: "Subaru RS", src: SubaruRS },
    { id: 2, name: "Afirmaciones", src: afirmaciones },
    { id: 3, name: "Modificada", src: modificada },
    { id: 4, name: "Freeride", src: Freeride },
    { id: 5, name: "System", src: system },
    { id: 6, name: "Bros Injetada", src: BrosInjetada },
    { id: 7, name: "Yamaha", src: yamaha },
    { id: 8, name: "Honda C90", src: HondaC90 },
    { id: 9, name: "Honda 70", src: Honda70 },
  ];
  // Filtrar la lista de videos usando una expresión regular
  // y el término de búsqueda proporcionado por el usuario
  const filterWithRegex = (list, searchTerm) => {
    try {
      const regex = new RegExp(searchTerm, "i");
      return list.filter((item) => regex.test(item.name));
    } catch {
      return [];
    }
  };

  const filteredVideos = filterWithRegex(videoList, boton);

  return (
    <div className="Video">
      <input
        className="imput"
        type="text"
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          if (value.trim() === "") {
            setBoton(""); // Mostrar todos los videos si se borra el input
          }
        }}
        placeholder="🔎 Buscar video..."
      />

      <button className="btn" onClick={() => setBoton(search)}>
        Search
      </button>

      <div className="spann">
        {filteredVideos.map((video) => (
          <div key={video.id}>
            <h2>{video.name}</h2>
            <video controls>
              <source src={video.src} type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};
