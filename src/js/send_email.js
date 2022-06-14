import Email from "./smtp";

function send_email() {
  if (localStorage.mail) {
    console.log("メールアドレスが存在します");
    Email.send({
      SecureToken: "ae028fb3-b547-4a18-a17d-4d37e680ee63",
      To: localStorage.mail,
      From: "umbrella.remainder@gmail.com",
      Subject: "雨が降りそうです！",
      Body: "お出かけ途中に失礼します！\n1時間以内に雨が降りそうですので、傘を持っていきませんか？",
    }).then((message) => {
      console.log("メールを送信完了しました！\nmessage:", message);
    });
  } else {
    console.log("メールアドレスが存在しません");
  }
}
export default send_email;
