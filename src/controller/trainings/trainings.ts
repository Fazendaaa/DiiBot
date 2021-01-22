import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const trainingsScene = new Scenes.BaseScene<Scenes.SceneContext>('trainings');

trainingsScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
trainingsScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

trainingsScene.command('back', leave<Scenes.SceneContext>());
trainingsScene.on('text', (ctx) => ctx.reply(ctx.message.text));
trainingsScene.on('message', (ctx) => ctx.reply('Only text messages please'));
