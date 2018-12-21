import * as Actions from 'Resources/Actions';

//The primary key of a map tile, used to move or delete it
let mapId = 1;
function getId() {
  return mapId++;
}

const defaultState = {
  mapTiles: [
  ]
};

const actionMethodHandlerMap = new Map();
actionMethodHandlerMap.set(Actions.DELETE_OBJECT, deleteObject);
actionMethodHandlerMap.set(Actions.CREATE_MAP_TILE, createMapTile);


/*
MapTileReducer
[     {
      id: getId(),
      x: 100,
      y: 100,
      imageSource: "images/maptiles/A1b.png"
    }, ...
]
*/




const MapTileReducer = (state = defaultState, action) => {

  let handlerFunction = actionMethodHandlerMap.get(action.type);
  if (handlerFunction) {
    return handlerFunction(state, action);
  }

  let newTileArray = state.mapTiles.slice();
  let tile = newTileArray.find(o => o.id === action.id);
  if (action.type === "MOVE_TILE") {
    tile.x = tile.x + 50;
    tile.y = tile.y + 50;
    return { ...state,
      mapTiles: newTileArray
    };
  } else if (action.type === "SET_LOCATION") {
    tile.x = tile.x + action.x
    tile.y = tile.y + action.y;
    return { ...state,
      mapTiles: newTileArray
    };
  }

  return state;
}

function createMapTile(state, action) {
  let newTileArray = state.mapTiles.slice();
  newTileArray.push({
    id: getId(),
    x: action.location.x,
    y: action.location.y,
    imageSource: action.imageSource
  });
  return { ...state, mapTiles: newTileArray};
}

//Deletes a map tile by id
function deleteObject(state, action) {
  let newTileArray = state.mapTiles.slice().filter((obj) => obj.id !== action.id);
  return { ...state, mapTiles: newTileArray};
}

export default MapTileReducer;
