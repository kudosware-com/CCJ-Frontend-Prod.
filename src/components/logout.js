import React, { useEffect } from 'react';
import axiosInstance from './MyAxios';
import { useHistory } from 'react-router-dom';

export default function Logout(props) {
	const history = useHistory();
	const {handleLoginFromApp} = props
	useEffect(() => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		handleLoginFromApp(false)
		axiosInstance.defaults.headers['Authorization'] = null;
		
		history.push('/login');
	});
	return <div>Logout</div>;
}