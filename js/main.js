
import { books } from "./books.js";

// ==================================
// MOSTRAR CATÁLOGO
// ==================================

const booksGrid = document.getElementById("booksGrid");

function renderBooks() {
  booksGrid.replaceChildren();

  books.forEach((book) => {
    const article = document.createElement("article");
    article.className = "book-card";

    const coverContainer = document.createElement("div");
    coverContainer.className = "book-cover";

    const image = document.createElement("img");
    image.src = book.cover;
    image.alt = `Portada de ${book.title}`;
    image.loading = "lazy";

    coverContainer.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = book.title;

    const description = document.createElement("p");
    description.textContent = book.description;

    const price = document.createElement("div");
    price.className = "book-price";
    price.textContent = book.price;

    const buyButton = document.createElement("a");
    buyButton.className = "buy-button";
    buyButton.textContent = "Comprar ahora →";
    buyButton.href = book.hotmartUrl;

    if (book.hotmartUrl === "#") {
      buyButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Próximamente estará disponible este ebook.");
      });
    } else {
      buyButton.target = "_blank";
      buyButton.rel = "noopener noreferrer";
    }

    article.append(
      coverContainer,
      title,
      description,
      price,
      buyButton
    );

    booksGrid.appendChild(article);
  });
}

renderBooks();

// ==================================
// MENÚ PARA CELULARES
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// ==================================
// AÑO AUTOMÁTICO
// ==================================

document.getElementById("year").textContent =
  new Date().getFullYear();

// ==================================
// FORMULARIO DE SUSCRIPCIÓN
// ==================================

const newsletterForm =
  document.getElementById("newsletterForm");

const newsletterMessage =
  document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  newsletterMessage.textContent =
    "¡Gracias por tu interés! Próximamente habilitaremos las suscripciones.";

  newsletterForm.reset();
});
