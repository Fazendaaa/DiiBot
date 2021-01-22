import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const greeterScene = new Scenes.BaseScene<Scenes.SceneContext>('greeter');

greeterScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('greeter')));
greeterScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('bailing')));

greeterScene.command('back', leave<Scenes.SceneContext>());
