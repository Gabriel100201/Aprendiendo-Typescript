import { Circle } from "./components/Cirlcle";

function App() {
  return (
    <section className="grid grid-cols-2 w-full gap-3">
      <Circle colorBg="#1f1f1f" textColor="#bbb"></Circle>
      <Circle colorBg="#f7bc3a" textColor="#111"></Circle>
      <Circle colorBg="#f7bc3a" textColor="#111"></Circle>
      <Circle colorBg="#f7bc3a" textColor="#111"></Circle>
    </section>
  );
}

export default App;
