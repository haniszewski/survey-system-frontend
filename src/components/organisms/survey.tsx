import SurveyForm from "../atoms/survey/survey-form";
import QuestionList from "../molecules/question-list/question-list";

const Survey = ({ questions }: { questions: Question[] }) => {
  return (
    <SurveyForm>
      <QuestionList questions={questions} />
    </SurveyForm>
  );
};

export default Survey;
