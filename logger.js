function onMessage() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var q = xmlhttp.responseText;
                socket.emit('newMessage',q);
            }
        };
        var m = chat.slice(-1).pop().message;
        xmlhttp.open("GET", "http://ahitt-industries.com/logger.php?q=" + m, true);
        xmlhttp.send();
    }
}
