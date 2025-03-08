import axios from "axios";

const IMAGE_API = "https://picsum.photos/v2/list?page=1&limit=100";
const VIDEO_API = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";

const generateTextPosts = (count, startIndex) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `text-${startIndex + i}`,
    type: "text",
    content: `This is a sample text post #${startIndex + i}`,
  }));
};

export const fetchData = async (startIndex, count) => {
  try {
    const [imageResponse, videoResponse] = await Promise.all([
      axios.get(IMAGE_API),
      axios.get(VIDEO_API),
    ]);

    const images = imageResponse.data.map((img, i) => ({
      id: `img-${img.id}`,
      type: "image",
      content: img.download_url,
    }));

    const videos = videoResponse.data.map((vid, i) => ({
      id: `video-${vid.id}`,
      type: "video",
      content: vid.videoUrl,
    }));

    const texts = generateTextPosts(count, startIndex);


    const combined = [...images, ...videos, ...texts].sort(() => Math.random() - 0.5);

    return combined.slice(0, count);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
