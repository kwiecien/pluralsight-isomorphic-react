import {createStore} from 'redux';
import {identity} from 'lodash';

export default function (defaultState = {
    test: "Test Value"
}) {
    return createStore(identity, defaultState);
}
