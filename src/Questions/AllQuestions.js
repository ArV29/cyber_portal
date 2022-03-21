import QuestionPreview from "./QuestionPreview";
import "./QuestionPreview"
import "./AllQuestions.css"
import questions from './questions';
import Navbar from "../Navbar/Navbar";
function AllQuestions() {
  var questionDetails = Object.keys(questions).map(function (key) {
    return questions[key];
  });
  return (
    <div >
      <Navbar />
      <div className="allQuestions">
        <QuestionPreview questionDetails={questionDetails} />
      </div>
    </div>
  );
}

export default AllQuestions;
