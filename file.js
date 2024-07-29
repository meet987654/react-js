const heading = React.createElement(
    "h1",
    {id:"heading1",//object for attributes
      xyz:"abc"  
    },
    "hey there");
const root=ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);