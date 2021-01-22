import { greeterScene } from 'greeter';
import {
  Scenes
} from 'telegraf';
import { contactScene } from './contact/contact';
import { feedbackScene } from './feedback/feedback';
import { locationScene } from './location/location';
import { optionsScene } from './options/options';
import { preSchoolScene } from './preSchool/preSchool';
import { pupilsScene } from './pupils/pupils';
import { settingsScene } from './settings/settings';
import { studensScene } from './students/students';
import { trainingsScene } from './trainings/trainings';

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
