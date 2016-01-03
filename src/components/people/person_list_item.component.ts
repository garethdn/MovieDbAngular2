import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {LoadingComponent} from '../common/loading/loading.component';
import {ImgHolderDirective} from '../common/img_holder/img_holder.directive';
import {BaseComponent} from '../common/base.component';

@Component({
  selector: 'person-list-item',
  templateUrl: 'dist/components/people/person_list_item.component.html',
  directives: [ImgHolderDirective]
})

export class PersonListItemComponent extends BaseComponent {

  @Input() person: Object = {};

  constructor() {
    super();
  }

}