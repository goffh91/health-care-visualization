import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
    Route,
    Router,
    Switch,
    withRouter
} from 'react-router-dom';

import App from './pages/App';

const AppRouter = props => {
    const { location, history } = props;
    return (
        <TransitionGroup className='wrapper'>
            <CSSTransition
                key={location.key}
                classNames='fade'
                timeout={500}
            >
                <Router history={history}>
                    <Switch location={location}>
                        <Route path={'/'} component={App}/>
                    </Switch>
                </Router>
            </CSSTransition>
        </TransitionGroup>
    );
}

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(
    {

    },
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AppRouter));
