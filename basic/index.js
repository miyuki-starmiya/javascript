
const showTag = () => {
  const p = document.createElement("p");
  p.setAttribute("id", "insert")
  document.body.appendChild(p);
  const text = document.getElementById("insert");
  const tag = document.getElementsByTagName('h1');
  text.innerHTML = tag;
  document.createTextNode('newText');
};

const del = () => {
  document.body.removeChild(document.body.lastChild);
}

const changeHeroine = () => {
  const target = document.getElementById('yume');
  target.textContent = 'ichigo hoshimiya';
  target.style.color = 'pink';
}


