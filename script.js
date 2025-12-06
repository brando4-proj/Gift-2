const name = document.getElementById("Name");
const age = document.getElementById("Age");
const gender = document.getElementById("Gender");
const submit = document.getElementById("submit");
const container = document.querySelector(".container");
const cont = document.createElement("div");
const cont2 = document.createElement("div");


submit.addEventListener("click", () => {
      
    if(name.value.trim() == "" || age.value.trim() == "" || gender.value.trim() == ""){
        
        
    } else{
        container.remove();
        gift();
    }
});


function gift(){
      document.body.prepend(cont);
      cont.className = "animated";
      
      const Name = document.getElementById("name");  
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const p5 = document.createElement("p");
     
     cont.prepend(p1);
     p1.innerHTML = `
        <span>H</span>
        <span>A</span>
        <span>P</span>
        <span>P</span>
        <span>Y</span>`;
        cont.append(p2);
        p2.textContent = "Birthday";
        p2.className = "birthday";
      cont.append(p3);
      p3.id = "name";
     p3.textContent = `${name.value}`;
     cont.append(p4);
     p4.id = "gender";
     p4.textContent = `${gender.value}`;
     cont.append(cont2);
     cont2.className = "age";
     
     p5.id = "age";
     p5.textContent = `${age.value}`;
     cont2.append(p5);
     
     
     if(gender.value == "MALE"){
         p4.id = "male";
     } else if(gender.value == "FEMALE"){
         p4.id = "female";
     } else {
         p4.id = "gender";
         p4.textContent = "Secret";
     }
     
     setInterval(animation(), 4000);
}

function animation(){
    const cont3 = document.createElement("div");
    cont.append(cont3);
    cont3.className = "float";
    cont3.innerHTML = `
    <img src="angel1.jpeg" alt="Image" style="--i:1">
            <img src="angel2.jpeg" alt="Image" style="--i:1.2">
            <img src="angel3.jpeg" alt="Image" style="--i:1.4">
            <img src="angel4.jpeg" alt="Image" style="--i:1.6">
            <img src="angel5.jpeg" alt="Image" style="--i:1.8">
            <img src="angel6.jpeg" alt="Image" style="--i:1.9">`;
}