import React, { useState } from 'react';
// Components
import {
	Box,
	Button,
	Input,
	Modal,
	Table,
	Toggle,
	OTPInput,
	Typography,
	ValueField,
	ViewDetailsCard,
	ProgressBar,
	Breadcrumb,
	Chip,
	SearchBar,
	Download,
	UploadImage,
	Dropdown,
	TextArea,
	StatusIndicator,
	Tab,
	Divider,
	RadioGroup,
	MobTable,
	TitleCard,
} from '../../../components';
import './Components.scss';
import { ArrowRight, PreLoader, Success } from '../../../assets/icon';
import DashboardCard from '../../../components/Common/DashboardCard/DashboardCard';
import UserIcon from '../../../assets/icon/UserIcon/UserIcon';
import { rowData } from './dummyData';
import Checkbox from '../../../components/Common/Checkbox/Checkbox';
import { DoughnutChart, LineChart } from '../../../charts';
import './Components.scss';
import { useAddPost, useDeletePost, useGetTodoList, useModifyPost, useUpdatePost } from './API/API';

export const Components = () => {
	const [isOn, setIsOn] = useState(true);
	const [input, setInput] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState([]);
	const [error, setError] = useState({ isError: false, errorMessage: '' });
	const [checked, setChecked] = useState(false);
	const [enteredOTP, setEnteredOTP] = useState('');
	const [otpError, setOtpError] = useState(false);
	const [selectValue, setSelectValue] = useState('');
	const [selectedItem, setSelectedItem] = useState({ value: '', id: null });
	const [textValue, setTextValue] = useState('sassasasa');

	const { isLoading, data: fetchedToDoList } = useGetTodoList();

	/*-- POST API CALL --*/
	const { mutate: onAdd, data: addedData } = useAddPost();

	/*-- PUT API CALL --*/
	const { mutate: onUpdate, data: updatedData } = useUpdatePost();

	/*-- PATCH API CALL --*/
	const { mutate: onModifyPost, data: modifiedData } = useModifyPost();

	/*-- DELETE API CALL --*/
	const { mutate: onDeletePost } = useDeletePost();

	console.log('data', fetchedToDoList);

	const [selectedRadio, setSelectedRadio] = useState();

	const handleToggle = () => {
		setIsOn(!isOn);
	};

	const handleButtonClick = () => {
		alert('button clicked');
	};

	const handleOnBlur = () => {
		console.log('check validation');
		// if (input.length < 5) {
		// 	console.log('ree', input);
		// 	setError({ isError: true, errorMessage: 'string length is less than 5' });
		// } else {
		// 	setError({ isError: false, errorMessage: '' });
		// }
	};

	const menu = [
		{ id: 1, value: 'red' },
		{ id: 2, value: 'lime' },
		{ id: 3, value: 'blue' },
		{ id: 4, value: 'green' },
		{ id: 5, value: 'black' },
		{ id: 6, value: 'pink' },
		{ id: 7, value: 'orange' },
	];

	const handleChange = (e) => {
		if (input === '') setError({ isError: false, errorMessage: '' });
		setInput(e.target.value);
	};
	const handleVerifyOTP = () => {
		if (enteredOTP.length === 6) {
			const dummyOTP = '123456';

			if (enteredOTP === dummyOTP) {
				alert('Correct OTP entered. Proceed with verification.');
				setOtpError(false);
			} else {
				alert('Incorrect OTP entered');
				setOtpError(true);
				setEnteredOTP('');
			}
		} else {
			console.log('Please enter a valid OTP.');
		}
	};

	const handleOTPInput = (index, value) => {
		setEnteredOTP((prevOTP) => {
			const updatedOTP = [...prevOTP];
			updatedOTP[index] = value;
			return updatedOTP.join('');
		});
	};

	const tableHeader = [
		{ headerName: 'SL No.', field: 'sl_no' },
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'Country', field: 'country' },
		{ headerName: 'Contact', field: 'contact' },
		{ headerName: 'Continent', field: 'continent' },
		{ headerName: 'Date of joining', field: 'date_of_joining' },
		{ headerName: 'Gender', field: 'gender' },
		{ headerName: 'Status', field: 'status' },
	];

	const handleCheckbox = (e) => {
		setChecked(e.target.checked);
		alert(checked);
	};

	const handleImageUpload = (files) => {
		setSelectedImage(files);
	};

	const types = ['First', 'Second', 'Third'];

	const [active, setActive] = useState(types[0]);

	const handleSelect = (val, index) => {
		setSelectedItem({ value: val, id: index });
	};

	const doughnutData = {
		labels: [
			{ key: 'Asia', value: '10 lacs' },
			{ key: 'South America', value: '10 lacs' },
			{ key: 'North America', value: '10 lacs' },
			{ key: 'Australia', value: '10 lacs' },
			{ key: 'Antarctica', value: '10 lcas' },
			{ key: 'Europe', value: '10 lacs' },
			{ key: 'Africa', value: '10 lacs' },
		],
		datasets: [
			{
				data: [9, 17, 3, 5, 10, 11, 56],
				fill: true,
				backgroundColor: ['#FF6B6B', '#DD7BFF', '#FFC9CF', '#6F6F6F', '#FF946E', '#FBD051', '#89C5F5'],
			},
		],
	};

	const data = {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: 'Total users',
				data: [9, 17, 3, 5, 10, 11, 56],
				borderColor: '#FBC42E',
				fill: true,
				backgroundColor: 'rgba(251, 196, 46, 0.10)',
			},
			{
				label: 'Active users',
				data: [15, 25, 40, 5, 22, 8, 70],
				borderColor: '#f17a72',
				fill: true,
				backgroundColor: 'rgba(255, 107, 107, 0.10)',
			},
			{
				label: 'Inactive users',
				data: [26, 45, 18, 9, 33, 12, 98],
				borderColor: '#76b7e8',
				fill: true,
				backgroundColor: 'rgba(103, 181, 253, 0.10)',
			},
		],
	};

	const breadCrumbData = [
		{ text: 'Home', url: '/' },
		{ text: 'Users', url: '/users' },
		{ text: 'Rakesh', url: '/users/rakesh' },
	];

	const handleChipHandler = () => {
		alert('chip clicked');
	};

	const onChange = (e) => {
		if (typeof e === 'string') {
			setSelectValue(e);
			return;
		}
		setTextValue(e.target.value);
	};

	const options = ['Option 1', 'Option 2', 'Option 3'];

	const handleRadioChange = (value) => {
		console.log(value, 'valuevalue');
		setSelectedRadio(value);
	};

	return (
		<React.Fragment>
			<Typography className="Title" variant="h1" size="3rem" align="center" m="1.5rem" color="#000">
				UI Components Page
			</Typography>
			<Typography type="Link">UI Components Page</Typography>
			<br />
			<Box>
				<UploadImage
					onSelect={(files) => handleImageUpload(files)}
					acceptedFormate={['.png', '.jpg', '.jpeg']}
				/>
			</Box>
			<br />
			<Box className="Components--Box">
				Inside a box
				<br />
				<br />
				<br />
				<Toggle
					value={isOn}
					defaultToggleState={isOn}
					onToggle={() => setIsOn(!isOn)}
					handleToggle={handleToggle}
				/>
				<br />
				<Button variant="primary" isDisabled={true} onClick={handleButtonClick}>
					primary
				</Button>
				<br />
				<Button variant="primary" isLoading={true} onClick={handleButtonClick}>
					primary
				</Button>
				<br />
				<Button variant="primary" onClick={handleButtonClick}>
					primary
				</Button>
				<br />
				<br />
				<Button variant="secondary" icon={<PreLoader />} onClick={() => setIsModalOpen(true)}>
					secondary
				</Button>
				<br />
				<Button variant="secondary" isLoading={true}>
					secondary
				</Button>
				<br />
				<Button variant="secondary" isDisabled={true}>
					secondary
				</Button>
			</Box>

			<br />
			<br />
			<div style={{ backgroundColor: 'grey', padding: '10px' }}>
				<DashboardCard icon={<UserIcon />} heading={'2.65 Lacs'} subheading={'Total users'} />
			</div>

			<Modal onClose={setIsModalOpen} isOpen={isModalOpen} title="Do you want to sign out ?">
				In a modal
			</Modal>
			<br />
			<br />
			<Table className="GenericTable" header={tableHeader} row={rowData} />
			<br />
			<br />
			<Box>
				<Checkbox label={'Remember me'} onChange={handleCheckbox} isChecked={checked} id="generic-checkbox" />
			</Box>

			<Box>
				<Input
					placeholder="Enter email"
					type="email"
					isRequired={true}
					onChange={handleChange}
					onBlur={handleOnBlur}
					value={input}
					icon={<PreLoader />}
					// isDisabled={true}
				/>
				<Input placeholder="Enter email" type="text" isError={true} errorMessage={'error occurred'} />

				<Input placeholder="Enter email" type="text" isDisabled={true} value="xyz@email.com" />

				{/* <Dropdown
					placeholder="Select color"
					options={menu}
					value={selectedItem?.value}
					onSelect={(value) => handleSelect(value)}
				/> */}
			</Box>
			<Box className="Components--OTP-Box">
				<Typography className="Title" variant="h1" size="3rem" align="center" m="1.5rem" color="#000">
					Validate OTP
				</Typography>
				<Typography className="Title" variant="p" size="1rem" align="center" m="1rem" color="#000">
					Enter otp which is sent to your email id
				</Typography>
				<Box>
					<OTPInput
						length={6}
						onInput={handleOTPInput}
						isError={otpError}
						errorMessage="Incorrect OTP. Please try again."
					/>
				</Box>

				<Button variant="primary" onClick={handleVerifyOTP}>
					Verify
				</Button>
			</Box>

			<ViewDetailsCard isGridLayout={true} title="General Info">
				<Button variant="secondary" isDisabled={true}>
					secondary
				</Button>
				<Button variant="secondary" isDisabled={true}>
					secondary
				</Button>

				<ValueField label="transaction id">3322233323</ValueField>
			</ViewDetailsCard>
			<br />
			<br />
			<Box>
				<LineChart data={data} className="Line" verticalgrid={false} dashedBorder={true} />
				<LineChart data={{ ...data, datasets: [data.datasets[2]] }} className="Line" dashedBorder={false} />
			</Box>
			<Box>
				<DoughnutChart
					data={doughnutData}
					className="Doughnut"
					title="Revenue distributed by continent"
					text="₹37.5 Cr"
				/>
			</Box>
			<Box>
				<ProgressBar progress={30} data={{ key: 'Asia', value: '35 lacs' }} />
			</Box>
			<Box>
				<Breadcrumb items={breadCrumbData} />
			</Box>
			<Box>
				<Chip label="Weekly" isActive={true} onClick={handleChipHandler} />
				<br />
				<br />
				<Chip label="Resolved" isActive={true} className="TestChip" icon={<Success />} />

				<br />
				<br />
				<br />

				<SearchBar />
			</Box>

			<Box>
				<Dropdown
					placeholder="Select color"
					options={menu}
					keyToRead="value"
					isRequired={true}
					value=""
					onSelect={(value) => handleSelect(value)}
				/>
				<Dropdown
					placeholder="Select color"
					options={menu}
					keyToRead="value"
					isRequired={true}
					onSelect={(value) => handleSelect(value)}
					isDisabled={true}
				/>

				<Button
					variant="Link"
					onClick={handleButtonClick}
					// suffix={<ArrowRight color="#FF6B6B" />}
					isDisabled={true}
				>
					View More
				</Button>
				<Button variant="link" onClick={handleButtonClick}>
					View More
				</Button>
			</Box>

			<Box>
				<Tab types={types} active={active} changeActive={setActive} />
				{active === types[0] && <p>First Tab</p>}
				{active === types[1] && <p>Second Tab</p>}
				{active === types[2] && <p>Third Tab</p>}
			</Box>

			<Box>
				<TextArea
					row={10}
					col={8}
					value={textValue}
					isRequired={true}
					placeholder="Campaign name"
					onchange={onChange}
				/>
			</Box>

			<Box>
				<Divider />
				<br />
				<br />
				<br />
				<Divider width="50%" color="#3498db" />
			</Box>

			<Box>
				<Download value={selectValue} onchange={onChange} className="DownloadSelect" />
				<br />
				<br />
				<br />
				<StatusIndicator variant="success" text="Success" />
				<br />
				<br />
				<StatusIndicator variant="pending" text="Pending" />
				<br />
				<br />
				<StatusIndicator variant="rejected" text="Rejected" />
			</Box>

			<Box>
				<RadioGroup options={options} onchange={handleRadioChange} selectedvalue={selectedRadio} />
			</Box>

			<TitleCard title={'SalesPerson'}>
				<MobTable />
				<MobTable />
				<MobTable />
			</TitleCard>
		</React.Fragment>
	);
};

export default Components;
