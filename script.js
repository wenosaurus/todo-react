class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind(this);
  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  clickHandler(event){
    let todos = this.state.list;
    todos.unshift(this.state.word);
    this.setState({ list: todos, word: "" });
  }

  deleteHandler(removeIndex){
    this.setState(state => ({
        list: this.state.list.filter((item, index) => index !== removeIndex)
    }));
  }

  render() {
    let todoItem = this.state.list.map((item, index) => {
        return (
            <li id={index}>{item}
            <button onClick={() => this.deleteHandler(index)}>Delete</button>
            </li>
            )
    })
      // render the list with a map() here
      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.clickHandler}>add item</button>
          <ul>{todoItem}</ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);
