export const initialPairStatusState = {
  isDesktopEnabled: false,
  isWebSocketConnected: false,
  connections: [],
  lastActivation: null,
};

// Actions
export const UPDATE_PAIR_STATUS = 'UPDATE_PAIR_STATUS';

// Reducer
export default function pairStatusReducer(
  state = initialPairStatusState,
  action,
) {
  switch (action.type) {
    case UPDATE_PAIR_STATUS: {
      const isActivated =
        state.isWebSocketConnected === false &&
        action.payload.isWebSocketConnected === true;
      const lastActivation = new Date().getTime();
      return {
        ...state,
        ...action.payload,
        ...(isActivated && { lastActivation }),
      };
    }
    default:
      return state;
  }
}

// Selectors
export const getLastActivation = (state) => state.pairStatus.lastActivation;
export const getIsDesktopEnabled = (state) => state.pairStatus.isDesktopEnabled;
export const getIsWebSocketConnected = (state) =>
  state.pairStatus.isWebSocketConnected;

// Action Creators
export function updatePairStatus(payload) {
  return { type: UPDATE_PAIR_STATUS, payload };
}
