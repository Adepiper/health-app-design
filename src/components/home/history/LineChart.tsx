import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
	{
		uv: 'tu',
		amt: 12,
	},
	{
		uv: 'we',
		amt: 18,
	},
	{
		uv: 'th',
		amt: 9,
	},
	{
		uv: 'fr',
		amt: 2,
	},
	{
		uv: 'sa',
		amt: 16,
	},
	{
		uv: 'su',

		amt: 20,
	},
	{
		uv: 'mo',
		amt: 10,
	},
];

const LineChartGraph = () => {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<LineChart
				layout='vertical'
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<XAxis
					type='category'
					tickLine={false}
					axisLine={false}
					height={20}
				/>
				<YAxis hide type='number' dataKey={'amt'} />
				<Line
					dataKey='uv'
					stroke='#c2ff4d'
					dot={{ stroke: '#7b66ff', strokeWidth: 1, fill: '#7b66ff' }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineChartGraph;
