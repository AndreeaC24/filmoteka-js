const e=document.getElementById("checkbox");"true"===localStorage.getItem("darkMode")&&(document.body.classList.add("dark"),e.checked=!0),e.addEventListener("change",(()=>{document.body.classList.toggle("dark");const e=document.body.classList.contains("dark");localStorage.setItem("darkMode",e.toString())}));
//# sourceMappingURL=library.890c77ac.js.map
