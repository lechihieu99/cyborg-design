import React, { Component , lazy , Suspense } from "react";
import Header from "./components/App/header";
import Loading from "./loading";

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
  const MainProfile = lazy( () => delayForDemo(import ('./components/Profile/mainProfile.js')));
export default class Profile extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div className="profileContain">
                <Suspense fallback={<Loading />} >
                <Header id={4}/>
                <MainProfile />
                <div id='footer'>
                    <div>Copyright © 2036 Cyborg Gaming Company. All rights reserved.</div>
                    <div>Re-Design: Lê Chí Hiếu</div>
                </div>
                </Suspense>
            </div>
        );
    }
}
