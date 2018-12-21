import { connect } from 'react-redux';
import ControlPanel from 'Components/ControlPanel';
import * as Actions from 'Resources/Actions';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    buttonClick: () =>  {
      dispatch(
        {
          type: "MOVE_TILE",
          id: 4
        }
      );
    },
    createMapTile: () => { dispatch(Actions.getAction(Actions.CREATE_MAP_TILE)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
