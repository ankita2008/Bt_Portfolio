 // Typed.js Animation
      var typed = new Typed(".typed-text", {
        strings: ["Frontend Developer", "Web Designer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });

      // Smooth Scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });

      // Active Nav Link on Scroll
      // window.addEventListener('scroll', () => {
      //     let current = '';
      //     const sections = document.querySelectorAll('section');

      //     sections.forEach(section => {
      //         const sectionTop = section.offsetTop;
      //         if (pageYOffset >= sectionTop -

      // Active Nav Link on Scroll
      window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
          }
        });

        document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
          }
        });
      });

      // Scroll Top Button Show/Hide
      const scrollBtn = document.querySelector(".btn-scroll-top");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollBtn.style.display = "flex";
        } else {
          scrollBtn.style.display = "none";
        }
      });

      // Contact Form Submit
      const form = document.querySelector("form");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();
      });
