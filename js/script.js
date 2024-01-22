document.addEventListener("DOMContentLoaded", function () {
  let Arcos = [
    ["Arco 1 - Mazmorra Rango D", "PDF/Arco01.pdf"],
    ["Arco 2 - Despertar", "PDF/Arco02.pdf"],
    ["Arco 3 - Mazmorra Instantánea", "PDF/Arco03.pdf"],
    ["Arco 4 - Mazmorras y Lagartos", "PDF/Arco04.pdf"],
    ["Arco 5 - Mazmorras y Prisioneros", "PDF/Arco05.pdf"],
    ["Arco 6 - Incursión de Yoo Jin-Ho", "PDF/Arco06.pdf"],
    ["Arco 7 - Cambio de Trabajo", "PDF/Arco07.pdf"],
    ["Arco 8 - Portal Rojo", "PDF/Arco08.pdf"],
    ["Arco 9 - Castillo Demonio", "PDF/Arco09.pdf"],
    ["Arco 10 - Reevaluacion de Rango", "PDF/Arco10.pdf"],
    ["Arco 11 - Portal del gremio de cazadores", "PDF/Arco11.pdf"],
    ["Arco 12 - Regreso al castillo demonio", "PDF/Arco12.pdf"],
    ["Arco 13 - Arco de la isla de Jeju I", "PDF/Arco13.pdf"],
    ["Arco 14 - Isla de Jeju II", "PDF/Arco14.pdf"],
    ["Arco 15 - Reclutamiento", "PDF/Arco15.pdf"],
    ["Arco 16", "PDF/Arco16.pdf"],
    ["Arco 17", "PDF/Arco17.pdf"],
    ["Arco 18", "PDF/Arco18.pdf"],
    ["Arco 19", "PDF/Arco19.pdf"],
    ["Arco 20", "PDF/Arco20.pdf"],
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
