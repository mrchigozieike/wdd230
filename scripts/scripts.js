const d = new Date();

  document.getElementById("currentyear").textContent = d.getFullYear();

  let oLastModif = new Date(document.lastModified);
  document.getElementById("lastmodified").textContent = oLastModif;