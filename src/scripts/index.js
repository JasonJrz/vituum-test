import fragmentShader from './shaders/fragment-shader.glsl';
import vertexShader from './shaders/vertex-shader.glsl';

class App {
  constructor() {
    console.log('Init');

    // this.addEventListeners()
    // this.addLinkListeners()
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
    });
  }

  async onChange({ url }) {
    const request = await fetch(url);

    if (request.status === 200) {
      const html = await request.text();
      console.log(html);

      window.history.pushState({}, '', url);
    }
  }

  addEventListeners() {
    console.log('Listeners Initiated');
    window.addEventListener('popstate', () => this.onPopState());
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      const isLocal = link.href.indexOf(window.location.origin) > -1;

      if (isLocal) {
        link.onclick = (event) => {
          event.preventDefault();

          this.onChange({
            url: link.href,
          });
        };
      }
    });
  }
}

new App();
