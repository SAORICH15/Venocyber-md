//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255617212978";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9QVVp4N1N5bDdESSt0amt3bGJVeXMzbTI5WVM1TU5kNHVEcmZ3NklVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTElqRUZJMXpNbXdRTFBkc0ZRaVdyZnhtdEo2Vld3Umgxcm5ycjdZY28zYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RFg5MlcvRlVHTGUwek5tQWlaQmZuY2pWaFVCamx2THM0UGV6MFdxemxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUElzZ2xLYVFpNi9TN0I0ZjNLR0hVNGRkRDlYLzE4alJXaFZXMTRZKzE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVEc1N2ZXJ1MjI3SnBHY3pwT3VPK3BNZzVjbFk5VDV2bVdORUN2V25qbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PSy9DRXIzaktQREswTFVsQmFPYWNua2d4Z2VqODd6Q0RBUkU5SnhkVW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1LcEp3VXZqeHh5KzFpUlc5TnBzOGYyRml3Z2YyNWFva250c3hTZnRrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tuaTAxTlEzODhzOWVyNHJWV1JmWW9menAzaVdjTEcxcVZERDdNSkhYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndWZTlkU2JGZDVGOGJXQWQvckQzcFhpRzF1TEt4amllalFYZmVqdjlVbWtjNHZUVmlkNndFOGxZeVVSclg1SmovL3U3VGx2MjJ1NG9ZTVBLYWNySmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6ImlvaWpZSWVpV2NvTm5aOGxyK2c2MVBuTld2czJXVjBUMEFxNFZvYjFCWUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlQtZnhlQy1SUVdpMWhjbTdUNVBIaVEiLCJwaG9uZUlkIjoiNjgwZWNjNGYtMmViNi00NWEyLWEwNTQtYzRjOWY3NzQ5OGIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFxbnBOaE1FUExEL2N5VEVQK0UwWWgwRTQrVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdm4ra3o3UVVNSzFXTWZHaEx1enhveE1BTUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUM5TlQxMkIiLCJtZSI6eyJpZCI6IjI1NTYxNzIxMjk3ODoxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJOZXR3b3JrIE1hcmtldGluZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkxmdWg4UXZZN0x1QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibEdzeFdyNVB1cm4xTmNEL0UzTkVIV2ppNDZyeFZWRWwrQmU1d2lXZ09nQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU2dXZ0ZJTERQN01tY05PSCswS1FoV0RERldmSVA5ZEF1bmNuY1pwQlV5WS8rOTgrbDk1WmFTN2h4emdKOUFROGJxSk00R3lmMm5pamJwdzg1S1BqQXc9PSIsImRldmljZVNpZ25hdHVyZSI6Inh0bnN3bnpRN3FyZGY2S0JRN2wzcGl2d0VtTjdTbUNRTGdCTThOcmJpdW9iVVhScW1tazRiRzFGOFBCd21UQlZDLzlERkRUaXRUZlRXVDBFOVFKNGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjE3MjEyOTc4OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpSck1WcStUN3E1OVRYQS94TnpSQjFvNHVPcThWVlJKZmdYdWNJbG9Eb0EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkyODM5MTR9" 
[15/10 5:50 PM] ignaschama: 
*_Pair Code Connected*
*_Made With love by fredietech♻️_*
❖⊷━━━━━━━━━━━━━━━━━━━━━━━━⊷❖
╭──━━━━━━◇✣❖◇━━━━━━━───❂
┃ FOR ALL LUCKY_MD BOT
┃ _Thanks for your support._
╰──━━━━━━◇✣❖◇━━━━━━━───❂
  ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
╭──━━━━━━◇✣❖◇━━━━━━━───❂
┃❖  『••• ⬡𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽⬡ •••』
┃⬡ *Ytube:* _youtube.com/@freeonlinetvT1_
┃⬡ *wa-me:* _https://wa.me/255752593977_
┃⬡ *wa-me:* _https://wa.me/255620814108_
┃⬡ *t-me:* _https://t.me/freditech_
┃
┃⬡MY bot Repos⬡
┃
┃⬡ *LUCKY bot:* _https://github.com/Fred1e/LUCKY_MD_
┃⬡ *My Github:* _https://github.com/Fred1e_
┃
┃⬡Support channels⬡
┃
┃⬡ *WATSAPP:* _https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f_
┃⬡ *TELEGRAM:* _https://t.me/+u3zlb5y6OfxhOTdk_
┃
┃⬡ *©Copyright* _Fredi-Ezra|Kingfredie
╰───━━━━━━◇✣❖◇━━━━━━━───❂
▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
✣➻⊷━━━━━━━━━━━━━━━━━━━━━━━━⊷➻✣

