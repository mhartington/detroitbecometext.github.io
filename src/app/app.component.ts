import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemePickerService } from './shared/services/theme-picker.service';
import { GoatCounterService } from './shared/services/goat-counter.service';
import { TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { TextDirectionService } from './shared/services/text-direction.service';

type Language = {
	id: string;
	label: string;
};

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	// TODO: Add observable to change ltr to rtl when language changes

	constructor(
		public readonly themePickerService: ThemePickerService,
		public readonly translocoService: TranslocoService,
		public readonly textDirectionService: TextDirectionService,
		private readonly goatCounterService: GoatCounterService,
	) {}

	@HostListener('window:keyup', ['$event'])
	languageNavigationEvent(event: KeyboardEvent) {
		let increment = 0;
		if (event.key === 'l') {
			increment = 1;
		} else if (event.key === 'k') {
			increment = -1;
		} else {
			return;
		}

		event.stopImmediatePropagation();

		const currentLangId: string = this.translocoService.getActiveLang();
		const allLangs: Language[] =
			this.translocoService.getAvailableLangs() as Language[];
		const currentLangIndex = allLangs.findIndex(
			(l) => l.id === currentLangId,
		);
		let nextIndex = currentLangIndex + increment;

		if (nextIndex === allLangs.length) {
			nextIndex = 0;
		} else if (nextIndex < 0) {
			nextIndex = allLangs.length - 1;
		}

		this.translocoService.setActiveLang(allLangs[nextIndex].id);
	}
}
