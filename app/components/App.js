import React from 'react';
import SplitPane from './helpers/SplitPane';

const styleA = { background: '#aaa4ba' };


class App extends React.Component {
    render (){
        return (
            <SplitPane split='vertical' defaultSize='20%' pane1Style={styleA}>
                <div>
                    <h3 style={{textAlign: 'center'}}>Links about Me</h3>
                    <div style={{textAlign: 'center'}}><a href='https://www.linkedin.com/in/kallin-khan-454521b9/'>LinkedIn</a></div>
                    <div style={{textAlign: 'center'}}><a href='https://github.com/kallinkhan'>Github</a></div>
                    <div style={{textAlign: 'center'}}><a href='https://twitter.com/kallinkhan'>Twitter</a></div>
                </div>
                <div>
                    <h1>Welcome To My Webpage!</h1>
                    <div>-Began learning JavaScript for my job and decided to make my own website</div>
                    <div>-Practicing of JavaScript and ReactJS</div>
                    <div>-Spent a lot of time figuring out the "right" framework to build this on, hope I chose well!</div>
                    <div>-Feel free to email me at kallinkhan@gmail.com if you have any comments/suggestions</div>
                    <div>-Began development on 9/23/17</div>
                </div>

            </SplitPane>
        )
    }
}

export default App;
