import DataDisplay from "./components/DataDisplay";
import Controls from "./components/Controls";
import useInitGlobalState from "./hooks/initGlobalState";

function App() {
  useInitGlobalState()

  return (
    <div
      className={"flex w-screen h-screen justify-center items-center gap-20"}
    >
      <Controls />
      <DataDisplay />
    </div>
  );
}

export default App;
