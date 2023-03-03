function test() {
    let d = document.getElementById("div1");
    d.classList.add("higact");
    let a = document.getElementById("div2");
    a.classList.add("none");
    // let c = document.getElementById("div3");
    // c.classList.add("vid");
    // let s = document.getElementById("div4");
    // s.classList.add("none");
    setTimeout(() => {    
    let c = document.getElementById("div3");
    c.classList.add("playervid"); 

    let b= document.getElementById("div4");
    b.classList.add("vid");  

    }, 2000);

  }