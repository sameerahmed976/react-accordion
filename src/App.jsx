import questions from "./data";
import Question from "./Question";
import "./style/style.css";

function App() {
  return (
    <main className="app">
      <section className="accordion__container">
        <section className="accordion__left">
          <h1 className="accordion__heading">
            Questions And Answers About Login
          </h1>
        </section>
        <section className="right">
          {questions.map((question) => {
            return <Question {...question} key={question.id} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
