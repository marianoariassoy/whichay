const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  const header = document.querySelector("header");

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const color = entry.target.getAttribute("data-color");
      header.style.color = color;
    }
  });
}, observerOptions);

export const ObserverFunction = (element: string) => {
  const section = document.querySelector(element);
  observer.observe(section);
};
