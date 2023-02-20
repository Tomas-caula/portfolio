import './card.css';
import github from "../../github.png"
import instagram from "../../instagram.png"



function Card(props) {
  const ig = props.instagram
  const git = props.github

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
              {ig ? 
                (
                <a href= {ig}>
                <img src={instagram}/>
                </a>
                ):null
              }
              {git ?(
                 <a href= {props.github}>
                 <img src={github}/>
               </a>
              ):null

              }             
               
              </div>
          </div>
        </div>
   
  );
}

export default Card; 
