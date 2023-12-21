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
/* chapter 1 demo this is how core work after jsx is implemented
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
*/

/**chapter 3 work */

//JSX React element creation
const Jsxheading = (
  <h1 id="heading" className="head">
    Fisrt JSX Heading
  </h1>
);

//react components
//two types of components
//class based component -> OLD
// functional component -> NEW ==>
const HeadingComponent = () => {
  return <h1> Functional component</h1>;
};

const HeadingComponent2 = () => <h1> Functional component</h1>; //both is same

const HeadingComponent3 = () => (
  //way of declaring nested things
  //way of adding the component
  <div id="container">
    {Jsxheading}
    <h1> Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3 />); //way to render the functional component
//root.render(jsxheading);
