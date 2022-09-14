import {  applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;