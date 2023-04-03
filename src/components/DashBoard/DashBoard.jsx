import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashBoard = () => {
    const studentMarks = [
        { id: 1, name: "John", math: 85, science: 75, english: 90 },
        { id: 2, name: "Alice", math: 90, science: 80, english: 75 },
        { id: 3, name: "Bob", math: 75, science: 70, english: 80 },
        { id: 4, name: "Mary", math: 80, science: 90, english: 85 },
        { id: 5, name: "David", math: 65, science: 75, english: 70 },
        { id: 6, name: "Sarah", math: 75, science: 80, english: 80 },
        { id: 7, name: "Mike", math: 50, science: 58, english: 90 },
        { id: 8, name: "Lisa", math: 85, science: 40, english: 75 },
        { id: 9, name: "Tom", math: 70, science: 80, english: 80 },
        { id: 10, name: "Kate", math: 80, science: 75, english: 85 }
    ];

    return (
        <div>
            <LineChart
                width={1000}
                height={500}
                data={studentMarks}

            >
                <Line dataKey="math" stroke="#8884d8"></Line>
                <Line dataKey="science"></Line>
                <Line dataKey="english"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default DashBoard;