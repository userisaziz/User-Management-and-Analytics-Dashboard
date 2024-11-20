import React, { useEffect } from 'react';
import FunnelGraph from 'funnel-graph-js';
import './Funnel.scss';
function Funnel({ data }) {
	useEffect(() => {
		const graph = new FunnelGraph({
			container: '.ReusableFunnelGraph',
			gradientDirection: 'horizontal',
			data: data,
			displayPercent: true,
			direction: 'Horizontal',
			width: 1000,
			height: 350,
			subLabelValue: 'values',
		});

		graph.draw();
	}, [data]);

	return <div className="ReusableFunnelGraph" />;
}

export default Funnel;
