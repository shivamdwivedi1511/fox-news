import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import publicRoutes from './routes/publicRoutes';
import { getAllNewsSourceAction } from './actions';
import { Layout } from './components';

function App(props) {

  useEffect(() => {
    props.getAllNewsSourceAction();
  }, [])

  return (
    <div >
      <Layout>
        <Switch>
          {publicRoutes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => (
  {
    ...state
  });

export default connect(mapStateToProps, { getAllNewsSourceAction })(App);
