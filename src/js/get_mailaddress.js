function get_mailaddress() {
  const button = document.getElementById("mail_button");
  const email = document.getElementById("mail_field").value;
  if (!email.match(/.+@.+\..+/)) {
    alert("メールアドレスをご確認ください");
  }
  button.addEventListener("click", localStorage.setItem("mail", email));
}

export default get_mailaddress;
