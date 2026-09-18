/* ================================================================
   IronForge Fitness — Main Script
   ================================================================ */

(function () {
  "use strict";

  /* ---- Mobile Nav Toggle ---- */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Scroll Progress Bar ---- */
  const sp = document.getElementById("sp");
  if (sp) {
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      sp.style.width = pct + "%";
    }, { passive: true });
  }

  /* ---- Reveal on Scroll (IntersectionObserver) ---- */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Stat Counter Animation ---- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1600;
          const start = performance.now();

          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(ease * target);
            el.textContent = current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---- Lead Form → WhatsApp ---- */
  const form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      /* Basic validation */
      let valid = true;
      form.querySelectorAll("[required]").forEach((field) => {
        const group = field.closest(".form-group");
        if (!field.value.trim()) {
          group.classList.add("has-error");
          valid = false;
        } else {
          group.classList.remove("has-error");
        }
      });

      if (!valid) return;

      const name = form.querySelector("[name='name']").value.trim();
      const phone = form.querySelector("[name='phone']").value.trim();
      const goal = form.querySelector("[name='goal']").value;

      const msg =
        "Hello IronForge Fitness!\n\n" +
        "I want to claim my first week free.\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Goal: " + goal;

      const url = "mailto:info@ironforgefitness.pk?subject=Enquiry &body=" + encodeURIComponent(msg);
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---- Header scroll style ---- */
  const header = document.getElementById("siteHeader");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        header.style.background = "rgba(10,10,10,.96)";
      } else {
        header.style.background = "rgba(10,10,10,.88)";
      }
    }, { passive: true });
  }
})();
