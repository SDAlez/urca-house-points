import Chart from "react-apexcharts";

const BarChart = () => {

    return(
        <Chart
            options={{
                colors:["#55a1d3", "#eeb60b", "#d2232a", "#3dad47"],
                xaxis: {
                    categories: [""],
                    labels: {
                        style: {
                            fontSize: "1px"
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        fontFamily: "Montserrat",
                        fontWeight: "bold"
                    }
                },
                legend: {
                    fontFamily: "Montserrat",
                    fontSize: "14pt"
                }
            }}
            series={[
                {
                    name: "Pankhurst",
                    data: [10], 
                },
                {
                    name: "Mee",
                    data: [20], 
                },
                {
                    name: "Orwell",
                    data: [30], 
                },
                {
                    name: "Hawking",
                    data: [40], 
                },
            ]}
            type="bar"
            height="100%"     
            width="100%"   
        />    
    );
}

export default BarChart;