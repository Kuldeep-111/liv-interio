export function getProjectImages(folder, imageCount) {
  return Array.from({ length: imageCount }).map((_, idx) => {
    const number = idx + 1;
    return {
      src: `/assets/images/projects/${folder}/${number}.webp`,
      alt: `Image ${number}`,
    };
  });
}
