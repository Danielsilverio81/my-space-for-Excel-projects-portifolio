import videos from "./videos.js";
const container = document.querySelector(".container-videos");

videos.forEach((video) => {
    const videoElement = document.createElement("video");
    videoElement.classList.add("video-elem");
    videoElement.src = video.src;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;


    const title = document.createElement("h2");
    title.innerText = video.title;

    const description = document.createElement("p");
    description.classList.add("video-description");
    description.innerText = video.description


    const wrapper = document.createElement("article");
    wrapper.classList.add("video-wrapper");

    wrapper.appendChild(videoElement);
    wrapper.appendChild(title);
    wrapper.appendChild(description);

    container.append(wrapper)
});
