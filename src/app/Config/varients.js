export const fadeIn = (direction, delay, duration) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? "20%" : direction === 'down' ? "-20%" : 0,
            x: direction === 'left' ? "20%" : direction === 'right' ? "-20%" : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition:{
                type: 'tween',
                duration: duration,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        },
    }
}

export const fadeInParent = (direction, delay, duration) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? "20%" : direction === 'down' ? "-20%" : 0,
            x: direction === 'left' ? "20%" : direction === 'right' ? "-20%" : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition:{
                type: 'tween',
                duration: duration,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
                when: "beforeChildren",
                staggerChildren: 0.4
            }
        },
    }
}