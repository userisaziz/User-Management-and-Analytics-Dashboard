import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { Store } from './redux/store';
import { Provider } from 'react-redux';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const container = document.getElementById('root');
const root = createRoot(container);

Chart.register(ChartDataLabels, LinearScale, CategoryScale, BarElement); // Register LinearScale

root.render(
	// <React.StrictMode>
	<Provider store={Store}>
		<App />
	</Provider>
	// </React.StrictMode>
);
