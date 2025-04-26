
document.body.style.backgroundColor = "blue";


let ism = prompt("Ismingizni kiriting:");


if (ism) {
  let p = document.createElement("p");
  p.innerHTML = ` <span style="color: yellow;">${ism}</span>`;
  p.style.textAlign = "center";
  p.style.fontSize = "90px";
  p.style.marginTop = "100px";
  p.style.color = "white"; 
  document.body.appendChild(p);
} else {
  let p = document.createElement("p");
  p.textContent = "Ism kiritilmadi.";
  p.style.textAlign = "center";
  p.style.fontSize = "30px";
  p.style.marginTop = "100px";
  p.style.color = "white";
  document.body.appendChild(p);
}

