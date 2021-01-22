import { IBotContext } from 'model';
import { Scenes } from 'telegraf';

const { leave } = Scenes.Stage;

export const preSchoolScene = new Scenes.BaseScene<Scenes.SceneContext>('preSchool');

preSchoolScene.enter(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));
preSchoolScene.leave(({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('')));

preSchoolScene.command('back', leave<Scenes.SceneContext>());
