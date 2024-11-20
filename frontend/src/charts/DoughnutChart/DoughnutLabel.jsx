import React from 'react';
import { ChartLabel } from '../../assets/icon';

const DoughnutLabel = (props) => {
	const { data } = props;
	const labels = data?.labels?.map((label, index) => ({
		label: label,
		// backgroundColor: data?.datasets[0]?.backgroundColor[index],
	}));

	return (
		<div className="LabelContainer">
			{labels?.map((e) => {
				return (
					<div className="Labels" key={e.label.key}>
						<ChartLabel background={e.backgroundColor} />
						<div>
							<p className="LabelKey">{e.label.key}</p>
							<p className="LabelValue">{e.label.value}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DoughnutLabel;
