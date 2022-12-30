import Quiz from "../img/quiz.svg"
import "./welcome.css"
import { useContext } from "react"
import { QuizContext } from "../context/quiz"

export const Welcome  = () =>{
 //quizState eu pego os valores e o dispatch eu altero os valores 
  const [quizState, dispatch] = useContext(QuizContext);


  return(
    <div id="welcome">
      <h2>Seja bem vindo!</h2>
      <p> Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz}  alt="quiz"/>
    </div>
  )
}