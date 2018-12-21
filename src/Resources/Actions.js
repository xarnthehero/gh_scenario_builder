const actionCreatorMap = new Map();



export const DELETE_OBJECT = "DELETE_OBJECT";
actionCreatorMap.set(DELETE_OBJECT, deleteObject);

export const CREATE_MAP_TILE = "CREATE_MAP_TILE";
actionCreatorMap.set(CREATE_MAP_TILE, createMapTile);






export function getAction(action) {
  return actionCreatorMap.get(action);
}


function createMapTile(imageSource, location) {
  return {
    type: CREATE_MAP_TILE,
    imageSource,
    location
  }
}

function deleteObject(id, itemType) {
  return {
    type: DELETE_OBJECT,
    id,
    itemType
  }
}
