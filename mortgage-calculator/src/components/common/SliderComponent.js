import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({
	min,
	max,
	defaultValue,
	step,
	onChange,
	value,
	label,
	amount,
	unit,
}) => {
	return (
		<Stack my={2}>
			<Stack
				gap={1}
				direction="column">
				<Typography variant="subtitle2">{label}</Typography>
				<Typography variant="h5">
					{unit} {amount}
				</Typography>
			</Stack>
			<Slider
				min={min}
				max={max}
				defaultValue={defaultValue}
				aria-label="Default"
				valueLabelDisplay="auto"
				marks
				step={step}
				onChange={onChange}
				value={value}
			/>
			<Stack
				justifyContent="space-between"
				direction="row">
				<Typography
					variant="caption"
					color="text.secondary">
					{unit} {min}
				</Typography>
				<Typography
					variant="caption"
					color="text.secondary">
					{unit} {max}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default SliderComponent;
