import React, { useEffect, useState } from 'react'
import Heading from './Heading'

function Stats({ stats }) {
   
    /*
        /////////////////////// Structure example for data to be passed through props \\\\\\\\\\\\\\\\\\\\\\\\
     const statsData = [
        { stat: '100', text: 'Users' },
        { stat: '200', text: 'Downloads' },
        { stat: '300', text: 'Likes' },
        { stat: '400', text: 'Followers'}
      ];
       
    */
    const [counters, setCounters] = useState(stats.map(() => 0));
    useEffect(() => {
        function startCountersWhenInView(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stats.forEach((item, index) => {
                        let endValue = item.stat;
                        let duration = 1500; 
                        let incrementInterval = Math.floor(duration / endValue);
                        let counter = setInterval(() => {
                            setCounters(prevCounters => {
                                let updatedCounters = [...prevCounters];
                                updatedCounters[index] = updatedCounters[index] + 1;
                                if (updatedCounters[index] >= endValue) {
                                    clearInterval(counter);
                                    updatedCounters[index] = endValue;
                                }
                                return updatedCounters;
                            });
                        }, incrementInterval);
                        observer.unobserve(entry.target);
                    });
                }
            });
        }

        const observer = new IntersectionObserver(startCountersWhenInView, {
            threshold: 0.8    
        });                        

        const targetElement = document.querySelector('.stat-section');

        if (targetElement) {
            observer.observe(targetElement);
        }
        return () => observer.disconnect();

    }, [stats]);

    return (
        <div className="max-md:h-screen w-screen bg-gradient-3 flex max-md:flex-col max-md:space-y-20 py-12 justify-evenly text-center stat-section">
            {stats.map((item, index) => (
                <div key={index}>
                    <Heading size="h1" color="white" weight="bold" dataval={item.stat}>
                        {counters[index]}
                    </Heading>
                    <Heading size="h6" weight="bold" customClasses="text-[#E4FFDB] uppercase m-0">
                        {item.text}
                    </Heading>
                </div>
            ))}
        </div>
    )
}

export default Stats