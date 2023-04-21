import MenuItem from "../MenuItem/menu-items";
import "./menu.css";
function Menu (){
    return (
        <header className="menu-wrapper">
        <nav>
          <ul className="menu">
            <MenuItem 
                text='Inicio'
                link='/'
            />
            <MenuItem 
                text='Personajes'
                link='/personajes'
            />
            <MenuItem 
                text='Capitulos'
                link='/capitulos'
            />
            <MenuItem 
                text='Citas'
                link='/citas'
            />  
          </ul>
        </nav>
      </header>
    )

}

export default Menu