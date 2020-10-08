var player, seconds = 0;
function onYouTubeIframeAPIReady() {
    console.log("player");
    player = new YT.Player('player', {
        events: {
          'onReady': onPlayerReady
        }
      });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function seek(sec){
    if(player){
        delay = 0
        switch(sec) {
            case "no-obst":
                delay = 3;
                break;
            case "custom-obst":
                delay = 42;
                break;
            case "dead-end":
                delay = 106;
                break;
            case "random-obst":
                delay = 136;
                break;
            default:
                dealy = 0
        }
        player.seekTo(delay, true);
        player.playVideo();
    }
}