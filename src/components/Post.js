import React, {Component} from 'react';

export default class Post extends Component {
  render() {
    return (
      <div className="post">

        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          ldfjk kjgkjsdfdsl;kjfdskl lorem ipsum
        </div>
      </div>
    )
  }
}