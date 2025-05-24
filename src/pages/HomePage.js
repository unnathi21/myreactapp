// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNotification } from '../contexts/NotificationContext'; // Import useNotification

// Specific background image for the Home Page
// This simulates an educational/skills background (e.g., code, data, learning)
const homePageBackgroundImage = "https://placehold.co/1920x1080/000000/00FF00/png?text=Vignan+Skills+Lab";

// Data for interactive educational/skill images
const educationalImages = [
    {
        id: 1,
        title: "Software Engineering",
        description: "Build the future with cutting-edge code.",
        imageUrl: "https://placehold.co/400x300/4CAF50/FFFFFF/png?text=Coding+Skills", // Green for growth/learning
        notification: "Exploring Software Engineering programs!"
    },
    {
        id: 2,
        title: "Data Science & AI",
        description: "Unlock insights from complex data.",
        imageUrl: "https://placehold.co/400x300/2196F3/FFFFFF/png?text=Data+Analytics", // Blue for tech/data
        notification: "Discovering Data Science & AI opportunities!"
    },
    {
        id: 3,
        title: "Mechanical Design",
        description: "Innovate and create physical systems.",
        imageUrl: "https://placehold.co/400x300/FF9800/000000/png?text=Engineering+Design", // Orange for innovation/creation
        notification: "Learning about Mechanical Design courses!"
    },
    {
        id: 4,
        title: "Biotechnology Research",
        description: "Advance scientific discovery.",
        imageUrl: "https://placehold.co/400x300/9C27B0/FFFFFF/png?text=Research+Lab", // Purple for science/research
        notification: "Investigating Biotechnology research areas!"
    },
];


// HomePage component receives theme and related dynamic classes as props
const HomePage = ({ textColor, subTextColor, sectionTitleColor, inputBgColor, inputBorderColor, inputTextColor, toggleContentBg, theme }) => {
    const { addNotification } = useNotification(); // Use notification context for toasts

    // --- Existing Welcome Message & Button State ---
    const [welcomeMessage, setWelcomeMessage] = useState("Explore interactive features and learn more!");

    // --- Feature 1: Counter State ---
    const [count, setCount] = useState(0);

    // --- Feature 2: Dynamic Text Input State ---
    const [inputText, setInputText] = useState("");

    // --- Feature 3: Toggle Visibility State ---
    const [isVisible, setIsVisible] = useState(true);

    // --- Handlers for existing features ---
    const handleWelcomeButtonClick = () => {
        setWelcomeMessage("You've explored the basic button!");
    };

    // --- Handlers for Counter ---
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // --- Handlers for Dynamic Text Input ---
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    // --- Handlers for Toggle Visibility ---
    const handleToggleVisibility = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    };

    // Handler for interactive image click
    const handleImageClick = (notificationMessage) => {
        addNotification(notificationMessage, 'info'); // Show an info toast
    };

    // Dynamic background color for sections with transparency
    // This allows the homePageBackgroundImage to show through
    const transparentSectionBg = theme === 'light' ? 'bg-gray-100/80' : 'bg-gray-800/80'; // 80% opacity

    return (
        // Container for HomePage content with its own background image
        <div
            className="relative w-full h-full p-4 sm:p-6 rounded-xl overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url(${homePageBackgroundImage})` }}
        >
            {/* Internal overlay for readability over the home page background */}
            <div className={`absolute inset-0 z-0 transition-colors duration-500 ${theme === 'light' ? 'bg-black opacity-30' : 'bg-black opacity-50'}`}></div>

            {/* Content wrapper to ensure text is above the internal overlay */}
            <div className="relative z-10 text-center">
                {/* Main heading for HomePage with Bebas Neue font */}
                <h2 className={`text-4xl sm:text-5xl font-extrabold font-bebas-neue ${textColor} mb-6 transition-colors duration-500 uppercase tracking-wide`}>
                    Innovate. Learn. Grow.
                </h2>

                {/* Existing Welcome Message */}
                <p className={`text-lg sm:text-xl ${subTextColor} mb-8 transition-colors duration-500`}>
                    {welcomeMessage}
                </p>

                {/* Existing Interactive button */}
                <button
                    onClick={handleWelcomeButtonClick}
                    className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 mb-10 w-full sm:w-auto"
                    aria-label="Explore more features"
                >
                    Explore More!
                </button>

                {/* --- New Feature: Interactive Educational Images --- */}
                <div className={`${transparentSectionBg} p-6 rounded-lg shadow-inner mb-8 transition-colors duration-500`}>
                    <h3 className={`text-2xl font-bold font-bebas-neue ${sectionTitleColor} mb-6 transition-colors duration-500 uppercase`}>Explore Our Programs</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {educationalImages.map(item => (
                            <div
                                key={item.id}
                                onClick={() => handleImageClick(item.notification)}
                                className="cursor-pointer group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                aria-label={`Explore ${item.title}`}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/cccccc/000000?text=Image+Error"; }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 flex flex-col items-center justify-center p-4 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <h4 className="text-xl font-bold font-bebas-neue uppercase mb-2">{item.title}</h4>
                                    <p className="text-sm text-center">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Existing Feature Sections (Counter, Text Input, Toggle) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Feature 1: Counter Section */}
                    <div className={`${transparentSectionBg} p-6 rounded-lg shadow-inner transition-colors duration-500`}>
                        <h3 className={`text-2xl font-bold font-bebas-neue ${sectionTitleColor} mb-4 transition-colors duration-500 uppercase`}>Interactive Counter</h3>
                        <p className={`text-5xl font-extrabold text-purple-700 mb-6 transition-colors duration-500`}>{count}</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleDecrement}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
                                aria-label="Decrement counter"
                            >
                                Decrement
                            </button>
                            <button
                                onClick={handleIncrement}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
                                aria-label="Increment counter"
                            >
                                Increment
                            </button>
                        </div>
                    </div>

                    {/* Feature 2: Dynamic Text Input Section */}
                    <div className={`${transparentSectionBg} p-6 rounded-lg shadow-inner transition-colors duration-500`}>
                        <h3 className={`text-2xl font-bold font-bebas-neue ${sectionTitleColor} mb-4 transition-colors duration-500 uppercase`}>Live Text Input</h3>
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type something here..."
                            className={`w-full p-3 border ${inputBorderColor} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg ${inputTextColor} ${inputBgColor} mb-4 transition-colors duration-500`}
                            aria-label="Live text input field"
                        />
                        <p className={`text-xl ${textColor} transition-colors duration-500`}>
                            You typed: <span className="font-semibold text-blue-600">{inputText || "Nothing yet!"}</span>
                        </p>
                    </div>

                    {/* Feature 3: Toggle Visibility Section */}
                    <div className={`${transparentSectionBg} p-6 rounded-lg shadow-inner md:col-span-2 transition-colors duration-500`}>
                        <h3 className={`text-2xl font-bold font-bebas-neue ${sectionTitleColor} mb-4 transition-colors duration-500 uppercase`}>Toggle Content Visibility</h3>
                        <button
                            onClick={handleToggleVisibility}
                            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-200 mb-4 w-full sm:w-auto"
                            aria-label={isVisible ? "Hide content" : "Show content"}
                        >
                            {isVisible ? "Hide Content" : "Show Content"}
                        </button>
                        {isVisible && (
                            <div className={`${toggleContentBg} p-4 rounded-lg border text-lg transition-colors duration-500`}>
                                <p>This content is now visible! You can toggle it on and off.</p>
                                <p className="text-sm mt-2">This demonstrates conditional rendering in React and adapts to the theme.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
