import "./Home.css";
import ReactPlayer from "react-player";

const videos = [
  "https://www.youtube.com/watch?v=yEx-zsp7dBc",
  "https://www.youtube.com/watch?v=1J7n1pTzRwk",
  "https://www.youtube.com/watch?v=0nKjn2FORAo",
  "https://www.youtube.com/watch?v=vZ5HAE7RBZU",
  "https://www.youtube.com/watch?v=ZsNy9FAbB08",
  "https://www.youtube.com/watch?v=XtHbSAli2vQ",
  "https://www.youtube.com/watch?v=BFJNW245wx4",
  "https://www.youtube.com/watch?v=JGRXknyA8Jg",
  "https://www.youtube.com/watch?v=xet2cH-4BZI",
  "https://www.youtube.com/watch?v=c3KtI0uTXmU",
];

export const Home = () => {

  const duplicated = [...videos, ...videos, ...videos]; // Duplica los videos para el efecto loop

  return (
    <div className="Home">
      <div className="tittle">
        <p>
          Desarrollado por: <strong>Ordogen Arcila.</strong>
        </p>
        <p>🔊 Reproductor de música 🎶 y video 🎬</p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {duplicated.map((url, i) => (
            <div className="carousel-item" key={i}>
              <ReactPlayer
                url={url}
                controls
                width="100%"
                height="100%"
                className="video"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
