document.addEventListener("DOMContentLoaded", function () {
  let Arcos = [
    [
      "Arco 1 - Mazmorra Rango D",
      "https://drive.google.com/file/d/1boub_VUDMZhgbNI-NuOa8WMDXFW1GIdm/preview",
    ],
    [
      "Arco 2 - Despertar",
      "https://drive.google.com/file/d/1pt0B59tFTu_u61sEqo6LNWuJYLD9pP8p/preview",
    ],
    [
      "Arco 3 - Mazmorra Instantánea",
      "https://drive.google.com/file/d/16DiWGFFoRfwEIOSr7fDvM7BLn58T2iPN/preview",
    ],
    [
      "Arco 4 - Mazmorras y Lagartos",
      "https://drive.google.com/file/d/1O2L_CbVqehMxuNq6p5hmi5_CI_MjjZSK/preview",
    ],
    [
      "Arco 5 - Mazmorras y Prisioneros",
      "https://drive.google.com/file/d/1f4qloBFdO29G_r_YzM-RJdj9TtgUSzsh/preview",
    ],
    [
      "Arco 6 - Incursión de Yoo Jin-Ho",
      "https://drive.google.com/file/d/14LyNxp5Jq_jJ5spkNNqHLNEepJPBNZUm/preview",
    ],
    [
      "Arco 7 - Cambio de Trabajo",
      "https://drive.google.com/file/d/1p7YE4fk4oFwNZgSpKJ4ivqs8-0dJVGg7/preview",
    ],
    [
      "Arco 8 - Portal Rojo",
      "https://drive.google.com/file/d/1ehwUNNInNSr5j1KSNKPys-uEsFX4uUrE/preview",
    ],
    [
      "Arco 9 - Castillo Demonio",
      "https://drive.google.com/file/d/1gmikT8TZdxZNm6FkP5jajQmYOWXT1Hdc/preview",
    ],
    [
      "Arco 10 - Reevaluacion de Rango",
      "https://drive.google.com/file/d/1If9YmGE5Sctx83v-mp9ePLJLAOl8ks8t/preview",
    ],
    [
      "Arco 11 - Portal del gremio de cazadores",
      "https://drive.google.com/file/d/1furYHV3v4d09PsVu0oDmDNCYXSfQpCOo/preview",
    ],
    [
      "Arco 12 - Regreso al castillo demonio",
      "https://drive.google.com/file/d/1ZhbI74d7OXFUu8TRXVmJBvsMzWL1R5lt/preview",
    ],
    [
      "Arco 13 - Arco de la isla de Jeju I",
      "https://drive.google.com/file/d/1POvVX0BC4aupgiF41Krqz249RYdQBNZD/preview",
    ],
    [
      "Arco 14 - Isla de Jeju II",
      "https://drive.google.com/file/d/1srU288qesJBuO4JVxA_sxZM9jJXMP-YF/preview",
    ],
    [
      "Arco 15 - Reclutamiento",
      "https://drive.google.com/file/d/1F0g_e3IcNtCxp6Uqm-tGPDnFFui2zgBG/preview",
    ],
    [
      "Arco 16",
      "https://drive.google.com/file/d/1nwy1tRTj3gIwkfHb8Y8eIthx6yz7FosD/preview",
    ],
    [
      "Arco 17",
      "https://drive.google.com/file/d/1tWNMPyhSEjfVt7fWrwm7Zscsgk9ByafO/preview",
    ],
    [
      "Arco 18",
      "https://drive.google.com/file/d/1q5g1kgJTGaFDNRIITUHmWF1ij4hK9ZN4/preview",
    ],
    [
      "Arco 19",
      "https://drive.google.com/file/d/1U669BqWfMaEclRXQDa-9FSy3Gg8KAl4Y/preview",
    ],
    [
      "Arco 20",
      "https://drive.google.com/file/d/1NxK8K9d4Nbv1wykISZWED40e0YzLjAHT/preview",
    ],
    [
      "Arco 21",
      "https://drive.google.com/file/d/1DPNjMZ6XvWsC8iaYd5jbvXfL1FoLsVrZ/preview",
    ],
    [
      "Arco 22",
      "https://drive.google.com/file/d/1SQCwyNUpp9CmWts2pCfIrrBb4p3LyUn6/preview",
    ],
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
      let iframe = document.createElement("iframe");
      iframe.src = pdf;
      iframe.type = "application/pdf";
      iframe.width = "100%";
      iframe.height = "700px";
      document.body.appendChild(iframe);
      let button = document.createElement("button");
      button.innerHTML = "Volver";
      document.body.appendChild(button);
      button.addEventListener("click", function () {
        h2.remove();
        iframe.remove();
        button.remove();
        Container.style.display = "";
      });
    });
  });
});
