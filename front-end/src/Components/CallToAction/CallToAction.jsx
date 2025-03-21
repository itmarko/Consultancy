import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion from Framer Motion

const callToActionData = {
    title: "What’s on your mind?",
    subtitle: "We appreciate your interest in MARKO.",
    btnText: "Talk To Experts",
};

const CalltoAction = () => {
    return (
        <div className="bg-gray-800 py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center content-wrapper theme-shape">
                    <div className="w-full text-center">
                        <div className="inner">
                            <div className="content">
                                {/* Title Animation */}
                                <motion.h2
                                    className="text-white text-3xl lg:text-4xl font-bold mb-4"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {callToActionData.title}
                                </motion.h2>

                                {/* Subtitle Animation */}
                                <motion.h6
                                    className="text-white text-xl mb-6"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {callToActionData.subtitle}
                                </motion.h6>

                                {/* Button Animation */}
                                <motion.div
                                    className="mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <Link
                                        to="/contact-us"
                                        className="inline-flex items-center bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
                                    >
                                        {callToActionData.btnText}
                                        <i className="ml-3"><FiArrowRight /></i>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalltoAction;
