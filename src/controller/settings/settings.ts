import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const settingsScene = new Scenes.BaseScene<Scenes.SceneContext>('settings');

settingsScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
settingsScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

settingsScene.command('back', leave<Scenes.SceneContext>());
settingsScene.on('text', (ctx) => ctx.reply(ctx.message.text));
settingsScene.on('message', (ctx) => ctx.reply('Only text messages please'));
