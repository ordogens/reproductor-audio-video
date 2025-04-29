import "./Renderizador.css";
import { Video } from "./videoo/Video";
import { Audio } from "./audioo/Audio";

export const Renderizador = () => {
  return (
    <div className="Renderizador">
        <Video/>
        <Audio/>    
    </div>
  )
}
