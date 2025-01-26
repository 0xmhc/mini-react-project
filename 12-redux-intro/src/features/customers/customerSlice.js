const initialStateConsumer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function consumerReducer(state = initialStateConsumer, action) {
  switch (action.type) {
    case "consumer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "consumer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "consumer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullName) {
  return { type: "consumer/updateName", payload: fullName };
}
