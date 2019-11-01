import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider store={store}>
                    <Calculator/>
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
