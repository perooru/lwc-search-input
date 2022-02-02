import { LightningElement, track, api } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
  queryTerm;

      handleKeyUp(evt) {
          const isEnterKey = evt.keyCode === 13;
          if (isEnterKey) {
              this.queryTerm = evt.target.value;

            var divblock = this.template.querySelector('[name="enter-search"]');
            if (divblock) {
              this.template.querySelector('name="enter-search').className = 'class1';
            }        

          }
      }
}
