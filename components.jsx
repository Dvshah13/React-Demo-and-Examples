class MyAge extends React.Component {
	constructor() {
		super();
		this.state = {
		         age: this.age
		       }
	}
	render() {
		return (
			<div>
			<h3>What is your age?</h3>
			<p>Enter your age...</p>
			<form>
			<input type="text" onChange={this.handleChange} value={this.state.age} />
			<input type="submit" value="Submit" />
			</form>
			</div>
		)
	}
}
ReactDOM.render(<MyAge />, document.getElementById('container'));

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = {items: [], text: ''};
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.handleChange} value={this.state.text} />
//           <button>{'Add #' + (this.state.items.length + 1)}</button>
//         </form>
//       </div>
//     );
//   }
//
//   handleChange(e) {
//     this.setState({text: e.target.value});
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     var newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState((prevState) => ({
//       items: prevState.items.concat(newItem),
//       text: ''
//     }));
//   }
// }
//
// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }
//
// ReactDOM.render(<TodoApp />, document.getElementById('container'));

// class Coin extends React.Component {
//    constructor(){
//        super();
//         let x = Math.round(Math.random());
//        this.sides = [
//            'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
//            'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
//        ],
//        this.state = {
//            image: this.sides[x],
//            flipped: false
//        }
//         this.flipCoin = this.flipCoin.bind(this);
//    }
//
//    flipCoin() {
//         let x = Math.round(Math.random());
//         this.setState ({
//             image: this.sides[x],
// 			flipped: !this.state.flipped
//         });
//    }
//
//
//
//    render() {
//        return(
//            <div class="coin">
//            <img src={this.state.image} />
//             <br/>
//             <p><input type="submit" value="Flip Coin" onClick={this.flipCoin} /></p>
//            </div>
//        );
//        }
// }
// class Header extends React.Component{
// 	render(){
// 		return <div>I am the HEADER</div>;
// 	}
// }
//
//
// class Layout extends React.Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			number:3
// 		};
// 	}
//
// 	render(){
// 		return(
// 			<div>
//
// 				<Coin />
//
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<Layout />,
// 	document.getElementById('container')
// );
