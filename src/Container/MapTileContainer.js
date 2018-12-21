import { connect } from 'react-redux';
import MapTile from '../Components/MapTile';

const mapStateToProps = (state, ownProps) => {
  let obj = state.MapTileReducer.mapTiles.find(o => o.id === ownProps.id);
  return {
    x: obj.x,
    y: obj.y,
    imageSource: obj.imageSource
  };

}

const mapDispatchToProps = (dispatch) => {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(MapTile);
