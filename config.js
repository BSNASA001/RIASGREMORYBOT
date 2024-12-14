//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349120838682";
global.sudo = process.env.SUDO || "2349120838682";
global.owner = process.env.OWNER_NUMBER || "2349120838682";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElqeVdxMHQ2aWU0aWtCY2ovaGN5eFd4TVh5M3JGY2g3dGFEaVo0TlMwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0ZLTnc1ZVM3eC8vSnRra1ZNdzFRdlJFUHVldEZKSndlRU9jSnZqYmJuZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSnBEYXJPRkdNZzRpbkFjMmNUZ21QandQZWxwWGZDbHdEMDFhbHpqS1djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3V3FnMlVsSjN0K29NM213T3F3Sk96eW90dkRETHpoeFZEQUZmVGEwU1hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BRUw0STlXUjVEZXYrbEp0ZUVWL00xYllTU0lqZlhBdVlHdCtud2pFa1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhnSEVuNFoxcUNJbGlTaG1xVmlFelZ3S1V0QjRlK2dOcUlzREZmcGluajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0p0WGF5NHdJeTZ1cXNSYlNKclhNYjV2UWJRYXRRQzRsejBGRFZ1YmNVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibC9aK3Voby9QTkM0N21BMWhVa3ZJREUxdklxRmxCUlY1YXB0Z2hvQ1ZGWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitqRjNvM2VFaXo1bTNUSmlyUjFzeFRXb1ZMYlR2eEN3cUtqUjFjbWpFZ1Y5dVFiT3pTSzQ4MS9QcVFCTFJmZnBETjdDZjlndlo3VnhXL3RXSzBLQmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6Imd2L3FkSHVUWFVEOTZSK0VDRTdrSFZ4SHhIVFpIRnJtYy9ITXlQcFlJRXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3ODIxODkzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MEFBOUJCQjQyREI0OUIwRjZBREU2ODI1N0ExNTk3MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0MjE0NDkzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDc4MjE4OTM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY3NTdFRUM1RUM4RDI5RTcyMzNFRUExOUU3RkYxQzNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQyMTQ0OTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzgyMTg5MzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUI4QzMxNUZENjY2ODE2QTc2Q0Y4MkU0RDhGOEExM0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDIxNDQ5Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3ODIxODkzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNDc5MTRFNURGRTVBRDQyNzk1MzgxNThENTA2MkI0QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0MjE0NDk2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUTHhJWU1FWlJ6dTVGOEYxN2lPVEFnIiwicGhvbmVJZCI6ImE0NTFjODhiLThjMjQtNDkwOC1iOTE3LTMwZWJhM2U4MzIyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQ29veThwN0pRSnNZYXVteVdiSEhWeWFTODA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBRSjM4UmNxak44cytpTHQrd0lHelNpY1cwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktKRTJMNUZYIiwibWUiOnsiaWQiOiIyMzQ3MDc4MjE4OTM4OjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09qN2tiSURFTStHK0xvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZNbFVsUXZxTlVCeDQ0a09yNVczL2kva291UWdVMHRQbzkyVFJXemNDbXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9SN1M3V1B3TklwdlJYdlc5blE0MnltZDdFS0c3N0NkRU1GU1ByOTVLa21oZzMvUW5NRHVyWjErY2hVdllQQ1Q0NGFqc2RSSTU2TTNNWlFtdW5HdEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzVmFPSmMrMDJkNURNMk01eTRwV1hYTWNsSmQxMENybWtwR245OW1lQTVUNk53dGt1OGN4Nm5DUFI4VlBaN1VxNTYyQlFVQ1VyNi9idVZrUzdHM0FoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNzgyMTg5Mzg6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVEpWSlVMNmpWQWNlT0pEcStWdC80djVLTGtJRk5MVDZQZGswVnMzQXBzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0MjE0NDkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhVYSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
