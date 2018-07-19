import App from './components/App';
import { Vue, Component } from 'vue-property-decorator';

const MAX_SCROLL = 1_000;

@Component({
  template: `
    <app :style="{
      '--scroll': scroll,
      '--alpha': alpha,
      '--beta': beta,
      '--gamma': scroll,
    }" />`,
  components: { App },
})
class Main extends Vue {
  scroll = 0;
  alpha = 0;
  beta = 1;
  gamma = 0;

  handleWheel(e: WheelEvent) {
    console.log(e.deltaY);

    this.scroll += e.deltaY / MAX_SCROLL;
    e.preventDefault();
  }
}

new Main({ el: '#app' });
