function register_mailaddress() {
  let email = document.getElementById("mail_field").value;
  if (!email.match(/.+@.+\..+/) && email) alert("メールアドレスの形式が間違っています\nメールアドレスをご確認ください");
  else if (email.match(/.+@.+\..+/)) {
    console.log("メールアドレスを保存しました");
    localStorage.setItem("mail", email);
    document.getElementById("mail_field").value = "";
  }
}

export default register_mailaddress;
