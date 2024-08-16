import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { MatDividerModule } from '@angular/material/divider';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { CommonTranslationKey } from '../../../../shared/utils/common-translation-keys.enum';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		RelationComponent,
		ConditionedContentComponent,
		UnlockConditionComponent,
		TranslocoModule,
	],
	templateUrl: './partners-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersChapterContentComponent {
	UnlockType = UnlockType;
	CommonTranslationKey = CommonTranslationKey;
	RelationName = RelationName;
	RelationType = RelationType;

	constructor(protected readonly translationService: TranslationService) {}
}
