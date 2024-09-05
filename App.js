/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *             <h1>I'm H1 tag</h1>
 *             <h2>I'm H1 tag</h2>
 *      </div>
 *      <div id="child2">
 *             <h1>I'm H1 tag</h1>
 *             <h2>I'm H1 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(object) -> HTML (Browser Understands)
 * 
 */

const parent = React.createElement(
    "div",
    {id: "parent"},[
    React.createElement(
        "div",
        {id: "child1"},[
            React.createElement("h1",{id:"heading"}, "I'm H1 tag"),
            React.createElement("h2",{id:"heading"}, "I'm H2 tag")
        ] 
    ),
    React.createElement(
        "div",
        {id: "child2"},[
            React.createElement("h1",{id:"heading"}, "I'm H1 tag"),
            React.createElement("h2",{id:"heading"}, "I'm H2 tag")
        ] 
    )
]
);

console.log(parent);

//const heading = React.createElement("h1", {id: "heading"}, "HELLO WORLD FROM REACT!");
        
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);