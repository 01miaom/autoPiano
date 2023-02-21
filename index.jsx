const {useMatch, useParams, useLocation} = ReactRouterDOM;
const {BrowserRouter, Routes, Route, Link} = ReactRouterDOM;

var currentKey = 0;

const key = [
    
    {id: 'c2', url:'/a49.mp3', black: [{id: 'c#2', url:'b49.mp3'}]},
    {id: 'd2', url:'/a50.mp3', black: [{id: 'd#2', url:'b50.mp3'}]},
    {id: 'e2', url:'/a51.mp3', black: []},
    {id: 'f2', url:'/a52.mp3', black: [{id: 'f#2', url:'b52.mp3'}]},
    {id: 'g2', url:'/a53.mp3', black: [{id: 'g#2', url:'b53.mp3'}]},
    {id: 'a2', url:'/a54.mp3', black: [{id: 'a#2', url:'b54.mp3'}]},
    {id: 'b2', url:'/a55.mp3', black: []},
    
    
    {id: 'c3', url:'/a56.mp3', black: [{id: 'c#3', url:'b56.mp3'}]},
    {id: 'd3', url:'/a57.mp3', black: [{id: 'd#3', url:'b57.mp3'}]},
    {id: 'e3', url:'/a48.mp3', black: []},
    {id: 'f3', url:'/a81.mp3', black: [{id: 'f#3', url:'b81.mp3'}]},
    {id: 'g3', url:'/a87.mp3', black: [{id: 'g#3', url:'b87.mp3'}]},
    {id: 'a3', url:'/a69.mp3', black: [{id: 'a#3', url:'b69.mp3'}]},
    {id: 'b3', url:'/a82.mp3', black: []},
    
    {id: 'c4', url:'/a84.mp3', black: [{id: 'c#4', url:'b84.mp3'}]},
    {id: 'd4', url:'/a89.mp3', black: [{id: 'd#4', url:'b89.mp3'}]},
    {id: 'e4', url:'/a85.mp3', black: []},
    {id: 'f4', url:'/a73.mp3', black: [{id: 'f#4', url:'b73.mp3'}]},
    {id: 'g4', url:'/a79.mp3', black: [{id: 'g#4', url:'b79.mp3'}]},
    {id: 'a4', url:'/a80.mp3', black: [{id: 'a#4', url:'b80.mp3'}]},
    {id: 'b4', url:'/a65.mp3', black: []},
    
    /*
    {id: 'c5', url:'./a87.mp3', black: [{id: 'c#5', url:'b56.mp3'}]},
    {id: 'd5', url:'./a68.mp3', black: [{id: 'd#5', url:'b56.mp3'}]},
    {id: 'e5', url:'./a70.mp3', black: []},
    {id: 'f5', url:'./a71.mp3', black: [{id: 'f#5', url:'b56.mp3'}]},
    {id: 'g5', url:'./a72.mp3', black: [{id: 'g#5', url:'b56.mp3'}]},
    {id: 'a5', url:'./a74.mp3', black: [{id: 'a#5', url:'b56.mp3'}]},
    {id: 'b5', url:'./a75.mp3', black: []},
    
    
    {id: 'c3', url:'./a56.mp3', black: [{id: 'c#3', url:'b56.mp3'}]},
    {id: 'd3', url:'./a56.mp3', black: [{id: 'd#3', url:'b56.mp3'}]},
    {id: 'e3', url:'./a56.mp3', black: []},
    {id: 'f3', url:'./a56.mp3', black: [{id: 'f#3', url:'b56.mp3'}]},
    {id: 'g3', url:'./a56.mp3', black: [{id: 'g#3', url:'b56.mp3'}]},
    {id: 'a3', url:'./a56.mp3', black: [{id: 'a#3', url:'b56.mp3'}]},
    {id: 'b3', url:'./a56.mp3', black: []},
    */
]//cdefgab


//乐谱
const music = [7,1,2,3,3,5,3,3,
               7,1,2,3,2,5,3,2,3,1,2,7,1,5]


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
                        <White i={index}/>
                        {key.black.map((black) =>{
                            return(
                                <Black i={index}/>
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
    keyclick(i){
        console.log(i)
    }
    render() {
        let i = this.props.i; 
        return (
                <div className="blackkey" onClick={(e)=>this.keyclick(i)}></div>
        );
    }
}

class White extends React.Component {
    //normal play
    keyclick(i){
        
        var sound = new Howl({
            src: ['./Assets'+key[i].url]
            //src: ['../Assets/'+key[i].url]
        });
        sound.play()
    }
    //auto play
    keyauto(i){
        
        if(currentKey > music.length){
            currentKey = 0;
        }
        
        i = music[currentKey]
        currentKey = currentKey + 1;
        
        var sound = new Howl({
            src: ['./Assets'+key[i].url]
        });
        sound.play()
    }
    render() {
        let i = this.props.i; 
        return (
                <div className="whitekey" onClick={(e)=>this.keyauto(i)}></div>      
        );
    }
}





ReactDOM.render(<App name="piano"/>, document.querySelector("#app"));
