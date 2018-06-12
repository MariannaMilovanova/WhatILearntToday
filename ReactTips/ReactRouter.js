//both ways are equivivalent
//1
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Lending = () => <h2>Lending</h2>;
const Header = () => <h2>Header</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Lending} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route  path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;

//2
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Lending = () => <h2>Lending</h2>;
const Header = () => <h2>Header</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/" component={Lending} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;