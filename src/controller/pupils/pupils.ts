import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const pupilsScene = new Scenes.BaseScene<Scenes.SceneContext>('pupils');

pupilsScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
pupilsScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

pupilsScene.command('back', leave<Scenes.SceneContext>());
