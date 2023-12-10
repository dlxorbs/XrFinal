const rockcontainer = document.querySelector(".rock");
const woodcontainer = document.querySelector(".wood");
const coralcontainer = document.querySelector(".coral");
const seaweedcontainer = document.querySelector(".seaweed");
const valueRadio = document.getElementsByName("selecttype");

function getType(e) {
  let value = "rock"; // Move the initialization outside the loop

  for (let i = 0; i < valueRadio.length; i++) {
    if (valueRadio[i].checked) {
      value = valueRadio[i].value;
    }
  }

  if (value === "rock") {
    rockcontainer.classList.remove("hidden");
    woodcontainer.classList.add("hidden");
    coralcontainer.classList.add("hidden");
    seaweedcontainer.classList.add("hidden");
  } else if (value === "coral") {
    rockcontainer.classList.add("hidden");
    woodcontainer.classList.add("hidden");
    coralcontainer.classList.remove("hidden");
    seaweedcontainer.classList.add("hidden");
  } else if (value === "seaweed") {
    rockcontainer.classList.add("hidden");
    woodcontainer.classList.add("hidden");
    coralcontainer.classList.add("hidden");
    seaweedcontainer.classList.remove("hidden");
  } else if (value === "wood") {
    rockcontainer.classList.add("hidden");
    woodcontainer.classList.remove("hidden");
    coralcontainer.classList.add("hidden");
    seaweedcontainer.classList.add("hidden");
  }
}
