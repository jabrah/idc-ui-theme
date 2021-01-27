import Component, { hbs, tracked } from '@glimmerx/component';
import TitleBar from './title-bar';
import List from './list';
import ListItem from './list-item';
import ListSpinner from './list-spinner';

interface Args {}

export default class Collections extends Component<Args> {
  @tracked title: string = 'All Collections';
  @tracked isLoading: boolean = false;
  @tracked list: {}[] = [];

  constructor(owner: unknown, args: Args) {
    super(...arguments);

    this.fetchCollections();
  }

  async fetchCollections() {
    this.isLoading = true;
    let url =
      'https://islandora-idc.traefik.me/search_rest_endpoint?query=ss_type:collection_object';

    try {
      let res: Response = await fetch(url);
      let data: { rows: [] } = await res.json();

      this.list = data.rows;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  static template = hbs`
    <TitleBar @title={{this.title}} />
    {{#if this.isLoading}}
      <ListSpinner />
    {{else}}
      <List @list={{this.list}} />
    {{/if}}
  `;
}
