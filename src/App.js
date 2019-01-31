import React from 'react';

class App extends React.Component {
  constructor(props) {
       super(props);

       this.state = {
          header: "Header from state...",
          content: "Content from state..."
       }
   }
   render() {
      return (
        <div>
           <h1>{this.state.header}</h1>
           <h2>{this.state.content}</h2>
        </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}
export default App;
