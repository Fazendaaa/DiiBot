import { IBotContext } from "model";
import { Scenes } from "telegraf";

const { leave } = Scenes.Stage;

const options = new Scenes.BaseScene<Scenes.SceneContext>('options');

options.enter(async ({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('optionMenu'),));
