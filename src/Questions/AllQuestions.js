import QuestionPreview from "./QuestionPreview";
import "./QuestionPreview"
import "./AllQuestions.css"
import questions from './questions';
import Navbar from "../HeaderFooter/Navbar";
function AllQuestions() {
  var questionDetails = Object.keys(questions).map(function (key) {
    return questions[key];
  });
  return (
    <div>
      <Navbar />
      <QuestionPreview questionDetails={questionDetails} />
    </div>
  );
}

export default AllQuestions;
