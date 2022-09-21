/* importing the ReactDOM object from the react-dom 3rd party library which is 
one of the dependencies in package.json, which is installed locally */
import ReactDOM from 'react-dom/client';

import './index.css';

/* Importing App component from the App JS file, it's advised to omit the file 
extension when importing another JS file or from a library. " ./ " looks in the
same folder as the current file. The App.js file is the root components
containing all other nested components
*/
import App from './App';

/* A const is created and assigned a method from the ReactDom library named
createRoot. The index.HTML document element with the id 'root' is targetted for 
React code to tbe injected into

Additionally, because the const root variable was assigned an object, the root
variable itself can be treated as an object to call methods on
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Render method tells React what should be rendered in the selected HTML div.
In this case the "App" component is rendered inside the "root" div
*/
root.render(<App />);
