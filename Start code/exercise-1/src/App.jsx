import Header from "./components/Header";
import Score from "./components/Score";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header name="PN School"></Header>

      <main className="scores-container">
        <Score course_name="Java" students={JAVA_RESULTS}></Score>
        <Score course_name="Python" students={PYTHON_RESULTS}></Score>
        <Score course_name="HTML" students={HTML_RESULTS}></Score>
        <Score course_name="English" students={ENGLISH_RESULTS}></Score>
      </main>
    </>
  );
}

export default App;
