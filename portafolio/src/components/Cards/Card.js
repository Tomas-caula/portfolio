import './card.css';
import github from "../../github.png"
import instagram from "../../instagram.png"



function Card(props) {
  return (
        <div className='card'>
          <div className='front face'>
            <img src={props.img}/>
            <h3>{props.title}</h3>
          </div>
          <div className='face back'>
              <h3>{props.title}</h3>
              <h3>{props.parrafo}</h3>
              <div className='link'> 
                <a href= {props.instagram}>
                  <img src={instagram}/>
                </a>
                <a href= {props.github}>
                  <img src={github}/>
                </a>
              </div>
          </div>
        </div>
   
  );
}

export default Card; 
