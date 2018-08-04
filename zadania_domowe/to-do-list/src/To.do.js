import React from 'react';

class ToDo extends React.Component {
  state = {expanded: false};

  render() {
    const {expanded} = this.state;

    if(expanded) {
      return (
        <div>
          <h1>
            <input id="input"type="text" ref={(input) => this.textInput = input} />
<button onClick={this.addTask}>Add</button>
          </h1>
          <button onClick={() => this.setState({expanded: false})>cancel</button>
        </div>
      );
    } else {
        return <div onClick={() => this.setState({expanded: true})>add task</div>
    }
  }
}
}
export default ToDo;