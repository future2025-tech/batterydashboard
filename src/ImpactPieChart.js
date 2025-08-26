import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'CO2 Emissions', value: 73 },
  { name: 'Water Usage', value: 1000 },
  { name: 'Energy Consumption', value: 175 },
  { name: 'Waste Generated', value: 50 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ImpactPieChart() {
  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={110} // Reduced for better fit
            dataKey="value"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`} // Only % inside
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: '12px' }} /> {/* Smaller legend text */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ImpactPieChart;
