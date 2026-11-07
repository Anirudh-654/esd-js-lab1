// Section 15 exercise: a counter, three ways.
// Run it:  npm run web   → open http://localhost:5500/web/counter.html
// Follow section 15 of the lab doc: stage 1 → 2 → 3 → 4.

const countEl = document.querySelector("#count");
const parityEl = document.querySelector("#parity");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const reset = document.querySelector("#reset");
const stepInput = document.querySelector("#step");

import { useState } from "../src/s15-state.js";

function render() {
  const count = getCount();
  countEl.textContent = count;
  parityEl.textContent = count % 2 === 0 ? "even" : "odd";
  dec.disabled = count - getStep() < 0;
  document.title = `Count: ${count}`;
}

const [getCount, setCount] = useState(0, render);
const [getStep, setStep] = useState(Number(stepInput.value), render);

stepInput.addEventListener("input", () => {
  const next = Number(stepInput.value);
  if (Number.isInteger(next) && next >= 1) setStep(next);
});
inc.addEventListener("click", () => setCount((count) => count + getStep()));
dec.addEventListener("click", () => setCount((count) => count - getStep()));
reset.addEventListener("click", () => setCount(0));
render();

// Stage 2 — TODO: make "− Step" and "Reset" work the same way, then make the
//   parity label ("even"/"odd"), the disabled "−" at zero, and the tab title
//   (document.title) follow the count. Count how many update lines you wrote.

// Stage 3 — TODO: move every update line into ONE function, render(),
//   and call it after every change.

// Stage 4 — TODO: write useState in src/s15-state.js, import it, and
//   replace `let count` with  const [getCount, setCount] = useState(0, render);
//   Then add the step input as a second piece of state.
