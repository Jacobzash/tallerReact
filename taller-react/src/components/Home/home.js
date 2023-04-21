import "./home.css";
import thebig from "../assets/the_big_bang.png";

export default function Inicio(){
    return (
    <div>
        <h1>The Big Bang Theory</h1>
        <img src={thebig} alt="The Big Bang Theory" />
        <h2>
        The Big Bang Theory (también conocida como La 
        teoría del Big Bang en Hispanoamérica o Big Bang1​ 
        en inglés) es una comedia de situación estadounidense
         estrenada el 24 de septiembre de 2007 y finalizada el 
         16 de mayo de 2019 por la cadena CBS. Fue producida por Warner Bros y Chuck Lorre.
        </h2>
        <h3>
        La segunda temporada iba a constar de veintidós episodios, pero debido a la huelga 
        de guionistas de Hollywood se redujo a diecisiete. La CBS empezó a emitir la segunda
         temporada en Estados Unidos el 22 de septiembre de 2008, la tercera comenzó el 21 de 
         septiembre de 2009 y la cuarta se estrenó el 23 de septiembre de 2010. La quinta, el 
         22 de septiembre de 2011, y la sexta, el 27 de septiembre de 2012.
        </h3>
    </div>
    )
}