const NodeMailer = require('nodemailer')
 
function request_to_smpt (smtpData, mailData) {
 
  const transporter = NodeMailer.createTransport(smtpData)
 
  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
 
 
function send_mail() {
  const smtpData = {
    host: 'smtp.gmail.com', 
    port: '465',
    secure: true,
    auth: {
      user: 'rain.reminder.kindai@gmail.com',
      pass: ''
    }
  }
 
  // 送信内容を作成
  const mailData = {
    from: '"傘知らせるくん" <' + smtpData.auth.user + '>',
    to: 'a@mail.com',
    subject: '雨が降りそうです！',
    text: 'お出かけ途中に失礼します！\n1時間以内に雨が降りそうですので、傘を持っていきませんか？',
    html: 'お出かけ途中に失礼します！<br>1時間以内に雨が降りそうですので、傘を持っていきませんか？'
  }
 
  request_to_smpt(smtpData, mailData)
}
send_mail();