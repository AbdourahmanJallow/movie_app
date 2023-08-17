import { Component } from '@angular/core';

@Component({
  selector: 'app-home-skeleton',
  templateUrl: './home-skeleton.component.html',
  styleUrls: ['./home-skeleton.component.css'],
})
export class HomeSkeletonComponent {
  public loading = true;

  public thumbnailUrl =
    'https://www.telerik.com/kendo-react-ui-develop/components/images/card-thumbnail.jpeg';
  public avatarUrl =
    'https://www.telerik.com/kendo-react-ui-develop/components/images/user-avatar.jpeg';
  public description = 'Having so much fun in Prague! #NaZdravi';
}
