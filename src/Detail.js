import React, { Component , lazy , Suspense} from "react";
import Header from "./components/App/header";
import Loading from "./loading";

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
  const Main = lazy( () => delayForDemo(import ('./components/Detail/mainDetail.js')));
export default class Detail extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div className="detailContain">
                <Suspense fallback={<Loading />} >
                <Header id={2}/>
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