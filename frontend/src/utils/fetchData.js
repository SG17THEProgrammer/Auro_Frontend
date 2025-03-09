import axios from "axios";

const IMAGE_API = import.meta.env.VITE_IMAGE_API;
const VIDEO_API = import.meta.env.VITE_VIDEO_API;

const randomTitles = [
  "The Beauty of Nature", "Urban Life in Motion", "A Journey Through Time",
  "Mysteries of the Universe", "Beyond the Horizon", "Echoes of the Past",
  "Wonders of the World", "Silent Moments", "Vivid Dreams", "Endless Possibilities"
];

const randomDescriptions = [
  "Captured in the perfect moment, a glimpse into serenity.",
  "Every frame tells a story waiting to be explored.",
  "An artistic perspective on the everyday world.",
  "A journey through the unknown, filled with adventure.",
  "The raw essence of emotion frozen in time.",
  "A scenic masterpiece of nature’s finest work.",
  "A thought-provoking piece capturing deep meaning.",
  "A breathtaking moment, preserved for eternity."
];

// Helper function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate random title and description
const generateRandomTitleAndDescription = () => ({
  title: `${getRandomElement(randomTitles)}`,
  description: `${getRandomElement(randomDescriptions)}`
});

// Function to generate text posts
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
      id: `img-${img.id}-${i}`,
      type: "image",
      ...generateRandomTitleAndDescription(),
      content: img.download_url,
    }));

    const videos = videoResponse.data.map((vid, i) => ({
      id: `video-${vid.id}-${i}`,
      type: "video",
      ...generateRandomTitleAndDescription(),
      content: vid.videoUrl,
    }));

    const texts = generateTextPosts(count, startIndex);

    const combined = [...images, ...videos, ...texts].sort(() => Math.random() - 0.5);

    return combined.slice(0, count);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
