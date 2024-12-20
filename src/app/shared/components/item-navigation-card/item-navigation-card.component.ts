import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	HostListener,
	Inject,
	Input,
	TemplateRef,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';
import {
	ITEM_URL_TOKEN,
	ItemNavigationService,
} from '../../services/item-navigation.service';
import { DataItem } from '../../models/data-item';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';

@Component({
	selector: 'app-item-navigation-card',
	standalone: true,
	imports: [
		CommonModule,
		MatCardModule,
		MatDividerModule,
		TranslocoModule,
		NavigationLinkComponent,
	],
	templateUrl: './item-navigation-card.component.html',
	styleUrl: './item-navigation-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemNavigationCardComponent<T extends DataItem> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Input({ required: true }) itemTemplate: TemplateRef<any> = null!;

	@Input({ required: true }) public previousLabel: string = '';
	@Input({ required: true }) public nextLabel: string = '';

	constructor(
		private readonly route: ActivatedRoute,
		public readonly itemNavigationService: ItemNavigationService<T>,
		@Inject(ITEM_URL_TOKEN)
		public readonly itemUrl: string,
	) {
		this.route.paramMap
			.pipe(takeUntilDestroyed())
			.subscribe((params: ParamMap) => {
				this.itemNavigationService.onPathIdChanged(params.get('id'));
			});
	}

	@HostListener('window:keyup', ['$event'])
	itemNavigationEvent(event: KeyboardEvent) {
		this.itemNavigationService.onNavigationEvent(event);
	}
}
