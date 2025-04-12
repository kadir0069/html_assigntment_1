function emailSend(){

    Email.send({
        Host : "s1.maildns.net",
        Username : "skinnerkiera155@gmail.com",
        Password : "84DED3FFEA12C5D3FB6A0EFE5A3C715BB499",
        To : 'skabdulkadir503@gmail.com',
        From : "skinnerkiera155@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}