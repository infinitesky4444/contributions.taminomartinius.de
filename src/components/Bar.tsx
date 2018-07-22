// This is an alternative way to define components using decorators
import { Vue, Component, Prop } from 'vue-property-decorator';
import { DataPoint } from '@/types';
export { DataPoint } from '@/types';

@Component
export default class extends Vue {
  @Prop() sections!: DataPoint[];

  render() {
    const sections = this.sections.map(data => (
      <div class="bar__section" style={{ '--color': `var(--${data.color})` }}>
        {data.value.toLocaleString()}
      </div>
    ));

    return (
      <div class="bar">
        {sections}
      </div>
    );
  }
}
