(()=>{"use strict";(new class{render(){const e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="Web pack is awesome!!!",n.appendChild(e)}}).render();const e=new class{buttonclass="hello-world-button";render(){const e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonclass);const n=document.querySelector("body");n.appendChild(e),e.onclick=function(){const e=document.createElement("p");e.innerHTML="Hello World Boys!!",e.classList.add("hello-world-text"),n.appendChild(e)}}};console.log(e.render()),console.log("This is production")})();