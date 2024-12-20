import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	ViewChild,
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CardContainerComponent } from '../../components/card-container/card-container.component';
import { CardComponent } from '../../components/card/card.component';
import { Chapter } from '../../../shared/models/chapter';
import { ChapterService } from '../../../shared/services/chapter.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
	faCircleNotch,
	faExternalLinkAlt,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { LanguagePickerService } from '../../../shared/services/language-picker.service';
import { ThemePickerService } from '../../../shared/services/theme-picker.service';
import { ThemeToggleComponent } from '../../../layout/theme-toggle/theme-toggle.component';
import { LangPickerComponent } from '../../../layout/lang-picker/lang-picker.component';
import { LangPickerToggleComponent } from '../../../layout/lang-picker-toggle/lang-picker-toggle.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { TranslocoModule } from '@jsverse/transloco';
import { MatExpansionModule } from '@angular/material/expansion';

type AdditionalLink = {
	img: string;
	alt: string;
	title: string;
	subtitle: string;
	description: string;
	link: string;
};

@Component({
	standalone: true,
	imports: [
		CommonModule,
		MatDividerModule,
		CardContainerComponent,
		CardComponent,
		FontAwesomeModule,
		ThemeToggleComponent,
		LangPickerComponent,
		LangPickerToggleComponent,
		MatCardModule,
		FooterComponent,
		TranslocoModule,
		MatExpansionModule,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	@ViewChild('langToggle', { read: ElementRef })
	langToggleElement: ElementRef<HTMLElement> | null = null;

	public readonly chapters: Chapter[];
	public readonly additionalLinks: AdditionalLink[];

	faCircleNotch = faCircleNotch;
	faExternalLinkAlt = faExternalLinkAlt;
	faInfoCircle = faInfoCircle;

	constructor(
		private readonly chapterService: ChapterService,
		public readonly languagePickerService: LanguagePickerService,
		public readonly themePickerService: ThemePickerService,
	) {
		this.chapters = this.chapterService.getAll();
		this.additionalLinks = [
			{
				img: 'images/wikiaLogo.jpg',
				alt: 'Detroit: Become human wikia logo',
				title: 'Detroit: Become Human Wiki',
				subtitle: 'Fan-written wiki',
				description:
					'The best source of information about Detroit: Become Human, written for fans, by fans.',
				link: 'https://detroit-become-human.fandom.com/wiki/Main_Page',
			},
			{
				img: 'https://styles.redditmedia.com/t5_3ajb0/styles/communityIcon_sitp3wnsi1a41.png',
				alt: 'Subreddit icon',
				title: 'Detroit: Become Human Subreddit',
				subtitle: 'r/DetroitBecomeHuman',
				description: 'A subreddit dedicated to Detroit: Become Human.',
				link: 'https://www.reddit.com/r/DetroitBecomeHuman/',
			},
		];
	}
}
