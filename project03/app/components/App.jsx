import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is the name of the president?',
          choices: [
            {
              id: 'a',
              text: 'Obama'
            },
            {
              id: 'b',
              text: 'Eduard'
            },
            {
              id: 'c',
              text: 'Kristian'
            },
            {
              id: 'd',
              text: 'Lauri'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: 'What is flag color?',
          choices: [
            {
              id: 'a',
              text: 'green and white'
            },
            {
              id: 'b',
              text: 'black'
            },
            {
              id: 'c',
              text: 'blue and red and white'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is the state of San Francisco?',
          choices: [
            {
              id: 'a',
              text: 'Arizona'
            },
            {
              id: 'b',
              text: 'Florida'
            },
            {
              id: 'c',
              text: 'Oregan'
            },
            {
              id: 'd',
              text: 'California'
            }
          ],
          correct: 'd'
        },
        {
          id: 4,
          text: 'What is your friends name?',
          choices: [
            {
              id: 'a',
              text: 'Alex or Ali tonsi'
            },
            {
              id: 'b',
              text: 'Bobby'
            },
            {
              id: 'c',
              text: 'Mike'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    };
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
    }

    return (
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
      </div>
    )
  }
}

export default App;