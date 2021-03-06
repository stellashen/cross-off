import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listId = this.props.listId;
    if (listId) {
      return <Redirect to={`/lists/${listId}`} />;
    }
    return (
      <div className="main">
        <h1>Add a new list:</h1>
        <br/>
        <h4>Click <strong>"Add New List"</strong> on the left side.</h4>
        <br/>
        <h1>Add/View your tasks:</h1>
        <br/>
        <h4>Click your <strong>list name</strong> on the left side, to </h4>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h4>- add tasks to that list, </h4>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h4>- or view tasks under that list.</h4>
      </div>
    );
  }
}
