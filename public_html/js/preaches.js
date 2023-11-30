$(function() {
    $('.play-audio').each(function() {
        this.addEventListener('click', () => getAudioTag(this).play());
    });
    
    $('button.pause-audio').each(function() {
        this.addEventListener('click', () => getAudioTag(this).pause());
    });
    
    $('button.stop-audio').each(function () {
        this.addEventListener('click', () => {
            let audioTag = getAudioTag(this);
            audioTag.currentTime = 0;
            audioTag.pause();
        });
    });
});

function getAudioTag(e) {
    let audioId = $(e).attr('audio-id');
    return document.getElementById(audioId);
}