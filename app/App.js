import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Routes from './config/Routes';

import css from './styles/style.scss'

render(<Routes />, document.getElementById('root'));
