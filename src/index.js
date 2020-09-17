require('file-loader?name=[name].[ext]!./index.html');
// import indexUrl from 'file-loader?name=[name].[ext]!./index.html';

import _ from 'lodash';
import './style.css';
import xx from './data.json';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack2'], ' ');
    element.classList.add('hello');

    console.log(xx);

    console.log(null ?? 5);

    return element;
}

document.body.appendChild(component());
