// banner image slider

let bannerIndex = 0;
animateBanner();

function animateBanner() {
  let banner = document.getElementsByClassName("banner__img");
  for (let i = 0; i < banner.length; i++) {
    banner[i].style.display = "none";
  }
  bannerIndex++;
  if (bannerIndex > banner.length) {bannerIndex = 1}
  banner[bannerIndex-1].style.display = "block";
  setTimeout(animateBanner, 3000);
}