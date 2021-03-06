import send_email from "./send_email";
import { stop } from "./watch_location";

// open-meteoから1時間ごとの降水量を取得する
function get_weather(latitude, longitude, speed) {
  // 現在時刻のオブジェクト
  const now = new Date();
  // UTCに変換したときの〇時を取得
  const hour = now.getUTCHours();
  // open-meteo apiのurl
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=precipitation`;
  // urlからデータを取得
  fetch(url)
    .then((data) => data.json())
    .then((json) => displayInfo(json, hour, speed));
}

// 取得した降水量に応じて描画する
function displayInfo(json, hour, speed) {
  // 要素の取得
  const notice = document.getElementById("notice");
  const weather1 = document.getElementById("weather1");
  const weather2 = document.getElementById("weather2");

  // jsonから現在の降水量と1時間後の降水量を取得
  const precipitation0 = json.hourly.precipitation[hour];
  const precipitation1 = json.hourly.precipitation[hour + 1];
  // 現在の降水量または1時間後の降水量が0以上のとき
  if ((precipitation0 > 0 || precipitation1 > 0)) {
    stop(); // 位置情報の追跡を停止
    notice.innerHTML = "現在傘が必要です！";
    if(speed >= 0.8)
    {
      alert("雨が降りそうです！\nお出かけするなら傘を持って行きましょう！")
      send_email();
    }
  }
  weather1.innerHTML = "現在の降水量: " + precipitation0 + " mm";
  weather2.innerHTML = "1時間後の降水量: " + precipitation1 + " mm";
}

export default get_weather;
