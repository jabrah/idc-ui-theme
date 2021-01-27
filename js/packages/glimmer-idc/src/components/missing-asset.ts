import Component, { hbs } from '@glimmerx/component';

export default class MissingAsset extends Component {
  static template = hbs`
    <div class="flex items-center justify-center h-24 w-24 mr-2 sm:mr-20 flex-shrink-0">
      <svg
        class="h-16 w-16 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </div>
  `;
}
