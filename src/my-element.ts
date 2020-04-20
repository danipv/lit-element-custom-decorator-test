import {LitElement, html, customElement, property} from 'lit-element';

function decorator() {
  return (target: any, name: string) => {
    setTimeout(() => {
      target[name] = 10; // count
    }, 4000);
  };
}

@customElement('my-element')
export class MyElement extends LitElement {
  @decorator()
  @property({type: Number})
  count = 0;

  render() {
    return html`
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
    `;
  }

  private _onClick() {
    this.count++;
  }
}
