import ReactTextRotator from "react-text-rotator";

import ReactDOM from 'react-dom';

import { createRoot } from 'react-dom/client';



const content = [
  {
    text: "We shall fight on the beaches.",
    className: "classA",
    animation: "fade",
  },
  {
    text: "We shall fight on the landing grounds.",
    className: "classB",
    animation: "zoom",
    link: "https://example.com/",
  },
  {
    text: "We shall fight in the fields and in the streets.",
    className: "classC",
    animation: "fade",
  },
  {
    text: "We shall fight in the hills.",
    className: "classD",
    animation: "squeeze",
  },
  {
    text: "We shall never surrender...",
    className: "classE",
    animation: "zoom",
    link: "https://google.com/",
  },
];

const App = () => {
  return (
    <div className="wrapper">
      <h1>React Text Rotator</h1>
      <div className="example">
        <ReactTextRotator content={content} time={5000} startDelay={500} />
      </div>
    
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#myNews"));

//const container = document.getElementById('myNews');
//const root = createRoot(container);
//root.render(<App />);