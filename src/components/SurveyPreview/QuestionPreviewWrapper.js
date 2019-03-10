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

class QuestionPreviewWrapper extends React.Component {
  render() {
    const { question, onActive, onRemove, isActive, onClone, onUp, onDown, showUp, showDown } = this.props;
    var QuestionComponent = questionMap[question.type](question);
    var classNames = isActive ? 'active question clearfix' : 'question clearfix';

    return (
        <div onClick={() => { onActive(question._id) }} className={classNames}>
          {QuestionComponent}
          <div className="btn-group pull-right">
            {showUp ?
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={(e) => {
                      onUp(question._id);
                    }}>
                  <span className="glyphicon glyphicon-arrow-up"></span>
                </button> : ''
            }
            {showDown ? <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => onDown(question._id)}>
              <span className="glyphicon glyphicon-arrow-down"></span>
            </button> : ''}
            <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={(e) => { e.stopPropagation(); onClone(question._id); }}>
              <span className="glyphicon glyphicon-plus"></span>
            </button>
            <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => onRemove(question._id)}>
              <span className="glyphicon glyphicon-minus"></span>
            </button>
          </div>
        </div>
    )
  }
}

QuestionPreviewWrapper.propTypes = {
  question: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default QuestionPreviewWrapper;
