'use strict';
// Видео на 1ой странице
const mainVideo = document.querySelectorAll('.quality-main-video-item');
const subVideo = document.querySelectorAll('.quality-submain-video-item');

mainVideo[0].classList.add('quality-main-video-item-active');

function hideMainVideo (){
    mainVideo.forEach(video => {
        video.classList.remove('quality-main-video-item-active');
    });
}
subVideo.forEach(function (video, index) {
    video.addEventListener('click', () => {
        hideMainVideo();
        mainVideo[index].classList.add('quality-main-video-item-active');
    });
});
