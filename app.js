/**
 *
 * <div id="Parent">
 *       <div id="child">
 *             <h1> i am h1 tag</h1>
 *        </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const appendedChild = React.createElement(
  "Div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello world from react h1 child"),
    React.createElement("h2", {}, "Hello world from react h2 child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello world from react h1 child2"),
    React.createElement(
      "h2",
      {},
      "Hello from update world from react h2 child2"
    ),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "Heading" },
  "Hello world from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(appendedChild);
