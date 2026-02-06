import React from "react"
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponet";
import ContainerComponent from "./components/ContainerComponent";
import PresentationalComponent from "./components/PresentationalComponent";
const App = () => {
  return (
    <>
      <ClassComponent />
      <ContainerComponent />
      <FunctionComponent />
      <PresentationalComponent />
    </>
  );
};

export default App;
