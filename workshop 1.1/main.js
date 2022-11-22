(function () {
    var videos = [
        document.getElementById("vid1"),
        document.getElementById("vid2"),
        document.getElementById("vid3"),
        document.getElementById("vid4"),
        document.getElementById("vid5"),
        document.getElementById("vid6")
    ];

    function stopOthers () {
        var id = this.id, i = 0;
        for (var j = videos.length; i < j; i++) {
            if (videos[i].id !== id) {
                videos[i].pause();
            }
        }
    }

    var i = 0;
    for (var j = videos.length; i < j; i++) {
        videos[i].addEventListener("play", stopOthers, false);
    }
})();