import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const feedbackScene = new Scenes.BaseScene<Scenes.SceneContext>('feedback');

feedbackScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
feedbackScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

feedbackScene.command('back', leave<Scenes.SceneContext>());
