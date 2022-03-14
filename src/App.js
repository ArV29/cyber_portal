import "./App.css";
import Left from "./Middle/Left.js";
import Right from "./Middle/Right.js";
import Navbar from "./HeaderFooter/Navbar";
import Footer from "./HeaderFooter/Footer";
import QuestionPreview from "./Questions/QuestionPreview";
import questions from "./Questions/questions";
import { Link } from "react-router-dom";
import Logo from "./cp1.png"

const questionDetails = [questions[5], questions[6], questions[7]];
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="questions">
          <div className="questionCards">
            <QuestionPreview questionDetails={questionDetails} />
            <img className="policeLogo" src={Logo} />
          </div>
          <Link to="/allQuestions" ><div className="allQuestionsButton">All Questions</div></Link></div>
        <div className="middle">
          <Left />
          <Right />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
