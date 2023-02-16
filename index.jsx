const {useMatch, useParams, useLocation} = ReactRouterDOM;
const {BrowserRouter, Routes, Route, Link} = ReactRouterDOM;


const key = [
    /*
    {id: 'c2', black: [{id: 'c#2'}]},
    {id: 'd2', black: [{id: 'd#2'}]},
    {id: 'e2', black: []},
    {id: 'f2', black: [{id: 'f#2'}]},
    {id: 'g2', black: [{id: 'g#2'}]},
    {id: 'a2', black: [{id: 'a#2'}]},//缺素材了
    {id: 'b2', black: []},
    */
    
    {id: 'c3', url:'./a56.mp3', black: [{id: 'c#3', url:'b56.mp3'}]},//correct
    {id: 'd3', url:'./a56.mp3', black: [{id: 'd#3', url:'b56.mp3'}]},
    {id: 'e3', url:'./a56.mp3', black: []},
    {id: 'f3', url:'./a56.mp3', black: [{id: 'f#3', url:'b56.mp3'}]},
    {id: 'g3', url:'./a56.mp3', black: [{id: 'g#3', url:'b56.mp3'}]},
    {id: 'a3', url:'./a56.mp3', black: [{id: 'a#3', url:'b56.mp3'}]},
    {id: 'b3', url:'./a56.mp3', black: []},
    
    {id: 'c3', url:'./a56.mp3', black: [{id: 'c#3', url:'b56.mp3'}]},//correct
    {id: 'd3', url:'./a56.mp3', black: [{id: 'd#3', url:'b56.mp3'}]},
    {id: 'e3', url:'./a56.mp3', black: []},
    {id: 'f3', url:'./a56.mp3', black: [{id: 'f#3', url:'b56.mp3'}]},
    {id: 'g3', url:'./a56.mp3', black: [{id: 'g#3', url:'b56.mp3'}]},
    {id: 'a3', url:'./a56.mp3', black: [{id: 'a#3', url:'b56.mp3'}]},
    {id: 'b3', url:'./a56.mp3', black: []},
    
    {id: 'c3', url:'./a56.mp3', black: [{id: 'c#3', url:'b56.mp3'}]},//correct
    {id: 'd3', url:'./a56.mp3', black: [{id: 'd#3', url:'b56.mp3'}]},
    {id: 'e3', url:'./a56.mp3', black: []},
    {id: 'f3', url:'./a56.mp3', black: [{id: 'f#3', url:'b56.mp3'}]},
    {id: 'g3', url:'./a56.mp3', black: [{id: 'g#3', url:'b56.mp3'}]},
    {id: 'a3', url:'./a56.mp3', black: [{id: 'a#3', url:'b56.mp3'}]},
    {id: 'b3', url:'./a56.mp3', black: []},
    
    /*
    {id: 'c3', url:'./a56.mp3', black: [{id: 'c#3', url:'b56.mp3'}]},//correct
    {id: 'd3', url:'./a56.mp3', black: [{id: 'd#3', url:'b56.mp3'}]},
    {id: 'e3', url:'./a56.mp3', black: []},
    {id: 'f3', url:'./a56.mp3', black: [{id: 'f#3', url:'b56.mp3'}]},
    {id: 'g3', url:'./a56.mp3', black: [{id: 'g#3', url:'b56.mp3'}]},
    {id: 'a3', url:'./a56.mp3', black: [{id: 'a#3', url:'b56.mp3'}]},
    {id: 'b3', url:'./a56.mp3', black: []},
    */
]//cdefgab


class App extends React.Component {
render() {
return (
<> 
<React.StrictMode>
  <BrowserRouter>
      <div>
        <Routes>
      	 <Route path="/autoPiano/" element={<Ui/>} />
        </Routes>
      </div>
    </BrowserRouter>
</React.StrictMode>
</>
        );
    }
}

class Ui extends React.Component {
    render() {
        return (
            <div className="wrap">
                {key.map((key, index) =>{
                    return(
                        <div className="group">
                        <White />
                        {key.black.map((black, index) =>{
                            return(
                                <Black />
                            );
                        })}
                        </div>
                    );
                })
                }
            </div>
        );
    }
}

class Black extends React.Component {
    render() {
        return (
                <div className="blackkey"></div>
        );
    }
}

class White extends React.Component {
    render() {
        return (
                <div className="whitekey"></div>      
        );
    }
}





ReactDOM.render(<App name="piano"/>, document.querySelector("#app"));
