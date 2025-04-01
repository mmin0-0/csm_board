'use client';
import { Typography } from "@/app/_component/Typography";
import * as style from "@/app/styles/pages/home.css";
import { Chart, ChartData } from 'chart.js/auto';
import { useEffect, useRef } from "react";

export default function LeadsActivity() {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);
  useEffect(()=>{
    if(canvasEl.current !== null){
      const ctx = canvasEl.current.getContext('2d');
      if(!ctx) return;

      const labels:number[] = [2022, 2023, 2024, 2025];
      const data:ChartData<'line'> = {
        labels: labels,
        datasets: [
          {
            label: 'line Chart',
            data: [8, 11, 20, 10],
            tension: 0.1,
            borderColor: '#111111'
          }
        ]
      };
      const myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {display: false}
          },
          scales: {
            x: {
              ticks: {color: '#111111'},
              grid: {display: false}
            },
            y: {
              ticks: {
                color: '#111111',
                stepSize: 5,
              },
              grid: {display: false}
            }
          }
        }
      }); 

      return () => {
        myChart.destroy();
      };
    }
  },[]);
  return (
    <>
      <div className={style.ContTitWrap}>
        <Typography as="strong" color="black" size="medium" weight="bold">Leads Activity</Typography>
      </div>
      <div className={style.ContWrap}>
        <canvas ref={canvasEl} />
      </div>
    </>
  );
}
