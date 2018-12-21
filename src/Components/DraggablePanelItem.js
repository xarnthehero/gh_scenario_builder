import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { Image } from 'react-bootstrap';
import { DragDropTypes } from 'Resources/DragDropTypes';

const mapSource = {
  beginDrag(props) {
    return { imageSource: props.imageSource };
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

@DragSource(DragDropTypes.PANEL_ITEM, mapSource, collect)
export default class DraggablePanelItem extends Component {

  componentDidMount() {
    //add image drag source?
  }

  render() {
    return this.props.connectDragSource(
      <div>
        <Image src={this.props.imageSource} width="100px"/>
      </div>
    );
  }

}
