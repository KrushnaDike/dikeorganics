import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import Sidebar from "./Sidebar"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Dashboard = () => {
    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales",
                data: [12, 19, 3, 5, 2, 3],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Monthly Sales",
            },
        },
    }

    return (
        <div className="p-6 mt-20">
            <Sidebar />
            <h1 className="text-3xl  text-white font-semibold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Total Products</h2>
                    <p className="text-3xl font-bold text-amber-600">50</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                    <p className="text-3xl font-bold text-amber-600">1,234</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
                    <p className="text-3xl font-bold text-amber-600">$12,345</p>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <Line options={options} data={salesData} />
            </div>
        </div>
    )
}

export default Dashboard

