import { AxesHelper } from "three";

export const getHelper = () => {
  const axesHelper = new AxesHelper(10)

  return { axesHelper }
}
