const body = document.body;
//const app = document.getElementById('app');
const test = () => {
  const script = document.createElement('script');
  script.src = "./module/test.js";
  body.appendChild(script);
}
  
const main = () => {
  const script = document.createElement('script');
  script.src = "./module/main.js";
  body.appendChild(script);
}

main();
setTimeout(test(), 5000);
  