_Don't Forget To Give Star To My Repo_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xNWVh4V2dpVmQvZ1RWZTRKY092MVozNWl5am1LQXZFb0FGVGxobU0wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDhmK2U3RW1WdERENGN6bVJsN2JpT0VVc3VjWmY5NGUycGlpblc2bFltUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSm43MENiek1TSU9MeFVFN1hZRnFZbXhGeUNqSDh2L1RSZUk5MEVmQWswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSeWt5ckh0SjNESHRvVGx0S1pXazRFZ1VUd285OXpjU2M1L0xNMHNSclZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCNlV6TFZzMVVaZ08wejlYL3I3RFduTGZiRGlzcTdYaVRVQUp1bFFubG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJUZGR5b293MkF6TzNtVUVvQjZTcVg2OEVrNDROKzEwT1VwUEJRQTB0Q009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUs4UUtUWi9NWll4Z0RTcnliNkd0ZmVpSStmTXArb0JNK2xUQStXT0FtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV29TcDd3THAyUjY4VGdKeGpWWEF5czFiN2YzWUYweVRVdi94V3JZY3IyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZGYXNBcVVqcHBQUWZZcTVnT3IyaDRUZFlCMWl0b3JiRnh0MlRJVXhBR203ai9tS0E4UC9lazlITTU3MDlnQjFFS0VCTk04TGJ0cDNOT08zeGsxNURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJVZ2k0VWd0NG41bW5kUzhTbEM5c2pUY3Bjbnd0WDk2MXNMVmtVSi9nTW80PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0MDcyRmx2dVFNdW5WRzVaU2Eyb2xnIiwicGhvbmVJZCI6IjQwYWVjYzM0LTIxYzItNDEwNS1iZjQ2LTg0OTVkYWM3ZWQ0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTGZRdE90cWVHUE5mckRGZlBoVWZ6cWJjMnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEFXTktKUEFXaUpyd1RDeVNHYVhFcllBYkZZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpCNkpES0ZFIiwibWUiOnsiaWQiOiIyNTU2MTcyMTI5Nzg6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJOZXR3b3JrIE1hcmtldGluZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkhmdWg4UTZjYkN1QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibEdzeFdyNVB1cm4xTmNEL0UzTkVIV2ppNDZyeFZWRWwrQmU1d2lXZ09nQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSVJEZ2s1bHhnd0FjRU1kRGRYTGloZHd3eVRZLzd4eHBlTTJ6d044N1MwUk9HWkF6cENsZm9xZnBnR1FUZUJYdkdEa1pHRnJTTllVamVOL0lsb1NrQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InZKdm1UTmJaUkpad1U0WmNROTBqcDZTN1gzNW13Q1dzRVRhUVRDd2YvSkxxeW9uMFVyQTlGeTVHMWhUWHZIMTFpVnNiUkNlUWJBY2dYL3VpMFRiU0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjE3MjEyOTc4OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWlJyTVZxK1Q3cTU5VFhBL3hOelJCMW80dU9xOFZWUkpmZ1h1Y0lsb0RvQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTE0MzY3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIZlIifQ==eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxES2FEY0M3OGtXUEZQckdjcE9laHhJZ3lSQkhxK0pneTdNcjJ4YWttYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXVueUFkKzFWQkFUdFFhM3RKMS9SbVVkS2xMYWQrTHRHUllZbEQ3UWxpYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXT2kzOHYwOHlkUjlWTlJXelRsbVJoa1Y0YVFGTlRYY0d4anovckt2bjJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3VzA0ZG5pQlhPNytMTkZkQnRvSHN3eDBBdlZOaUt3Qm5iYzd2RVhidXdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFb2dFMjgrRDFZM1JXbUVJYVV1NzFndldBeUR0QTlBNnhRcWszUlRsRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPSEVWdUhmTEtNSHlnSEdaeEVWSW9iL2VUeExyenhsWGlrWjNQejMwUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklkNzdDdXI5WlVJRXVTdWRTUlplcFQzeUdFQUFqZkozZ3NySzU1NUkwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmo2YkttdVB0S3BDRHVrZ1RYVDFQOXlud1E5QVNVakxtbkRTZFVlNmJGOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5xSjdDVFJmNC82UVZjWDVXNzQyLzdnRWlaNTRsVmc5WEhmaHk1SWZBKzhON3Jub2pWY3AwWFJiVjVOdUNtV21PSmZtbnVqcTNPN2dPOUxPR3plS0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiNkVtZjQyWElRNVhRVm1SYTdQRmZxREtCN2NiNENRMWk3TUVCa1hyQy9jdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieHBqU0lhdE9TbENTZVlKLXNDVFhVdyIsInBob25lSWQiOiIyZDAyMWI3OC1iY2QxLTRhNDQtOWExMC1lZDI5ZGYxYWIwODEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid28wWUtIOXN4OFRjQ0Y0UlAyek5RYytPSmxVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdrZGFYekR2S29vRndkSWd0K1NwNnJTbUZEaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaTFE2MjJEOSIsIm1lIjp7ImlkIjoiMjU1NjE3MjEyOTc4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmV0d29yayBNYXJrZXRpbmcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05EZnVoOFEvcEM2dUFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxHc3hXcjVQdXJuMU5jRC9FM05FSFdqaTQ2cnhWVkVsK0JlNXdpV2dPZ0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikd1aTBUNm84WlRLQkVPWWxtdU5nREh3TWoxSkxZdHV0dkM4MjFpeEZMS2NUWmwyR3dhZEpROWQyMWJyVUpyeGlkd0hOUUtLaW1JQXNheURaNEpqZ0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrQk4waHlYOUdOSmVNNk1NVzZRRnhKUFhHVmUydXZSckdLN0NkZWk0d0dyWVU5MFl6K0VKTk9zM05QMmZrQm5pSHhtSEhpYUJjc25hUkJ6bm9FQmZBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYxNzIxMjk3ODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpSck1WcStUN3E1OVRYQS94TnpSQjFvNHVPcThWVlJKZmdYdWNJbG9Eb0EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkwMDU3MDd9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
