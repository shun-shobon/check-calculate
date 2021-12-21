import { type VFC } from "react";

import Pi from "./Pi";
import Sqrt2 from "./Sqrt2";

const App: VFC = () => {
  return (
    <main className="container mx-auto py-8 flex flex-col gap-8">
      <h1 className="text-2xl">多倍長演算チェッカー</h1>
      <Pi />
      <Sqrt2 />
    </main>
  );
};

export default App;
