const template = document.createElement("template");
import "./components/mouse.js";

template.innerHTML = `
<style>
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .text-center {
    text-align: center;
  }

  .hero {
    background-color: var(--base-color);
    color: var(--apex-color);
    height: 100vh;
    position: relative;
  }

  .hero__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .hero__heading {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .hero__description {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 600px) {
    .hero__heading {
      font-size: 1rem;
    }

    .hero__description {
      font-size: 1rem;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
      margin: 0 auto;
    }
  }
</style>

<section class="hero">
    <div class="hero__wrapper container">
      <h1 class="hero__heading text-center mb-md-4 mb-3">
        Senior Frontend Engineer.
      </h1>

      <p class="hero__description text-center text-base-lighten-1 col-md-9">
        I bring ideas to life through creativity and emerging technologies.
      </p>

      <!-- mouse svg -->
      <mouse></mouse>
    </div>
  </section>
`;

export class MyHero extends HTMLElement {
  constructor() {
    super();

    // attach Shadow DOM to the parent element.
    // save the shadowRoot in a property because, if you create your shadow DOM in closed mode,
    // you have no access from outside
    const shadowRoot = this.attachShadow({ mode: "closed" });
    // clone template content nodes to the shadow DOM
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("my-hero", MyHero);
