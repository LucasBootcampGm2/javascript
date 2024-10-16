class FileDownloader {
  constructor(container, downloadAllBtn, buttons, resultDisplay) {
    this.container = container;
    this.downloadAllBtn = downloadAllBtn;
    this.buttons = buttons;
    this.resultDisplay = resultDisplay;
    this.promises = [];
  }

  async createHtmlFiles() {
    const files = [
      { name: "Lucas", mb: 300 },
      { name: "Jorge", mb: 300 },
      { name: "Matias", mb: 300 },
    ];

    files.forEach((file) => {
      const containerIndividual = document.createElement("div");
      containerIndividual.classList.add("individual-download");

      const name = document.createElement("span");
      name.textContent = file.name;
      containerIndividual.append(name);

      const mb = document.createElement("span");
      mb.textContent = `${file.mb} MB`;
      containerIndividual.append(mb);

      containerIndividual.innerHTML +=
        '<i class="fa-solid fa-download icon"></i>';
      this.container.append(containerIndividual);

      this.promises.push(
        new Promise((resolve, reject) => {
          const random = Math.floor(Math.random() * 10);
          random >= 5
            ? resolve(`${file.name} downloaded successfully`)
            : reject(`${file.name} download failed`);
        })
      );
    });

    return this.promises;
  }

  downloadIndividual() {
    return new Promise((resolve, reject) => {
      const random = Math.floor(Math.random() * 10);
      random >= 5 ? resolve("File downloaded") : reject("Download failed");
    });
  }

  showDownloadAllCard() {
    this.downloadAllBtn.addEventListener("click", () => {
      document.querySelector(".card").style.display = "flex";
      this.container.style.display = "none";
      this.downloadAllBtn.style.display = "none";
      this.buttons.forEach((btn) => (btn.style.display = "flex"));
    });
  }

  async handlePromises() {
    try {
      const promises = await this.createHtmlFiles();

      this.buttons.forEach((button) => {
        button.addEventListener("click", async () => {
          const action = button.id;
          let promiseAction;

          switch (action) {
            case "promise-all":
              promiseAction = Promise.all(promises)
                .then((result) => {
                  this.resultDisplay.innerHTML =
                    "All downloads completed: " + JSON.stringify(result);
                })
                .catch(() => {
                  this.resultDisplay.innerHTML =
                    "At least one download failed.";
                });
              break;

            case "promise-any":
              promiseAction = Promise.any(promises)
                .then((result) => {
                  this.resultDisplay.innerHTML =
                    "Successful download found: " + result;
                })
                .catch(() => {
                  this.resultDisplay.innerHTML = "All downloads failed.";
                });
              break;

            case "promise-settle":
              promiseAction = Promise.allSettled(promises).then((results) => {
                const formattedResults = results.map(
                  (res) => `${res.status}: ${res.value || res.reason}`
                );
                this.resultDisplay.innerHTML = formattedResults.join("<br>");
              });
              break;

            case "promise-race":
              promiseAction = Promise.race(promises)
                .then((result) => {
                  this.resultDisplay.innerHTML =
                    "First completed promise: " + result;
                })
                .catch((error) => {
                  this.resultDisplay.innerHTML =
                    "First promise failed: " + error;
                });
              break;
          }
        });
      });
    } catch (error) {
      console.error("Error handling promises:", error);
    }
  }
}

function clickDownloadIcon() {
  const icons = document.querySelectorAll(".fa-download");

  icons.forEach((icon) => {
    icon.addEventListener("click", async () => {
      try {
        const resultMessage = await new FileDownloader().downloadIndividual();
        icon.parentElement.remove();
        document.getElementById("result").innerHTML = resultMessage;
      } catch (error) {
        document.getElementById("result").innerHTML = error;
      }
    });
  });
}

window.addEventListener("load", () => {
  const container = document.getElementById("container-downloads");
  const downloadAllBtn = document.getElementById("download-all");
  const promiseButtons = [
    document.getElementById("promise-all"),
    document.getElementById("promise-any"),
    document.getElementById("promise-settle"),
    document.getElementById("promise-race"),
  ];
  const result = document.getElementById("result");

  const downloader = new FileDownloader(
    container,
    downloadAllBtn,
    promiseButtons,
    result
  );
  downloader.showDownloadAllCard();
  downloader.handlePromises();

  clickDownloadIcon();
});
