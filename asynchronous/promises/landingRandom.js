// function createPageStructure() {
//     return new Promise((resolve) => {
//       const body = document.getElementById("body");

//       const header = document.createElement("header");
//       header.classList.add("header");

//       const h1 = document.createElement("h1");
//       h1.textContent = "Welcome to my random num generator";
//       header.append(h1);

//       const main = document.createElement("main");
//       main.setAttribute("id", "main");

//       const loading = document.createElement("h2");
//       loading.textContent = "Ready to generate";

//       const container = document.createElement("div");
//       container.classList.add("container");

//       const h2 = document.createElement("h2");
//       h2.textContent = "Click the button to generate the random num";
//       h2.classList.add("h2");

//       const span = document.createElement("span");
//       span.classList.add("random-span");
//       span.textContent = "0";

//       const button = document.createElement("button");
//       button.setAttribute("id", "random-button");
//       button.textContent = "random";

//       container.append(h2);
//       container.append(span);
//       container.append(button);
//       main.append(loading);
//       main.append(container);
//       body.append(header);
//       body.append(main);

//       resolve(button);
//     });
//   }

//   function createRandomNum() {
//     return new Promise((resolve) => {
//       resolve(Math.floor(Math.random() * 10 + 1));
//     });
//   }

//   async function changeRandomNumSpan() {
//     try {
//       const button = await createPageStructure();

//       button.addEventListener("click", async function () {
//         const loading = document.querySelector("h2");
//         loading.textContent = "Generating random num...";

//         const randomNum = await createRandomNum();
//         setTimeout(() => {
//           const randomSpan = document.querySelector(".random-span");
//           randomSpan.textContent = randomNum;
//           loading.textContent = "Random number generated!";
//         }, 3000);
//       });
//     } catch (error) {
//       console.error("error", error);
//     }
//   }

//   window.addEventListener("load", function () {
//     changeRandomNumSpan();
//   });

function createPageStructure() {
  return new Promise((resolve) => {
    const body = document.getElementById("body")

    const header = document.createElement("header")
    header.classList.add("header")

    const h1 = document.createElement("h1")
    h1.textContent = "Welcome to my random num generator"
    header.append(h1)

    const main = document.createElement("main")
    main.setAttribute("id", "main")

    const loading = document.createElement("h2")
    loading.textContent = "Ready to generate"

    const container = document.createElement("div")
    container.classList.add("container")

    const h2 = document.createElement("h2")
    h2.textContent = "Click the button to generate the random num"
    h2.classList.add("h2")

    const span = document.createElement("span")
    span.classList.add("random-span")
    span.textContent = "0"

    const button = document.createElement("button")
    button.setAttribute("id", "random-button")
    button.textContent = "random"

    container.append(h2)
    container.append(span)
    container.append(button)
    main.append(loading)
    main.append(container)
    body.append(header)
    body.append(main)

    resolve(button)
  })
}

function createRandomNum() {
  return new Promise((resolve) => {
    const randomNum = Math.floor(Math.random() * 10 + 1)
    resolve(randomNum)
  })
}

function updateLoadingText(text) {
  return new Promise((resolve) => {
    const loading = document.querySelector("h2")
    loading.textContent = text
    resolve()
  })
}

function updateRandomSpan(randomNum) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomSpan = document.querySelector(".random-span")
      randomSpan.textContent = randomNum
      resolve()
    }, 3000)
  })
}

window.addEventListener("load", function () {
  createPageStructure()
    .then((button) => {
      button.addEventListener("click", () => {
        updateLoadingText("Generating random num...")
          .then(() => createRandomNum())
          .then((randomNum) => updateRandomSpan(randomNum))
          .then(() => updateLoadingText("Random number generated!"))
          .catch((error) => {
            console.error("Error during random number generation:", error)
          })
      })
    })
    .catch((error) => {
      console.error("Error creating page structure:", error)
    })
    .finally(() => {
      console.log("Page structure created and button listener added.")
    })
})
