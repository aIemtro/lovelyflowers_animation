// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 15 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del sol, iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabía", time: 45 },
  { text: "Que algún día pasaría", time: 48 },
  { text: "Que vendría a buscarla", time: 50 },
  { text: "Con sus flores amarillas", time: 53 },
  { text: "No te apures, no detengas", time: 58 },
  { text: "El instante del encuentro", time: 60 },
  { text: "Está dicho que es un hecho", time: 62 },
  { text: "No la pierdas, no hay derecho", time: 64 },
  { text: "No te olvides que la vida", time: 66 },
  { text: "Casi nunca está dormida", time: 69 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 92 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 100 },
  { text: "Él se acercó de repente la miro tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabía", time: 122 },
  { text: "Que algún día pasaría", time: 125 },
  { text: "Que vendría a buscarla", time: 127 },
  { text: "Con sus flores amarillas", time: 129 },
  { text: "No te apures, no detengas", time: 134 },
  { text: "El instante del encuentro", time: 136 },
  { text: "Está dicho que es un hecho", time: 138 },
  { text: "No la pierdas, no hay derecho", time: 140 },
  { text: "No te olvides que la vida", time: 142 },
  { text: "Casi nunca está dormida", time: 146 },
  { text: "Ella sabía que él sabía", time: 167 },
  { text: "Que algún día pasaría", time: 170 },
  { text: "Que vendría a buscarla", time: 172 },
  { text: "Con sus flores amarillas", time: 174 },
  { text: "No te apures, no detengas", time: 180 },
  { text: "El instante del encuentro", time: 182 },
  { text: "Está dicho que es un hecho", time: 184 },
  { text: "No la pierdas, no hay derecho", time: 186 },
  { text: "No te olvides que la vida", time: 188 },
  { text: "Casi nunca está dormida", time: 192 },
  { text: "Ella sabía que él sabía", time: 196 },
  { text: "Él sabía, ella sabía", time: 199 },
  { text: "Que él sabía, ella sabía", time: 201 },
  { text: "Y se olvidaron de sus flores amarillas", time: 203 },
  { text: "❤️ ", time: 212 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
