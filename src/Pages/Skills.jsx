import React, { useEffect, useRef, useState } from "react";
import {
    Code2,
    Atom,
    Database,
    Server,
    Github,
    Paintbrush,
} from "lucide-react";

const skills = [
    { name: "JavaScript", level: 68, icon: Code2 },
    { name: "React.js", level: 60, icon: Atom },
    { name: "Tailwind CSS", level: 66, icon: Paintbrush },
    { name: "Node.js", level: 60, icon: Server },
    { name: "Express.js", level: 58, icon: Server },
    { name: "MongoDB", level: 55, icon: Database },
    { name: "Git & GitHub", level: 62, icon: Github },
];

const Skills = () => {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(skills.map(() => 0));

    useEffect(() => {
        let intervals = [];

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start animation
                    skills.forEach((skill, index) => {
                        let current = 0;
                        intervals[index] = setInterval(() => {
                            current += 1;
                            setProgress((prev) => {
                                const updated = [...prev];
                                updated[index] = current;
                                return updated;
                            });

                            if (current >= skill.level) {
                                clearInterval(intervals[index]);
                            }
                        }, 20);
                    });
                } else {
                    // Reset when leaving viewport
                    intervals.forEach(clearInterval);
                    setProgress(skills.map(() => 0));
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="min-h-screen px-4 py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        MERN Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-center">
                        These skills represent my hands-on experience with the MERN stack.
                        I continuously improve them by building real-world projects, focusing on
                        clean architecture, performance, and user experience.
                    </p>

                </div>

                {/* Skills */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl space-y-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <div key={index}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <Icon className="w-5 h-5 text-blue-600" />
                                        <span className="font-medium">{skill.name}</span>
                                    </div>

                                    <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                                        {progress[index]}%
                                    </span>
                                </div>

                                {/* Thicker Progress Bar */}
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    transition-all duration-200"
                                        style={{
                                            width: `${progress[index]}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
};

export default Skills;
