import React from "react";

import UserInterface from "./UserInterface";

export default class UserComponect extends React.Component<UserInterface, {}> {
  constructor(props: UserInterface) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>User Componect</h1>
        Hello, {this.props.name}
        <br /> You are {this.props.age} years old,
        <br />
        You live at: {this.props.address}
        <br />
        you were born: {this.props.dob.toDateString()}
      </div>
    );
  }
}
