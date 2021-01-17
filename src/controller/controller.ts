import { greeterScene } from 'greeter';
import { Scenes } from 'telegraf';

export const statge = new Scenes.Stage<Scenes.SceneContext>([
  greeterScene
], {
  ttl: 10
});
