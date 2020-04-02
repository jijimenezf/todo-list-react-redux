import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from './todoListRedux'

import List from './List'
import Input from './Input'

class TodoContainer extends Component {

  onRemoveItem = (itemId) => {
    this.props.removeItemFromList(itemId);
  };

  updateList = (record) => {
    this.props.updateTodoList(record);
  };

  render() {
    const { todos } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text style={[styles.header, styles.title]}>Clasic To-Do List</Text>
        <Input
          placeholder="Enter the address for the next item"
          onSubmit={this.updateList}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    todos: state.todos,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Add a new item
    updateTodoList: (record) => dispatch(actionCreators.add(record)),
    // Remove the item using the id
    removeItemFromList: (itemId) => dispatch(actionCreators.remove(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
