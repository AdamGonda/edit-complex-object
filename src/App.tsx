import DataDisplay from "./components/DataDisplay";
import Controls from "./components/Controls";

function App() {
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
