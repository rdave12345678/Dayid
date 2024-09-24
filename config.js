//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348109243618";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUkyS0VxZ0RlTXFLVFVjZlVSQ1FQbGlMelhHSC8wUlRTWlFReEE1eU9HTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHh6VkVoZ2J1S2pUMGc1Z2JLVkhuWjY0TlpXYzZpbnRNZ0hSUVJkNnNIdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQVlmanEyZjV5L1lpdXEzajBZQnFRRndkaXpoRC9ZaFVVMXprUG9obm1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6cUFnaHhSM1EvWFdkUmpaSTVCQ2VIbXEvN096amQ0TEVtY2JtZnM2ZXhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PNkMxS3lDKzdjMk1MVURIYVU3NER1WU5IejdJaHgwWUw2TWRianhTblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCRFVHUndXOXZZcS9xZ3U3VDIvWEJJMkN1TVNlNXY3UWUxYnFTLzd5MGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEQvMGVJUXBhYW43OHg3NzdSeHRWZzF2MXpJMlZLSGVpYlVaUm1aKzVIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTk4QjZRTzF4RXpWQW5jb2hCemNjWUF4TGZHSHVtZjZCcUpEcFNZNlYwOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE3TUNWV3NvK25KdWJxK0hIblZQSkc1OFVSekRTN0x0Nml2UURDbFUzLytEWjBjZ3RwVnB5N3Y1R2M2Rm16ejBqUitreTV1MEdkRURrdVdLcnRXSkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJzZ2lSOS95dGRPZmFNZXNmdys0dGVpb0oydTFxeHZJeXlNOExySHNRc21BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMzg3Mzg5MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEVGNDZCRTU0NEI4MkJBNERENzI1MDZDNDRBQTBCRUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzIwMTEzNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAzODczODkwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMEZCODFCQzY5N0MzNzE3NEU2OTRDMTI0QjdCOTMxNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MjAxMTM1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0YkY1WF9keFNVbW5nWkdsY3NGcTdBIiwicGhvbmVJZCI6ImNmMjgzNzg3LWM0OTQtNDY0Ni1hYzY5LTgzMjgzYTUwN2FiZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0N3A3V1g2KzFDN05xM3U3Q01DeHI5YXYzRXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXdlTjJ6VjBoZEcwY21ScGl0U2ZHaEtOT29VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVBWTQyODZZIiwibWUiOnsiaWQiOiIyMzQ3MDM4NzM4OTA5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiROKIhuKck3xE8J+ZgyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUxELzlVQ0VOLyt5N2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieTh1RGRrYXM2bXRYdjE5LzZzaVZWbEQ1YkFSUHh6MnJLbmlSaEM0VHBGST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFgzMEJvTTVGcTM0dlRZVldrV0Q3UW8vcW5FNW9td0FuTm5xWXBkcCs1Lzl6K3M0d0xaMGdwRGp5UHVGeW1CWkVlQUtWaytUVWgrZ1pRdCtHZVQ5Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjN0bjVmRmRsMHRPNDRpaWY3dkovblQxY0ZySVN3RTdGL3V0MStUK2VWWGVFamx0Z3Mxd0FKUHdmdjNPWjArVmF3bjFscm1VU0pKWFZJTnNrbnRackNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAzODczODkwOToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN2TGczWkdyT3ByVjc5ZmYrcklsVlpRK1d3RVQ4YzlxeXA0a1lRdUU2UlMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjcyMDExMzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWJZIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
