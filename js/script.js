document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const chips = document.querySelectorAll(".ch-chip");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      chips.forEach((chip) => {
        const faculty = chip.getAttribute("data-faculty");
        const cohort = chip.getAttribute("data-cohort");

        if (
          filterValue === "all" ||
          faculty === filterValue ||
          cohort === filterValue
        ) {
          chip.classList.remove("dimmed");
        } else {
          chip.classList.add("dimmed");
        }
      });
    });
  });
});
