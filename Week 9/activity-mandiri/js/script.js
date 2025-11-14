function fn_ValForm() {
    var sMsg = "";
    var sName = document.getElementById("name").value;
    var sEmail = document.getElementById("email").value;
    var sMessage = document.getElementById("message").value;

    if (sName == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (sEmail == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else {
        var re = /^[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/i;
        if (!re.test(sEmail)) {
            sMsg += "\n* Format email tidak valid";
        }
    }

    if (sMessage == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    return true;
}
