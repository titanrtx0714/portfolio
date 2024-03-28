import Face from "../assets/portfolio/work-1.jpg"
import Deblurring from "../assets/portfolio/work-2.gif"
import Gorillaze from "../assets/portfolio/work-3.webp"
import Arbitrage_Bot from "../assets/portfolio/work-4.webp"
import Aggregator_AI from "../assets/portfolio/work-5.png"
import HDPrediction from "../assets/portfolio/work-6.png"

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    img: Face,
    title: "Face Recognition",
    desc: "Use CASIA-WebFace and VGGFace2 for Database and Inception-ResNet-v1 and MTCNN pretrained model for this project. ",
    demo: "https://github.com/titanrtx0714/FaceRecognition/blob/dependabot/pip/tensorflow-2.11.1/README.md",
    source: "https://github.com/titanrtx0714/FaceRecognition",
  },
  {
    img: Deblurring,
    title: "Image Restoration",
    desc: "Image denoising, deblurring and super-resolution method using NAFNet. PSNR on GoPro is 33.7dB",
    demo: "https://github.com/titanrtx0714/Image_Deblurring_with_pytorch/blob/main/figures/PSNR_vs_MACs.jpg",
    source: "https://github.com/titanrtx0714/Image_Deblurring_with_pytorch",
  },
  {
    img: Gorillaze,
    title: "Gorillaze Metaverse Game",
    desc: "Take part in developing this game-Develop smart contract of NFT token(VMGC token) for this game.",
    demo: "https://www.vendingmachinesnft.io/nft",
    source: "https://github.com/titanrtx0714/gorillaz_smartcontract",
  },
  {
    img: Arbitrage_Bot,
    title: "Arbitrage Bot",
    desc: "Develop Smart Contract of arbitrage bot between sushiswap and uniswap for the selected token using Ether.",
    demo: "https://github.com/titanrtx0714/Arbitrage_bot_between_sushiswap_and_uniswap",
    source: "https://github.com/titanrtx0714/Arbitrage_bot_between_sushiswap_and_uniswap",
  },
  {
    img: Aggregator_AI,
    title: "Aggregator AI",
    desc: "Text, Image, Video and 3D Model generator using OpenAI, Midjourney and Stable Diffusion API.",
    demo: "https://aggregator-ai.vercel.app/",
    source: "https://github.com/titanrtx0714/aggre_ai",
  },
  {
    img: HDPrediction,
    title: "Running Kiddos",
    desc: "Admin Project of Children's Course for their physical fitness, health and education.",
    demo: "https://app.runningkiddos.com/",
    source: "https://github.com/titanrtx0714/RunningKiddos",
  },
]
