import React, { PropTypes } from 'react';
import { QuestionTypes } from '../../constants/Questions';
import SingleLineText from './questions/SingleLineText';
import MultiChoice from './questions/MultiChoice';

const questionMap = {
  [QuestionTypes.OPENENDED]: (props) => {
    return <SingleLineText {...props}/>
  },
  [QuestionTypes.MULTIPLECHOICE]: (props) => {
    return <MultiChoice {...props}/>
  }
};

class QuestionWrapper extends React.Component {
  render() {
    const { question } = this.props;
    var QuestionComponent = questionMap[question.type](question);
    var classNames = 'question clearfix';

    return (
        <div className={classNames}>
          {QuestionComponent}
        </div>
    )
  }
}

QuestionWrapper.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionWrapper;
