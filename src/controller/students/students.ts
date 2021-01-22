import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const studensScene = new Scenes.BaseScene<Scenes.SceneContext>('studens');

studensScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
studensScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

studensScene.command('back', leave<Scenes.SceneContext>());
studensScene.on('text', (ctx) => ctx.reply(ctx.message.text));
studensScene.on('message', (ctx) => ctx.reply('Only text messages please'));
