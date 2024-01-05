import {useState, useEffect,memo,Fragment} from 'react'


//apexcharts

//component

//flatpickr


//img



// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../store/setting/selectors'

//Count-up

//select


const options2 =[
    {value: 'Enter Amount in USD', label: 'Enter Amount in USD'},
    {value: '100', label: '100'},
    {value: '200', label: '200'},
    {value: '500', label: '500'}
]
 
  

const Index = memo((props) => {
     useSelector(SettingSelector.theme_color)
    
    const getVariableColor = () => {
        let prefix = getComputedStyle(document.body).getPropertyValue('--prefix') || 'bs-';
        if (prefix) {
          prefix = prefix.trim()
        }
        const color1 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary`);
        const color2 = getComputedStyle(document.body).getPropertyValue(`--${prefix}info`);
        const color3 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary-tint-20`);
        const color4 = getComputedStyle(document.body).getPropertyValue(`--${prefix}warning`);
        return {
          primary: color1.trim(),
          info: color2.trim(),
          warning: color4.trim(),
          primary_light: color3.trim(),
        };
      }
      const variableColors = getVariableColor();
    const [checked, setChecked] = useState(true);
    const colors = [variableColors.primary, variableColors.info];
    useEffect(() => {
        return () => colors
    })

    const chart1 = {      
      options:{
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "28%",
          endingShape: "rounded",
          borderRadius: 3,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        labels: {
          minWidth: 20,
          maxWidth: 20,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 130,
            },
          },
        },
      ],
    },
    series: [
        {
          name: "Successful deals",
          data: [30, 50, 35, 60, 40, 60, 60],
        },
        {
          name: "Failed deals",
          data: [40, 50, 55, 50, 30, 80, 30],
        },
      ],
    }
    const chart2 ={
      options: {
            
            colors: colors,
            chart: {
          
              toolbar: {
                show: false,
              },
            },
            forecastDataPoints: {
              count: 3,
            },
            stroke: {
              width: 3,
            },
            grid: {
              show: true,
              strokeDashArray: 7,
            },
            markers: {
                size: 6,
                colors: "#FFFFFF",
                strokeColors: colors,
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 0,
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
            },
            xaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
              ],
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              tooltip: {
                enabled: false,
              },
            },
          },
          series: [
            {
              name: "Sales",
              data: [10, 82, 75, 68, 47, 60, 49, 91, 108],
            },
          ]
    }

        return (
            <Fragment>

            </Fragment>
        )
    }
)

Index.displayName="Index"
export default Index
