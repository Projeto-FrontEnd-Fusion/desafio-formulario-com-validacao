import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
// IMPORT CSS 
import './ChartComponent.css'
// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [], // Inicialmente vazio
    datasets: [], // Necessário para evitar o erro
  });

  useEffect(() => {
    // Simula recuperação de dados do localStorage
    const storedMembers = JSON.parse(localStorage.getItem("members") || "[]");

    // Agrupar usuários por data
    const userCountByDate: Record<string, number> = storedMembers.reduce((acc: Record<string, number>, member: any) => {
      const date = member.registrationDate;
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    // Preparar os dados do gráfico
    const labels = Object.keys(userCountByDate).sort(); // Datas ordenadas
    const data = labels.map((date) => userCountByDate[date]);

    // Atualizar o estado com os dados formatados
    setChartData({
      labels,
      datasets: [
        {
          label: "Usuários Cadastrados",
          data,
          backgroundColor: "rgba(75, 192, 192, 0.8)", 
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div className="grafico_container">
      <h3>Gráfico de Usuários Cadastrados</h3>
      <Bar className="gf_bk"
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Usuários Cadastrados ao Longo do Tempo",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
