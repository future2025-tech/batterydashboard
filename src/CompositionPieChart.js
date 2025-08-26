import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const compositionData = [
  { name: 'Nickel (Ni)', value: 45 },
  { name: 'Manganese (Mn)', value: 10 },
  { name: 'Cobalt (Co)', value: 5 },
  { name: 'Aluminum (Al)', value: 1 },
  { name: 'Copper (Cu)', value: 12 },
  { name: 'Lithium (Li)', value: 7.5 },
  { name: 'Others (Graphite + Electrolyte)', value: 19.5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8A2BE2', '#FF1493', '#3C12B2'];

function CompositionPieChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={compositionData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
          >
            {compositionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CompositionPieChart;
