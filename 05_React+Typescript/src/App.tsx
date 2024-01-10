import { Card } from "./components/Card";
import { Circle } from "./components/Cirlcle";

const avatarInfo = {
  name: "Gabriel",
  age: 22,
};

function App() {
  return (
    <section className="grid grid-cols-2 w-full gap-3">
      <Circle colorBg="#1f1f1f" textColor="#bbb"></Circle>
      <Card avatarInfo={avatarInfo}></Card>
    </section>
  );
}

export default App;
