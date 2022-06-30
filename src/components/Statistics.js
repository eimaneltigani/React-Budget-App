import React from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto"
import { ArcElement } from 'chart.js';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../Redux/store/statisticsSlice";
Chart.register(ArcElement);



const Statistics = () => {

    const categories = useSelector(selectCategories);

    const [doughnut, setDoughnet] = useState({
        labels: [],
        data: []
    });

    useEffect(() => {
        setDoughnet({
            labels: categories.map(x => x.category),
            data: categories.map(x => x.totalCost)
        });
    }, [categories])

    const data = {
        labels: doughnut.labels,
        datasets: [{
            data: doughnut.data,
            backgroundColor: [
                '#106069', 
                '#a1c8b4', 
                '#2c332', 
            ]
        }],
    };

    const option = {
        responsive: true,
        maitainAspectRatio: true
    }

    return (
        <div>
            <h4>Here's a breakdown of your expenses:</h4>
            <Doughnut 
                data={data} 
                options={option}
            />
        </div>
    )

}

const mapStateToProps = ({ income, expenses }) => ({
    income,
    expenses
})

export default connect(mapStateToProps)(Statistics);
