import React from "react";
import { hot } from "react-hot-loader";
import imgAnime from "./assets/anime-img.jpg";
import webpack from "./assets/web-logo.svg";
import classes from "./main.module.scss";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <h1 className={classes.title}>Hello World</h1>
      <React.Suspense fallback={<h1>Loading ...</h1>}>
        {open && <LazyComponent title="I am lazy component" />}
      </React.Suspense>
      <button type="button" onClick={() => setOpen(true)}>
        fdsfs
      </button>

      <img width="300" src={imgAnime} alt="some fsa" />
      <img width="300" src={webpack} alt="some fsa" />
    </div>
  );
}

export default hot(module)(App);
