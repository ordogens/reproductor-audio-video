import "./Home.css";
import ReactPlayer from "react-player";

export const Home = () => {
  return (
    <div className="Home">
      <span className="tittle">
        <p>
          Desarrollado por: <strong>Ordogen Arcila.</strong>
        </p>
        <p>🔊Reproductor de musica🎶 y video🎬</p>
      </span>
      <span className="tittle2">
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=yEx-zsp7dBc"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=1J7n1pTzRwk&pp=ygUJcnVwYXRydXBh"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=0nKjn2FORAo&pp=ygUJcnVwYXRydXBh"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=vZ5HAE7RBZU&pp=ygUJcnVwYXRydXBh"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            className="video"
            url="https://www.youtube.com/watch?v=ZsNy9FAbB08&pp=ygUJcnVwYXRydXBh"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=XtHbSAli2vQ&pp=ygUOZWwgbGFkbyBvc2N1cm8%3D"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=BFJNW245wx4&pp=ygUVdG9kb3MgdGVuZW1vcyB1biBhbW9y"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JGRXknyA8Jg&pp=ygUbY29uc2VqbyBkZSBvcm8gY3JhY2sgZmFtaWx5"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=xet2cH-4BZI&pp=ygUUdmVuZ28gZGUgbGEgbW9udGHDsWE%3D"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="envoltura">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=c3KtI0uTXmU&pp=ygUPY29yYWNhbyBwYXJ0aWRv"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </span>
    </div>
  );
};
