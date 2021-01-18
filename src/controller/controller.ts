import { greeterScene } from 'greeter';
import { IBotContext } from 'model';
import {
  Scenes
} from 'telegraf';

export const controller = new Scenes.Stage<Scenes.SceneContext>([
  options,
  greeterScene
], {
  ttl: 10
});
