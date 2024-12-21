// let parent = React.createElement('div',{id : 'Parent'},React.createElement('h1',{id : 'child1'},[React.createElement('h2'),{},'hellow',React.createElement('h2',{},'hellow')]))

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, [
    React.createElement("div", {}, "hellow"),
    React.createElement("div", {}, "hellow2"),
  ]),
  React.createElement("h2", {}, [
    React.createElement("div", {}, "hello3"),
    React.createElement("h2", {}, "hellow3"),
  ]),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
