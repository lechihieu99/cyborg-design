import React, { Component, Suspense , lazy } from 'react';
import Header from './components/App/header';
import Loading from './loading';

import './footer.css'

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const Main = lazy( () => delayForDemo(import ('./components/App/main-container.js')));
export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
}
  render() {
    return(
      <div className='container'>
        
        <Suspense fallback={<Loading />} >
        <Header id={0}/>
        <Main />
        <div id='footer'>
          <div>Copyright © 2036 Cyborg Gaming Company. All rights reserved.</div>
          <div>Re-Design: Lê Chí Hiếu</div>
        </div>
        </Suspense>
        
        
      </div>
    );
  }
}
