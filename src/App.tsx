import React from "react";
import { hot } from "react-hot-loader";
const LazyComponent = React.lazy(() => import("./LazyComponent"));

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <h1 className="title">Hello World</h1>
      <React.Suspense fallback={<h1>Loading ...</h1>}>
        {open && <LazyComponent title="I am lazy component" />}
      </React.Suspense>
      <button onClick={() => setOpen(true)}>RfsadfsafaLazy fsdfs</button>
    </div>
  );
};

export default hot(module)(App);
