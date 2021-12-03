import { createRef } from "react";
export const navigationRef = createRef();

export function goToLogin() {
  navigationRef?.current.navigate("Auth");
}

export function goToScreenError() {
  navigationRef?.current.navigate("Error");
}

export function navigate(name, params) {
  navigationRef?.current.navigate(name, params);
}
