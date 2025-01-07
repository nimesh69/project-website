import React from 'react';
import { ModelCard } from '../components/model/ModelCard';
import { Header } from '../components/Header/Header';
import resultImage from '../components/images/asian+ffhq+celebx_(256)/all256 (2).png';
import graphImage1 from '../components/images/asian+ffhq+celebx_(256)/output.png';
import graphImage2 from '../components/images/asian+ffhq+celebx_(256)/output2.png';
import graphImage3 from '../components/images/asian+ffhq+celebx_(256)/output3.png';
import graphImage4 from '../components/images/asian+ffhq+celebx_(256)/output4.png';

import resultImage1 from '../components/images/asian+ffhq+celebx_(512)/all (2).png';
import graphImage5 from '../components/images/asian+ffhq+celebx_(512)/output.png';
import graphImage6 from '../components/images/asian+ffhq+celebx_(512)/output2.png';
import graphImage7 from '../components/images/asian+ffhq+celebx_(512)/output4.png';
import graphImage8 from '../components/images/asian+ffhq+celebx_(512)/output5.png';

import resultImage2 from '../components/images/asian + celebx/ac (2).png';
import graphImage9 from '../components/images/asian + celebx/output.png';
import graphImage10 from '../components/images/asian + celebx/output4.png';
import graphImage11 from '../components/images/asian + celebx/output2.png';
import graphImage12 from '../components/images/asian + celebx/output3.png';

import resultImage3 from '../components/images/only asian/a (2).png';
import graphImage13 from '../components/images/only asian/output.png';
import graphImage14 from '../components/images/only asian/output2.png';
const models = [
    {
        name: "Dataset1(FFHQ+celeb A+Asian Faces)",
        description: "A large dataset of Images containing 70,000 HQ images from FFHQ , 30,000 HQ celebrity images and 10,000 HQ asian faces images.The resolution of all the images is kept at 256.",
        metrics: {
            psnr: "24.2897",
            Time_Taken: "6days 18hr28min22sec",
            Iteration: "1200000"
        },
        resultImage: resultImage,
        graphImages: [graphImage1, graphImage2, graphImage3, graphImage4],
    },
    {
        name: "Dataset2(FFHQ+celeb A+Asian Faces)",
        description: "A large dataset of Images containing 70,000 HQ images from FFHQ , 30,000 HQ celebrity images and 10,000 HQ asian faces images.The resolution of all the images is kept at 512.",
        metrics: {
            psnr: "23.7699",
            Time_Taken: "8days 12hr44min39sec",
            Iteration: "1000000"
        },
        resultImage: resultImage1,
        graphImages: [graphImage5, graphImage6, graphImage7, graphImage8],
    },
    {
        name: "Dataset3(Asian Faces+celebx)",
        description: "A large dataset of Images containing, 30,000 HQ celebrity images and 10,000 HQ asian faces images.The resolution of all the images is kept at 512.",
        metrics: {
            psnr: "21.5111",
            Time_Taken: "3days 11hr26min46sec",
            Iteration: "400000"
        },
        resultImage: resultImage2,
        graphImages: [graphImage9, graphImage10, graphImage11, graphImage12],
    },
    {
        name: "Dataset4(Asian Faces)",
        description: "A large dataset of Images containing 10,000 HQ asian faces images.The resolution of all the images is kept at 512.",
        metrics: {
            psnr: "20.5642",
            Time_Taken: "2days 7hr55min003sec",
            Iteration: "240000"
        },
        resultImage: resultImage3,
        graphImages: [graphImage13, graphImage14],
    },
    // Add more models here with similar structure
];

function OurWork() {
    return (
        <div className="min-h-screen bg-gray-50" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
            backgroundSize: '30px 30px',
            backgroundPosition: '-5px -5px',
        }}>
            {/* Header */}
            <Header />
            {/* Main Content */}
            <main>
                <div className="py-8">
                    {models.map((model, index) => (
                        <React.Fragment key={model.name}>
                            <ModelCard
                                {...model}
                                reverse={index % 2 === 1}
                            />
                            {index < models.length - 1 && (
                                <div className="max-w-7xl mx-auto px-4">
                                    <hr className="border-gray-200" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default OurWork;