import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnlockType } from '../../shared/enums/unlock-type.enum';
import { RelationName } from '../../shared/enums/relation-name.enum';
import { RelationType } from '../../shared/enums/relation-type.enum';
import { Chapter } from '../../shared/models/chapter';
import { ChapterService } from '../../shared/services/chapter.service';
import { ThemePickerService } from '../../shared/services/theme-picker.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { ConditionedContentComponent } from '../../shared/components/conditioned-content/conditioned-content.component';
import { ChoiceGroupComponent } from '../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../shared/components/choice-item/choice-item.component';
import { RelationComponent } from '../../shared/components/relation/relation.component';
import { UnlockConditionComponent } from '../../shared/components/unlock-condition/unlock-condition.component';
import { UnusedContentComponent } from '../../shared/components/unused-content/unused-content.component';

@Component({
	selector: 'app-info-dialog',
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule,
		MatDividerModule,
		ConditionedContentComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		RelationComponent,
		UnlockConditionComponent,
		UnusedContentComponent,
	],
	templateUrl: './info-dialog.component.html',
	styleUrl: './info-dialog.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoDialogComponent {
	UnlockType = UnlockType;
	RelationName = RelationName;
	RelationType = RelationType;

	public readonly chapters: Chapter[];

	constructor(
		private readonly chapterService: ChapterService,
		public readonly themePickerService: ThemePickerService,
	) {
		this.chapters = this.chapterService.getAll();
	}
}
