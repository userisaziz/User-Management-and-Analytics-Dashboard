import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../router/pathname';
import { toast } from 'sonner';

//
// import { generateRefreshToken } from '../services';
// import { apiRetryLimit, retryStatusCode } from '../constant';
// import { DispatchErrorAction, isTokenExpired } from '../utils';

// let retryCount = 0;
// let refreshTokenApiCall = 0;

// const resetErrorAction = () => DispatchErrorAction(false, '', null, {});

export const axiosInstance = Axios.create({
	baseURL: process.env.baseURL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('auth-token');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		console.log('ddd: ', error?.response?.data);
		if (error.response.status === 401) {
			// window.location.href = pathname.LOGIN;
		}
		if (error.response.status == 404) {
			toast.error(error?.response?.data?.msg);
		}
		return Promise.reject(error);
	}
);
// axiosInstance.interceptors.response.use(
// 	(response) => {
// 		// Handle successful responses here
// 		refreshTokenApiCall = 0;
// 		resetErrorAction();
// 		return response;
// 	},

// 	async (error) => {
// 		if (error.response) {
// 			const { status, data } = error.response;

// 			console.log(data);
// 			console.log('retryCount ====>', retryCount);
// 			console.log(`API error - Status Code: ${status}`);

// 			// switch (true) {
// 			//     case !retryStatusCode.includes(error.status):
// 			//         if (status === 401 && !isTokenExpired()) {
// 			//             DispatchErrorAction(true, message, statusCode);
// 			//         }

// 			//         if (status === 401 && isTokenExpired()) {
// 			//             const originalRequest = error.config;
// 			//             originalRequest._retry = true;

// 			//             try {
// 			//                 const response = await generateRefreshToken();
// 			//                 const newAccessToken = response?.payload?.accessToken;

// 			//                 axiosInstance.defaults.headers.common[
// 			//                     'Authorization'
// 			//                 ] = `Bearer ${newAccessToken}`;

// 			//                 return axiosInstance(originalRequest);
// 			//             } catch (error) {
// 			//                 console.log(error);
// 			//             }
// 			//         }

// 			//         retryCount = 0;
// 			//         break;
// 			// }

// 			// case 1: status code without retry.
// 			if (!retryStatusCode.includes(status)) {
// 				retryCount = 0;
// 				const { message, statusCode, payload } = data;

// 				if (!isTokenExpired()) {
// 					DispatchErrorAction(true, message, statusCode, payload);
// 				}

// 				if (status === 401 && isTokenExpired() && refreshTokenApiCall === 0) {
// 					const originalRequest = error.config;
// 					originalRequest._retry = true;

// 					try {
// 						const response = await generateRefreshToken();
// 						const newAccessToken = response?.payload?.accessToken;
// 						refreshTokenApiCall = refreshTokenApiCall + 1;

// 						axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

// 						return axiosInstance(originalRequest);
// 					} catch (error) {
// 						console.log(error);
// 					}
// 				}
// 			}

// 			// case 2: status code with retry.
// 			if (retryCount >= apiRetryLimit && retryStatusCode.includes(status)) {
// 				const { message, statusCode } = data;
// 				DispatchErrorAction(true, message, statusCode);
// 				retryCount = 0;
// 			} else {
// 				retryCount = retryCount + 1;
// 			}

// 			return Promise.reject(error);
// 		} else if (error.request) {
// 			const message = 'Something went wrong!';
// 			DispatchErrorAction(true, message, 500);

// 			console.error('Network error axios', error.request);
// 		} else {
// 			const message = 'Request setup error';
// 			DispatchErrorAction(true, message, 500);
// 			console.error('Request setup error axios:', error.message);
// 		}

// 		return Promise.reject(error);
// 	}
// );
