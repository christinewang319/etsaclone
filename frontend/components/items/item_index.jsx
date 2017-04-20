import React, { Component } from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { items, children } = this.props;

    return (
      <div className='items-index'>
        <h2>Browse our latest collections</h2>
        <ul>
          { items.map(item => <ItemIndexItem key={item.id} item={item} />)}
        </ul>
      </div>
    );
  }
}

export default ItemIndex;