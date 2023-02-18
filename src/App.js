import './App.css';
import DbTest from './components/DbTest';
import React from 'react';
import { BrowserRouter, Route, Switch,Router } from 'react-router-dom';
import Api from './components/Api';
// function App() {
//   return (
//     <div className="App">
//       <DbTest/>
//     </div>
//     // <Router>
//     //   <Switch>
//     //     <Route path="/" component={DbTest} />
//     //     <Route path="/apiTest" component={Api}/>
//     //   </Switch>
//     // </Router>
//   );
// }

const App = () =>{
  return(
    <>
    {/* <DbTest/> */}

    <Switch>
    <div className="App">
      <Route path="/" component={DbTest} exact/>
      <Route path='/apitest' component={Api}/>
      </div>
    </Switch>
    </>
  )
}
export default App;
