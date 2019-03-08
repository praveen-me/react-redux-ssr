import React from 'react';
import {renderToString} from "react-dom/server";
import Home from '../client/components/Home';


export function template() {
  const jsx = renderToString(
    <div>
      <Home/>
    </div>
  )
  console.log(jsx);
  return `
    <html>
      <body>
        <div id="root">${jsx}</div>
        <script src="client.bundle.js"></script>
      </body>
    </html>
  `
} 