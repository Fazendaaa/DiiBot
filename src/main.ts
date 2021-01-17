import { join } from 'path';
import {
  Context,
  session,
  Telegraf
} from 'telegraf';
import I18n from 'telegraf-i18n';
import RedisSession from 'telegraf-session-redis';

const bot = new Telegraf(process.env.BOT_KEY);
const internationalization = new I18n({
  useSession: true,
  allowMissing: true,
  defaultLanguage: 'en',
  sessionName: 'session',
  directory: join(__dirname, '../locales')
});
const redisStorage = new RedisSession({
  property: 'redis',
  ttl,
  store: {
    port: null,
    host: null,
    url: process.env.REDIS_URL
  }
});

bot.use(session());
bot.use(Telegraf.log());
bot.use(redisStorage.middleware());
bot.use(internationalization.middleware());

bot.catch(console.error);

bot.start(async ({ i18n, replyWithMarkdown }: Context ) => {
  return replyWithMarkdown(i18n.t('start'));
});

bot.help(async ({ i18n, replyWithMarkdown }: Context ) => {
  return replyWithMarkdown(i18n.t('help'));
});

bot.on('text', async ({ i18n, scene, message }: Context ) => {
  const { text } = message;
  const { type } = message?.chat;

  if ('private' !== type) {
    return false;
  } if (i18n.t('menu') === text.toLower()) {
    return scene.enter('menu');
  } if (i18n.t('help') === text.toLower()) {
    return scene.enter('menu');
  }

  return i18n.t('notAvailable');
});
