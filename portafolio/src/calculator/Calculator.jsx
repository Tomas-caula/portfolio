
import { useState } from 'react';
import './App.css';

function Calculator() {
  const [data, setData] = useState (0)
  const numbers = [1, 2, 3, 4, 5 ,6, 7,8 ,9, 0 ]
  const simbols = ["+", "-", "*", "/"]

  function concat (e) {
      if (data == 0) {
        if(simbols.includes(e) ){
          return
        }
        else {
          setData (e)  
        }
        
      }

      else if (numbers.includes(e)) {

        const a = data
        const res = `${a}${e}`
        setData(res)
      }

      else if (simbols.includes(e)) {
        
           
              const leng = data.length
              console.log(leng)
              let ult; 
              if (leng == undefined) ( 
                ult = data
              )
              else {
              ult = data.charAt(leng - 1 )
              console.log(ult)
              }
              

              if (ult !== " ") {
                const a = data 
                const res = a + " " + e + " "
                setData (res)
              }
          

      
      }
      else {
        return
      }
  }


  function math () {
    const stringLength = data.length; // this will be 16

  if (data.charAt(stringLength - 1) == " ") {
    alert ("You can't")
    return
  }
  else {
    const math = data.split(" ")
    let result = 0
    while (math.length >= 3) {
      
      if (math[1] == "+") { 
        result = parseInt (math[0]) + parseInt (math[2])
      }
      else if (math[1] == "-") {
         result = parseInt (math[0]) - parseInt(math[2])
      }
      else if (math[1] == "*") {
         result = math[0] * math[2]
      }
      else if (math[1] == "/") {
        result = math[0] / math[2]
        
      }

      math.splice(0, 2)
      math.unshift(result)
      console.log("splice", math)
      
    }

    console.log(result)
    


  }
 
  }

  return (
    <div className="App">
        <div className="calculator display">
              <h1>{data}</h1>
        </div>
        <div className="calculator keyboard">
            <div className="numbers">
              
              {numbers.map ((e) => {
                return (
                    <div className="conteiner-button">
                      <button onClick={() => {
                        concat(e)
                      }}>{e}</button>
                    </div>

                )
              })

              }
              <div className="conteiner-button">
                <button onClick={() => math()}>=</button>
              </div>
              <div className="conteiner-button">
                <button onClick={() => setData(0)}>Del</button>
              </div>
            </div>
            <div className='simbols'>

                {simbols.map((e)=> {
                  return(
                    <div className="conteiner-button">
                      <button onClick={() => concat(e)}>{e}</button>
                    </div>
                  )
                })}
            </div>
          </div>
    </div>
  );
}

export default Calculator;
