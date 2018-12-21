import React, { Component } from 'react';
import { Panel, Button, Tabs, Tab } from 'react-bootstrap';
import data from "Resources/data.json";
import DraggablePanelItem from 'Components/DraggablePanelItem';

import * as Constants from "Utility/Constants";

export default class ControlPanel extends Component {


  render() {
    return (
      <div>
        <Tabs defaultActiveKey={2} id="control_panel_tabs">
          <Tab eventKey={1} title="Buttons">
            <Panel>
              <Panel.Body><Button onClick={(event)=>this.props.buttonClick()}>Move (50, 50)</Button></Panel.Body>
              <Panel.Body><Button>B2</Button></Panel.Body>
              <Panel.Body><Button>B3</Button></Panel.Body>
            </Panel>
          </Tab>
          <Tab eventKey={2} title="Map Pieces">
            <Panel>
              {data.maptiles.map((obj, index) => this.createListItem(obj, index))}
            </Panel>
          </Tab>
        </Tabs>
      </div>
    )
  }


  createListItem(image, index) {
    return (<DraggablePanelItem key={index} action={this.props.createMapTile} imageSource={Constants.IMAGES_MAP_TILES + image} />)
  }

}
