import "./App.css";
import Faqs from "./Faqs/Faqs";
import Slideshow from "./NewsAndAlerts/Slideshow";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import QuestionPreview from "./Questions/QuestionPreview";
import questions from "./Questions/questions";
import { Link } from "react-router-dom";
import Logo from "./cp1.png"
var arr = [];
while (arr.length < 3) {
  var r = Math.floor(Math.random() * 10) + 1;
  if (r === 10) r = 9
  if (arr.indexOf(r) === -1) arr.push(r);
}
const questionDetails = [questions[arr[0]], questions[arr[1]], questions[arr[2]]];
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="questions">
          <div className="questionCards">

            <QuestionPreview questionDetails={questionDetails} />
            <Link to="/allQuestions" ><div className="allQuestionsButton">All Questions</div></Link></div>
          <img className="policeLogo" src={Logo} alt="Chandigarh Police Logo" />

        </div>

        <Slideshow />
        <Faqs />
        <Footer />
      </div>
    </div>
  );
}
export default App;
