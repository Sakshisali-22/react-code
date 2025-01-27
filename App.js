/** 
*  <div id="parent">
*      <div id ="child">
*         <h1>i am h1 tag</h1>
*         </div>
*   </div>
*
*
*   ReactElement(object) = HTML(browser understands)
*   
*/



const parent = React.createElement("div",{id:"parent"},[
  React.createElement("div", {id: "Child"}, [
    React.createElement("h1",{},"iam an h1 tag"),
  React.createElement("h2",{},"i am an h2 tag"),
]),
React.createElement("div", {id: "Child"}, [
  React.createElement("h1",{},"iam an h1 tag"),
React.createElement("h2",{},"i am an h2 tag"),
]),

])


  //JSX


  console.log(parent); //object

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);