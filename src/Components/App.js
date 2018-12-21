import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScenarioPage from 'Components/ScenarioPage';
import LeftControlPanel from 'Components/LeftControlPanel';
import ControlPanelContainer from 'Container/ControlPanelContainer';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    const col1Length = 2;
    const col2Length = 7;
    const col3Length = 2;
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col md={col1Length}>
              <LeftControlPanel/>
            </Col>
            <Col md={col2Length}>
              <ScenarioPage/>
            </Col>
            <Col md={col3Length}>
              <ControlPanelContainer/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
