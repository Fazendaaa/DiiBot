import { controller } from 'controller';
import { IBotContext } from 'model';
import { join } from 'path';
import {
  session,
  Telegraf
} from 'telegraf';
import I18n from 'telegraf-i18n';
import RedisSession from 'telegraf-session-redis';

const bot = new Telegraf(<string> process.env.BOT_KEY);
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
bot.use(controller.middleware());
bot.use(redisStorage.middleware());
bot.use(internationalization.middleware());

bot.catch(console.error);

bot.start(async ({ i18n, replyWithMarkdown }: IBotContext) => {
  return replyWithMarkdown(i18n.t('start'));
});

bot.help(async ({ i18n, replyWithMarkdown }: IBotContext) => {
  return replyWithMarkdown(i18n.t('help'));
});

bot.on('text', async ({ i18n, message, replyWithMarkdown }: IBotContext) => {
  const { type } = message?.chat;

  if ('private' !== type) {
    return false;
  }

  return replyWithMarkdown(i18n.t('notAvailable'));
});

bot.launch();
