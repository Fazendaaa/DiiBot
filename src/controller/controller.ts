import { contactScene } from 'contact';
import { feedbackScene } from 'feedback';
import { greeterScene } from 'greeter';
import { locationScene } from 'location';
import { optionsScene } from 'options';
import { preSchoolScene } from 'preSchool';
import { pupilsScene } from 'pupils';
import { settingsScene } from 'settings';
import { studensScene } from 'students';
import { Scenes } from 'telegraf';
import { trainingsScene } from 'trainings';

export const controller = new Scenes.Stage<Scenes.SceneContext>([
  contactScene,
  feedbackScene,
  greeterScene,
  locationScene,
  optionsScene,
  preSchoolScene,
  pupilsScene,
  settingsScene,
  studensScene,
  trainingsScene
], {
  ttl: 10
});
