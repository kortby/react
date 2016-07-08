import React from 'react';

class Results extends React.Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    var message;
    if (percent > 80) {
      message = 'Supereb!';
    } else if (percent > 60) {
      message = 'Good!'
    } else {
      message = 'That is Bad :(';
    }
    return (
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/">Take Again</a>
      </div>
    )
  }
}

export default Results;