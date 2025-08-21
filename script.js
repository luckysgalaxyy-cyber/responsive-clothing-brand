// Simple scroll animation
document.addEventListener("scroll", () => {
  const products = document.querySelectorAll(".product");
  products.forEach(p => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      p.style.opacity = "1";
      p.style.transform = "translateY(0)";
    }
  });
});
