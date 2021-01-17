import {
  Context,
  Scenes
} from 'telegraf';

const { leave } = Scenes.Stage;

export const greeterScene = new Scenes.BaseScene<Scenes.SceneContext>('greeter');

greeterScene.enter(({ i18n, replyWithMarkdown }: Context) => i18n.t('greeter'));
greeterScene.leave(({ i18n, replyWithMarkdown }: Context) => i18n.t('bailing'));

greeterScene.command('back', leave<Scenes.SceneContext>());
greeterScene.on('text', (ctx) => ctx.reply(ctx.message.text));
greeterScene.on('message', (ctx) => ctx.reply('Only text messages please'));
