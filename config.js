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
global.devs = "2347078218938";
global.sudo = process.env.SUDO || "2347078218938";
global.owner = process.env.OWNER_NUMBER || "2347078218938";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RNQWFKN1k4Mi9iTU44Sm5CNkl3M0ordm1kQkpqK0VZTllYVnlJckdIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm94aEhrb0VGRkwyNGJONjBscE1rQVdGY2pHY1V2M0tIbVg2Ym9TNysyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUFgrdTlEc0VHVWU0YnBLMm1QV2pEVjFaS0dtOXBYb0xIamVSMDJCTVhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudmlYUjMrVHF1b29iS00rWHB2ZTVkK2RqOGR3SW9FOUs0L3JzcVQ4dzNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKRXB3emtuREhhNno4aHA4cEQ3amdtcGtrN29FYUpPLzR4bXNIOWhlRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhKSDJvMEQrYUZKYlhNSGZHK1ptRk1tZWJMYTBTamdXMGdHN0ljM0N2M0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0s5V0NPUDFqWVYxcWFzd2JoRGI4SkJRU08vSy94eUhYZXZLZjMySTZVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0JFcFRQb29FREZFNExON1daT1QvdDExeU14ZTZ0Qzh2VThWbTRDMmpXMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZodmM5S0F6L0F3VE5BaFRtTVIwTXd2RXkyN0xXd2dobFJYazBmRFZES1NpWE5xK2FDWDdKQlF5akpBLzBXWjRkZFUrUFg4cUFQUkJkd2NnRTFCQmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJScHZPcmMweXBPQ3JUa3hIVkxrOExQaWE0bDJBNjVHbm9ZNWROaTNnZmVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzgyMTg5MzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjM0NENDNDlBRkY2MUJFNkQyRjk2MjA5RUMyMzgxN0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDI0ODExMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3ODIxODkzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQUNERTNGNzBDNENDQzMyRDQ2MjZDNzY4QTk4MzVFNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0MjQ4MTEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDc4MjE4OTM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIwOEMyMkQxMTEyNDYwQTVDQUUxQTVCMzM1OEIzMkVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQyNDgxMTR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzgyMTg5MzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDBDNTAxQ0Y2NkQ5NjlCQzExNjg1MEU4QzJGNzgwRTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDI0ODExNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM3lBUTN4ajRTUC04X0V1emhpdlZ4QSIsInBob25lSWQiOiIwYmIyMjE0My1iZWRjLTRlMGItOTE5ZC03OTNjYmRkNDg5MzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEY2eE5uWXAzMTlSbWljMHpFSGpZN3VpK0lZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngwbW5Rc1B6WGh1aUkzUW5tbnBvYmoxbUFhdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOVjU2SlFGUiIsIm1lIjp7ImlkIjoiMjM0NzA3ODIxODkzODoxMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnFxMElVRkVLR04rcm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSFdWZlNKVjlyRThxa1o1L1U5SzFZa2lFQnZ4UFVuMEQ1dFFveWp6Q01HZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidW54M2pua0FzYW04cFNNR001SmhRWjRqTUlod0JYbkEzZXBBWnpZNGFnYVhhQTFqYVQ2eWhjNGM2Nkc0ajdXamk4V2tHRnJobnFPc1Vjd2lERkFpQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZlNlU5SmlVVDNIZkhxUnhseWRyZ0x6Z1oyNWxJbGxxM3lyR2d5c2VRMUg1dHFwNDgxdGFkN01mRk9OMklJRndWditUSVoxMndQcW9tS1VCWUhQT2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA3ODIxODkzODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSMWxYMGlWZmF4UEtwR2VmMVBTdFdKSWhBYjhUMUo5QStiVUtNbzh3akJvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0MjQ4MTExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU41SSJ9"
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
