import { useEffect, useState } from 'react';

const useCountdown = (targetDate, inUsage) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        if (inUsage) {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }
    }, [countDownDate, inUsage]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    // calculate time left

    const minutes = Math.floor((countDown % (1000 * 60 * 80)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [minutes, seconds];
};

export { useCountdown };
