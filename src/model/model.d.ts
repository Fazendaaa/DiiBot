import { Context } from "telegraf";
import I18n from "telegraf-i18n";
import RedisSession from "telegraf-session-redis";

interface IMyRedis extends RedisSession {
  language: string;
}

export interface IBotContext extends Context {
  readonly i18n: I18n;
  readonly redis: IMyRedis;
};
