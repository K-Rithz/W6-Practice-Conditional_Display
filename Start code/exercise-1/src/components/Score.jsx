export default function Score({ course_name, students }) {
    return (
    <>
        <div className="scores">
          <h1>{course_name}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.firstName + student.lastName}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td className={checkScore(student.score) === "safe" ? "safe" : "warning"}>{student.score}</td>
                    </tr>
                ))}
            </tbody>
          </table>

          <div className="statistics">
            <div className="stat-item">
              <span className="stat-label">AVERAGE</span>
              <span className="stat-value">{calculateAvg({ students })}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">MIN</span>
              <span className="stat-value">{findMin({ students })}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">MAX</span>
              <span className="stat-value">{findMax({ students })}</span>
            </div>
          </div>
        </div>
    </>
    );
}

function checkScore(score) {
    if (score > 50) {
        return "safe";
    }
}

function calculateAvg({ students }) {
    let sum = 0;
    students.map((student) => sum += student.score);
    let avg = sum / students.length;
    return avg.toFixed(2);
}

function findMin({ students }) {
    let min = students[0].score;
    students.map((student) => {
        if (student.score < min) {
            min = student.score;
        }
    });
    return min;
}

function findMax({ students }) {
    let max = students[0].score;
    students.map((student) => {
        if (student.score > max) {
            max = student.score;
        }
    });
    return max;
}
