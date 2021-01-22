import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const contactScene = new Scenes.BaseScene<Scenes.SceneContext>('contact');

contactScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
contactScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

contactScene.command('back', leave<Scenes.SceneContext>());
contactScene.on('text', (ctx) => ctx.reply(ctx.message.text));
contactScene.on('message', (ctx) => ctx.reply('Only text messages please'));
