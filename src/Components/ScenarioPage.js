import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import MapTileContainer from '../Container/MapTileContainer';
import { DropTarget } from 'react-dnd'
import { DragDropTypes } from 'Resources/DragDropTypes';
import * as Actions from 'Resources/Actions';

const mapTileTarget = {
  canDrop(props) {
    return true;
  },
  drop(props, monitor) {
    let {x, y} = monitor.getDifferenceFromInitialOffset();
    let item = monitor.getItem();
    props.moveMapTile(item.id, x, y);
  }
}

function mapTileCollector(connect, monitor) {
  return {
    mapTileConnectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}


const panelItemTarget = {
  canDrop(props) {
    return true;
  },
  drop(props, monitor) {
    let item = monitor.getItem();
    let {x, y} = monitor.getSourceClientOffset();
    console.log("Create item at ("+x+","+y+")??");
    props.actionCreateMapTile(item.imageSource, { x: 0, y: 0 });
  }
}

function panelItemCollector(connect, monitor) {
  return {
    panelConnectDropTarget: connect.dropTarget()
  };
}


@DropTarget(DragDropTypes.PANEL_ITEM, panelItemTarget, panelItemCollector)
@DropTarget(DragDropTypes.MAP_TILE, mapTileTarget, mapTileCollector)
class ScenarioPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { mapTileConnectDropTarget, panelConnectDropTarget } = this.props;
    return panelConnectDropTarget(mapTileConnectDropTarget(
      <div className="bb">
        <img src={"images/background/ScenarioTitleLeft.jpg"} width="100%" />
{/*        {this.renderScenarioName()}
        {this.renderRequirements()}
        {this.renderGoal()}

        */}
        {this.props.mapTiles.map((tile, index) => this.createMapTile(tile, index))}
      </div>
    ));
  }

  createMapTile(tile, index) {
    return (
      <MapTileContainer key={index} id={tile.id} />
    );
  }

  renderScenarioName() {
    return (
      <input
        type="text"
        className="ghtitle borderless"
        placeholder="Scenario Name"
        style={{
          position: "absolute",
          top: "3.5%",
          left: "22%",
          fontSize: 28,
         }}
      />
    );
  }

  renderRequirements() {
    return (
      <div
        style={{
          position: "absolute",
          top: "8.5%",
          left: "8%",
          fontSize: 15,
        }}
        >
        <span className="ghtitle">
          Requirements:&nbsp;&nbsp;
        </span>
        <input
          type="text"
          placeholder=""
          className="borderless"
        />
      </div>
    )
  }

  renderGoal() {
    return (
      <div
        style={{
          position: "absolute",
          top: "10.8%",
          left: "8%",
          fontSize: 15,
        }}
        >
        <span className="ghtitle">Goal:
        &nbsp;&nbsp;
        </span>
        <input
          type="text"
          placeholder=""
          className="borderless"
        />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    mapTiles: state.MapTileReducer.mapTiles
  };
}

const mapDispatchToProps = dispatch => {
  return {
    moveMapTile: (id, x, y) => {
      return dispatch({
      type: "SET_LOCATION",
      id,
      x,
      y
    })},
    actionCreateMapTile: (imageSource, location) => {
      return dispatch(Actions.getAction(Actions.CREATE_MAP_TILE)(imageSource, location));
    }
  };
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(ScenarioPage);
