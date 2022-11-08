let progress = [...document.getElementsByClassName("progress")];
progress.forEach((prog) => {
  percent = prog.dataset.prog;
  prog.style.width = percent + "%";
  if (percent == 100) {
    prog.style.backgroundColor = "var(--green-color)";
  } else if (percent > 65) {
    prog.style.backgroundColor = "var(--blue-color)";
  } else if (percent > 30) {
    prog.style.backgroundColor = "var(--orange-color)";
  } else if (percent < 30) {
    prog.style.backgroundColor = "var(--red-color)";
  }
});
