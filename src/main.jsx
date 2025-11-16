import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

document.addEventListener("mousemove", (e) => {
  let cursor = document.querySelector(".custom-cursor");

  if (!cursor) {
    cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);
  }

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});



