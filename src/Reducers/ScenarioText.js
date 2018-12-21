
const defaultScenarioText = {
  textAddition: 1
};

const ScenarioText = (state = defaultScenarioText, action) => {
  if(action.type === "INCREMENT") {
    return { ...state, textAddition: state.textAddition + 1 };
  }
  return state;
}

export default ScenarioText;
