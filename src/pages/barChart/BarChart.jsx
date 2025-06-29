import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import parseData from '../../helpers/parseBarChartData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Candidate Test Chart',
        },
    },
};

function BarChart() {
    const [apiData, setApiData] = useState([]);
    const API_URL = `https://django-dev.aakscience.com/candidate_test/fronted`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL);
                setApiData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const { labels, values, error } = parseData(apiData);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: values,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return (
        <>
            <Bar options={options} data={data} />
        </>
    )
}

export default BarChart