import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const locationScene = new Scenes.BaseScene<Scenes.SceneContext>('location');

locationScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
locationScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

locationScene.command('back', leave<Scenes.SceneContext>());
