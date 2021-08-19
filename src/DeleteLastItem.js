import React from 'react';

class DeleteLastItem extends React.Component {
  render() {
    const { deleteLastItem, noItemsFound } = this.props;
    return (
      <button onClick={deleteLastItem} disabled={noItemsFound}>
        Delete Last Item
      </button>
    );
  }
}

export default DeleteLastItem;
