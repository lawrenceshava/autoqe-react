import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import {HashLink as Link} from 'react-router-hash-link';

export default class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <ListGroupItem>
        <Link to={`/contact/${contact.id}`}>          
          <h4>{contact.name}</h4>
        </Link>
      </ListGroupItem>
    );
  }
}
