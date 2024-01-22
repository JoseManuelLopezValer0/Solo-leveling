document.addEventListener("DOMContentLoaded", function () {
  let Arcos = [
    ["Arco 1 - Mazmorra Rango D", "https://drive.google.com/file/d/1XqqefVTOXAcYc78HGuBxvqnKVJ91RPfv/preview"],
    ["Arco 2 - Despertar", "https://drive.google.com/file/d/1zAqH9d6_r3Y8E8RcgVAYrVbTcq4-CpY0/preview"],
    ["Arco 3 - Mazmorra Instantánea", "https://drive.google.com/file/d/1CiG-bfJheLLSC5V6qQvqVMfG0M3CDnHb/preview"],
    ["Arco 4 - Mazmorras y Lagartos", "https://drive.google.com/file/d/1b-9eZKnPtdnOtqHq6q5FCHtLYQ41uQw9/preview"],
    ["Arco 5 - Mazmorras y Prisioneros", "https://mega.nz/file/dn9VQL5D#hniZe5yq4cXIM5ppWCVsQ6PoTll6-oLaBiyvSjc658U"],
    ["Arco 6 - Incursión de Yoo Jin-Ho", "https://drive.google.com/file/d/1IeVWh_JJSKWa-PCsdmxPxJOs1f8NjOF2/preview"],
    ["Arco 7 - Cambio de Trabajo","https://drive.google.com/file/d/1EOvBY3vDwr5nYSpP0eanM1-54KgNStpm/preview"],
    ["Arco 8 - Portal Rojo", "https://drive.google.com/file/d/1kHh5Bfm6j5Av2rv84caVasbSd34StYxn/preview"],
    ["Arco 9 - Castillo Demonio", "https://drive.google.com/file/d/1lRGG3-qw-strv8Hpl1UUC-v1uMPc9FPR/preview"],
    ["Arco 10 - Reevaluacion de Rango", "https://drive.google.com/file/d/1msV2FmlNQarZMRQARTAtXtmwKiKAMhCe/preview"],
    ["Arco 11 - Portal del gremio de cazadores", "https://drive.google.com/file/d/1UpfgyWM7y8z4hZpPh0Ftefp9TGJk6MHD/preview"],
    ["Arco 12 - Regreso al castillo demonio", "https://drive.google.com/file/d/1lT3Whpno_B8L6AVvdInRArDBm7BIdru7/preview"],
    ["Arco 13 - Arco de la isla de Jeju I", "https://drive.google.com/file/d/1XXQFXNsoq6UKGM7du3wbP_vouYqwyrMj/preview"],
    ["Arco 14 - Isla de Jeju II", "https://drive.google.com/file/d/1o6Hn0ikhroU-2znlcU-4BQrh0dYs3Hw2/preview"],
    ["Arco 15 - Reclutamiento", "https://drive.google.com/file/d/1Q5zg-T8SJg6LA4KNpwKaH1GiXdBdahYg/preview"],
    ["Arco 16", "https://drive.google.com/file/d/1PJPzwl13WbzA--UN16TUqK3aGpyXFcmi/preview"],
    ["Arco 17", "https://drive.google.com/file/d/1HOGMTFlasCFGOkGToxH7Xxxp8Y7rUQgK/preview"],
    ["Arco 18", "https://drive.google.com/file/d/1fI5_C_5rgSUi5Gp3n-aCuu3s2emzm0dJ/preview"],
    ["Arco 19", "https://drive.google.com/file/d/1hrgj1yeDEvJpptyBNgG-VsO4gyU1iT47/preview"],
    ["Arco 20", "https://drive.google.com/file/d/12YeZCyvhmeOhfE04DP4DBVJu6UvKXI7T/preview"],
  ];

  document.querySelectorAll("button").forEach((item) => {
    item.addEventListener("click", function () {
      let id = this.id;
      let index = parseInt(id) - 1;
      let titulo = Arcos[index][0];
      let pdf = Arcos[index][1];
      Container = document.querySelector(".Container");
      Container.style.display = "none";
      let h2 = document.createElement("h2");
      h2.innerHTML = titulo;
      h2.style.textAlign = "center";
      h2.style.marginTop = "0";
      h2.style.marginBottom = "0";
      document.body.appendChild(h2);
      let embed = document.createElement("embed");
      embed.src = pdf;
      embed.type = "application/pdf";
      embed.width = "100%";
      embed.height = "700px";
      document.body.appendChild(embed);
      let button = document.createElement("button");
      button.innerHTML = "Volver";
      document.body.appendChild(button);
      button.addEventListener("click", function () {
        h2.remove();
        embed.remove();
        button.remove();
        Container.style.display = "";
      });
    });
  });
});
