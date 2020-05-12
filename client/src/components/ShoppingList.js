
import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v1 as uuid } from "uuid";
import { connect } from 'react-redux';
import { getItems, deleteItem, addItem } from '../actions/itemActions'
import PropTypes from 'prop-types';

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  onAddClick = () => {
    const name = prompt('Enter Item');
    this.props.addItem({ id: uuid(), name });
    console.log({ id: uuid(), name });
  }

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Button
          color="dark" style={{ marginBottom: '2rem' }}
          onClick={this.onAddClick.bind(this)}>
            {/* () => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }} */}
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}>
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, addItem }
)(ShoppingList);
