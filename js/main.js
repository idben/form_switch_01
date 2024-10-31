const btnSwitch1 = document.querySelector(".btn-switch1");
const btnSwitch2 = document.querySelector(".btn-switch2");
const btnSwitch3 = document.querySelector(".btn-switch3");
const btnSwitch4 = document.querySelector(".btn-switch4");
const card = document.querySelector(".card")
const form1 = document.querySelector(".form1")
const form2 = document.querySelector(".form2")
const form3 = document.querySelector(".form3")
const side1 = document.querySelector(".side1")
const side2 = document.querySelector(".side2")
let moving = false;
const tsTime = 500;


btnSwitch1.addEventListener("click", async e => {
  if(moving) return;
  moving = true;
  card.classList.remove("active");
  side1.classList.remove("active");
  await wait(tsTime);
  form2.classList.add("show");
  await wait(100);
  form1.classList.remove("active");
  form2.classList.add("active");
  await wait(tsTime);
  form1.classList.remove("show");
  side2.classList.add("active");
  card.classList.add("active");
  moving = false;
});

btnSwitch2.addEventListener("click", async e => {
  if(moving) return;
  moving = true;
  card.classList.remove("active");
  side2.classList.remove("active");
  await wait(tsTime);
  form1.classList.add("show");
  await wait(100);
  form2.classList.remove("active");
  form1.classList.add("active");
  await wait(tsTime);
  form2.classList.remove("show");
  side1.classList.add("active");
  card.classList.add("active");
  moving = false;
});

btnSwitch3.addEventListener("click", async e => {
  if(moving) return;
  moving = true;
  form3.classList.add("show");
  await wait(100);
  form1.classList.remove("active");
  form3.classList.add("active");
  await wait(tsTime);
  form1.classList.remove("show");
  moving = false;
});

btnSwitch4.addEventListener("click", async e => {
  if(moving) return;
  moving = true;
  form1.classList.add("show");
  await wait(100);
  form3.classList.remove("active");
  form1.classList.add("active");
  await wait(tsTime);
  form3.classList.remove("show");
  moving = false;
});

function wait(t){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve();
    }, t);
  });
}