import React from 'react';
import {connect} from 'react-redux';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import {Route, Link} from "react-router-dom";

const AppDisplay = () => (
    <div>
        <div>
            <Link to={`/`}>
                <h1>
                    Isomorphic React
                </h1>
            </Link>
        </div>
        <div>
            <Route exact path="/" render={() => <QuestionList/>}/>
            <Route exact path="/questions/:id"
                   render={({match}) => <QuestionDetail
                       question_id={match.params.id}/>}
            />
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(AppDisplay);