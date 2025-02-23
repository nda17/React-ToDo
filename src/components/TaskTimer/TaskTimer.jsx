import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './TaskTimer.module.css';

export const TaskTimer = props => {
	const { min, sec, status, statusTask } = props;

	const [minutes, setMinutes] = useState(min);
	const [seconds, setSeconds] = useState(sec);
	const [isRunning, setIsRunning] = useState(false);
	const [timer, setTimer] = useState(null);

	const formatTime = time => (time < 10 ? `0${time}` : time);

	const startTimer = () => {
		setIsRunning(true);
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(prevSeconds => prevSeconds - 1);
			} else if (minutes > 0) {
				setMinutes(prevMinutes => prevMinutes - 1);
				setSeconds(59);
			} else {
				clearInterval(interval);
				setIsRunning(false);
			}
		}, 1000);
		setTimer(interval);
	};

	const pauseTimer = () => {
		clearInterval(timer);
		setIsRunning(false);
	};

	useEffect(() => {
		return () => clearInterval(timer);
	}, [timer]);

	const resetTimer = () => {
		setMinutes(0);
		setSeconds(0);
	};

	useEffect(() => {
		if (minutes === 0 && seconds < 0) {
			pauseTimer();
			resetTimer();
		} else if (seconds < 0) {
			const min = minutes > 1 ? minutes - 1 : 0;
			setMinutes(min);
			setSeconds(59);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [minutes, seconds]);

	useEffect(() => {
		if (status === statusTask.completed) {
			pauseTimer();
		} else if (status === statusTask.notCompleted) {
			startTimer();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	useEffect(() => {
		return () => {
			pauseTimer();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<span className={styles.wrapper}>
			<button
				className={clsx(styles['icon-play'])}
				disabled={isRunning}
				onClick={startTimer}
			></button>
			<button
				className={clsx(styles['icon-pause'])}
				disabled={!isRunning}
				onClick={pauseTimer}
			></button>
			<span
				className={styles.values}
			>{`${formatTime(minutes)}:${formatTime(seconds)}`}</span>
		</span>
	);
};
