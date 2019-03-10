import React from 'react';
import NewSurvey from '../containers/NewSurvey';
import SurveyList from '../containers/SurveyList';
import UploadSurvey from '../containers/UploadSurvey';

class UserSurveysPage extends React.Component {
  render() {
    return (
        <div className="container">
        <NewSurvey />
        <UploadSurvey />
          <SurveyList/>
        </div>
    );
  }
}

export default UserSurveysPage;
