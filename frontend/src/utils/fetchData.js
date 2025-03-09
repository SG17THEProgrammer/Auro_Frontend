import axios from "axios";
<<<<<<< HEAD

const IMAGE_API = "https://picsum.photos/v2/list?page=1&limit=100";
const VIDEO_API = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";
=======
<<<<<<< HEAD

const IMAGE_API = "https://picsum.photos/v2/list?page=1&limit=100";
const VIDEO_API = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";
=======
const IMAGE_API = import.meta.env.VITE_IMAGE_API;
const VIDEO_API = import.meta.env.VITE_VIDEO_API


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


// const localImages = [
//  "../../public/images/img1",
//   "../../public/images/img2",
//   "../../public/images/img3",
// ];

// const localVideos = [
//   "../../public/videos/video1",
//   "../../public/videos/video2",
//   "../../public/videos/video3",
// ];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomTitleAndDescription = () => ({
  title: `${getRandomElement(randomTitles)} `  ,
  description: `${getRandomElement(randomDescriptions)}`
});

>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)

const generateTextPosts = (count, startIndex) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `text-${startIndex + i}`,
    type: "text",
<<<<<<< HEAD
    content: `This is a sample text post #${startIndex + i}`,
=======
<<<<<<< HEAD
    content: `This is a sample text post #${startIndex + i}`,
=======
    content: `This is a sample text post : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum porro accusamus a impedit iusto modi exercitationem! Eligendi pariatur vitae repellendus quae aperiam non omnis, alias, distinctio dolor numquam enim?`
    ,
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  }));
};

export const fetchData = async (startIndex, count) => {
  try {
    const [imageResponse, videoResponse] = await Promise.all([
      axios.get(IMAGE_API),
      axios.get(VIDEO_API),
    ]);

    const images = imageResponse.data.map((img, i) => ({
<<<<<<< HEAD
      id: `img-${img.id}`,
      type: "image",
=======
<<<<<<< HEAD
      id: `img-${img.id}`,
      type: "image",
=======
      id: `img-${img.id}-${i}`,
      type: "image",
      ...generateRandomTitleAndDescription(),
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
      content: img.download_url,
    }));

    const videos = videoResponse.data.map((vid, i) => ({
<<<<<<< HEAD
      id: `video-${vid.id}`,
      type: "video",
=======
<<<<<<< HEAD
      id: `video-${vid.id}`,
      type: "video",
=======
      id: `video-${vid.id}-${i}`,
      type: "video",
      ...generateRandomTitleAndDescription(),
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
      content: vid.videoUrl,
    }));

    const texts = generateTextPosts(count, startIndex);


    const combined = [...images, ...videos, ...texts].sort(() => Math.random() - 0.5);

    return combined.slice(0, count);
  } catch (error) {
    console.error("Error fetching data:", error);
<<<<<<< HEAD
  }
};
=======
<<<<<<< HEAD
  }
};
=======
    
    // return generateOfflineFeeds();
  }
};


// const generateOfflineFeeds = () => {
//   const posts = [];

//   for (let i = 0; i < 3; i++) {
//     posts.push({
//       id: `offline-video-${i}`,
//       type: "video",
//       ...generateRandomTitleAndDescription(),
//       content: localVideos[i]
//     });
//   }

//   for (let i = 0; i < 3; i++) {
//     posts.push({
//       id: `offline-image-${i}`,
//       type: "image",
//       ...generateRandomTitleAndDescription(),
//       content: localImages[i]
//     });
//   }

//   for (let i = 0; i < 4; i++) {
//     posts.push({
//       id: `offline-text-${i}`,
//       type: "text",
//       content: `This is a sample offline text post #${i + 1}.`
//     });
//   }

//   return posts.sort(() => Math.random() - 0.5);
// };
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
