const template = document.createElement("template");

template.innerHTML = `
<style>
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .header {
    position: fixed;
    height: 100px;
    width: 100%;
    z-index: 1;
    background-color: var(--base-color)
  }

  .nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
    align-items: center;
  }

  .nav-links__item {
    color: white;
    text-decoration: none;
  }

  .logo {
    height: 40px;
    width: 40px;
  }

  @media only screen and (max-width: 600px) {
    .logo {
      height: 1.5rem;
      width: 1.5rem;
    }

    .nav-links__item {
      font-size: 14px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
      margin: 0 auto;
    }
  }
</style>

<header class="header">
  <nav
    class="
      nav
      container
    "
  >
    <a href="../index.html" class="text-white">
      <!-- svg logo -->
      <svg viewBox="0 0 506.32 608.64" class="logo">
        <defs>
          <style>
            .cls-1 {
              fill: #fff;
            }
          </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              class="cls-1"
              d="M380.69,481.36h0A42.14,42.14,0,0,0,355.15,490,168.9,168.9,0,0,1,89.5,397h.09A173.38,173.38,0,0,1,90,312.58h-.13a167.77,167.77,0,0,1,43.95-76.44,169.62,169.62,0,0,1,37.71-28.47A41.8,41.8,0,0,0,192.86,171h0c0-32-34.42-52.55-62.43-37C37.79,185.47-19.19,293.34,6,411.22c20.12,94.35,93.3,169,187.34,190.56,80.28,18.39,156.18-1.4,213.14-44.8C438.47,532.58,421,481.36,380.69,481.36Z"
            />
            <path
              class="cls-1"
              d="M376.2,134.19c-28.13-15.66-62.74,4.63-62.74,36.83h0a41.83,41.83,0,0,0,21.32,36.65,169.68,169.68,0,0,1,37.72,28.47,167.77,167.77,0,0,1,43.95,76.44H295.35V42.19A42.19,42.19,0,0,0,253.16,0h0A42.19,42.19,0,0,0,211,42.19V312.58H109.34a154.53,154.53,0,0,0-6,43A151,151,0,0,0,109,397H464.87a41.34,41.34,0,0,0,41.45-41.07v-.42A253.09,253.09,0,0,0,376.2,134.19Z"
            />
            <path
              class="cls-1"
              d="M253.16,507.37a42.19,42.19,0,0,0,42.19-42.19V415.25H211v49.93a42.19,42.19,0,0,0,42.19,42.19Z"
            />
          </g>
        </g>
      </svg>
    </a>

    <!-- nav links -->
    <div class="nav-links">
      <a
        href="./me.html"
        class="nav-links__item"
        >About Me</a
      >
    </div>
  </nav>
</header>
`;

export class MyHeader extends HTMLElement {
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

window.customElements.define("my-header", MyHeader);
