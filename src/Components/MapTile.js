import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { DragSource } from 'react-dnd';
import { DragDropTypes } from 'Resources/DragDropTypes';
import Draggable, { DraggableCore } from 'react-draggable';

const mapSource = {
  beginDrag(props) {
    return { id: props.id };
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

@DragSource(DragDropTypes.MAP_TILE, mapSource, collect)
export default class MapTile extends Component {
  render() {

    const { x, y, connectDragSource, imageSource } = this.props;
    return connectDragSource(
      <div
        style={{
          /*opacity: isDragging ? 0 : 1,*/
          position: "absolute",
          top: y + "px",
          left: x + "px",
          /*transform: "rotate(90deg)"*/
        }}
      >
        <img src={imageSource} width="200px"/>
      </div>
    );
  }

}
