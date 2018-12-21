import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import * as Constants from 'Utility/Constants';
import * as Actions from 'Resources/Actions';
import { DragDropTypes } from 'Resources/DragDropTypes';
import Draggable, { DraggableCore } from 'react-draggable';

const mapTileTarget = {
  drop(props, monitor) {
    let item = monitor.getItem();
    props.deleteObject(item.id, DragDropTypes.MAP_TILE);
  }
}

const mapTileCollector = (connect, monitor) => {
  return {
    mapTileConnectDropTarget: connect.dropTarget()
  }
}

@DropTarget(DragDropTypes.MAP_TILE, mapTileTarget, mapTileCollector)
class LeftControlPanel extends Component {

  render() {
    let { mapTileConnectDropTarget } = this.props;
    return mapTileConnectDropTarget(
      <div>
        <div style={{
            marginBottom: "3cm"
          }}/>
        <Draggable><img src={Constants.IMAGES_OTHER + "Trash.png"} width="50px" align="right"></img></Draggable>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteObject: (id, type) => dispatch(Actions.getAction(Actions.DELETE_OBJECT)(id, type))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftControlPanel);
