import React from 'react';
import { connect } from 'react-redux';
import SurveyNavBar from './../containers/SurveyNavBar';
import { fetchSurvey } from '../actions/edit_survey'

class EditSurveyPage extends React.Component {
  loadData() {
    this.props.fetchSurvey(this.props.surveyId);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.surveyId !== prevProps.surveyId) {
      this.loadData();
    }
  }


  render() {
    return (
        <div>
          <div>
            <SurveyNavBar/>
          </div>
          {this.props.children}
        </div>
    );
  }
}

export default connect((state, { params }) => ({
  surveyId: params.surveyId
}), {
  fetchSurvey
})(EditSurveyPage);
