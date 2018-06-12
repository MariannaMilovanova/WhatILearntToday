import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(() => [], {}, applyMiddleware()); //first arg is reducer funct