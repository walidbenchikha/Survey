import React from 'react';
import NewSurvey from '../containers/NewSurvey';
import SurveyList from '../containers/SurveyList';
import UploadSurvey from '../containers/UploadSurvey';

class UserSurveysPage extends React.Component {
  render() {
    return (
        <div className="container">
        <div className="row">
        <ul className="list-unstyled">
        <li className="col-md-3"><NewSurvey /> </li>
        <li className="col-md-3"><UploadSurvey /> </li>
        
        </ul>
        </div>
          <SurveyList/>
        </div>
    );
  }
}

export default UserSurveysPage;
