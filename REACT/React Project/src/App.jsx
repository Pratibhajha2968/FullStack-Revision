import React from "react"
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponet";
import ContainerComponent from "./components/ContainerComponent";
import PresentationalComponent from "./components/PresentationalComponent";
const App = () => {
  return (
    <>
      <ClassComponent />
      <ContainerComponent />
      <FunctionalComponent />
      <PresentationalComponent />
    </>
  );
};

export default App;
