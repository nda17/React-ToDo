import { useEffect, useState } from 'react';
import './TaskTimer.css';

export const TaskTimer = props => {
	const { min, sec, status, statusTask } = props;

	const [minutes, setMinutes] = useState(min);
	const [seconds, setSeconds] = useState(sec);
	const [isRunning, setIsRunning] = useState(false);
	const [timer, setTimer] = useState(null);

	const formatTime = time => (time < 10 ? `0${time}` : time);

	const startTimer = () => {
		if (isRunning) {
			return;
		}

		setIsRunning(true);

		const interval = setInterval(() => {
			setSeconds(prevSeconds => {
				if (prevSeconds > 0) return prevSeconds - 1;
				setMinutes(prevMinutes => {
					if (prevMinutes > 0) {
						setSeconds(59);
						return prevMinutes - 1;
					}

					clearInterval(interval);
					setIsRunning(false);

					return 0;
				});
				return 0;
			});
		}, 1000);

		setTimer(interval);
	};

	const pauseTimer = () => {
		clearInterval(timer);
		setIsRunning(false);
	};

	useEffect(() => {
		// console.log('componentDidMount');
		return () => {
			// console.log('componentWillUnmount');
			clearInterval(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// console.log('DidUpdate');
		if (status === statusTask.completed) {
			pauseTimer();
		} else if (status === statusTask.notCompleted && !isRunning) {
			startTimer();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	return (
		<span className="task-timer">
			<button
				className="timer-icon-play"
				disabled={isRunning || status === statusTask.completed}
				onClick={startTimer}
			></button>
			<button
				className="timer-icon-pause"
				disabled={!isRunning || status === statusTask.completed}
				onClick={pauseTimer}
			></button>
			<span className="timer-values">{`${formatTime(minutes)}:${formatTime(seconds)}`}</span>
		</span>
	);
};
