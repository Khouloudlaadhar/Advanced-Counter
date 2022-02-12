class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
            taps:0,
          
            
        }
        this.handleDecrement = this.handleDecrement.bind(this);
    }

 handleDecrement(){
    this.setState({taps: this.state.taps + 1}) ;
     if (this.state.count >0) {
       this.setState({count:this.state.count -1}) 
     }


 }

    
    render() {
        return (
            <div className="app">
                <div className="counter">
                    <h1>Counter</h1>
                    <h2 className="count">{this.state.count}</h2>
                    <h4 className="taps">Total taps: {this.state.taps}</h4>
                    <div>
                        <button onClick={this.handleDecrement}>Decrement -</button>
                        <button onClick={() => this.setState({ count: this.state.count + 1 ,taps: this.state.taps + 1})}>Increment +</button>
                    </div>
                    <div>
                        <button className="reset-count" onClick={() => this.setState({ count: this.state.count = 0 })}>Reset Count</button>
                        <button className="reset-all" onClick={() => this.setState({ count: this.state.count = 0 , taps: this.state.taps = 0  })}>Reset All</button>
                    </div>
                </div>
            </div>

        )
    }
}


class App extends React.Component {
    render() {
        return (
            
                <Counter />
           
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)