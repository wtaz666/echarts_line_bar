import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class PageView extends Component {
    render() {
        const { pageViewData, chartHeight } = this.props;
        return (
            <div style={{height: chartHeight}}>
                <ReactEcharts
                    option={
                        {
                        grid: {
                            top: 80,
                            left: 50,
                            right: 20
                        },
                        tooltip: {
                            trigger: 'axis',
                            formatter: (params) => {
                                if (params[0] && params[1]) {
                                    return `<div style="height:100px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa;font-size: 12px;padding: 6px 20px;box-sizing:border-box;color: #000">
                                        <p>${params[0].axisValue}</p>
                                        <p>${params[1].seriesName} ${params[1].data}</p>
                                        <p>${params[0].seriesName} ${params[0].data}</p>
                                    </div>`
                                } else if (!params[1]) {
                                    return `<div style="height:80px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa;font-size: 12px;padding: 6px 20px;box-sizing:border-box;color: #000">
                                        <p>${params[0].axisValue}</p>
                                        <p>${params[0].seriesName} ${params[0].data}</p>
                                    </div>`
                                }
                            },
                        },
                        title: {
                            text: "访问量动态",
                            left: 0,
                            textStyle: {
                                color: '#fff',
                                fontSize: '22',
                                fontWeight: 'normal'
                            }
                        },
                        legend: {
                            bottom: '4%',
                            textStyle: {
                                color: '#fff',
                            },
                            data: ['来自外网的业务系统访问量','来自内网的业务系统访问量']
                        },
                        xAxis: [{
                            type: "category",
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#fff'
                                }
                            },
                            axisLabel: {
                                fontSize: 10
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            splitArea: {
                                show: false
                            },
                            boundaryGap: true,
                            data: pageViewData.time,
                        }],
                        yAxis: [{
                            type: "value",
                            name: "单位" + pageViewData.unitUpName,
                            nameTextStyle: {
                                color: "#fff"
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#fff'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitArea: {
                                show: false
                            },
                            axisLabel: {
                                interval: 0
                            },
                            splitNumber: 4
                        }],
                        series: [
                            {
                                name: "来自外网的业务系统访问量",
                                type: "bar",
                                stack: "总量",
                                itemStyle: {
                                    normal: {
                                        color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#D7AF6F' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: '#E4CBA0' // 100% 处的颜色
                                            }]
                                        }
                                    }
                                },
                                data: pageViewData.unKnown
                            },
                            {
                                name: "来自内网的业务系统访问量",
                                type: "bar",
                                stack: "总量",
                                barMaxWidth: 25,
                                barGap: "5%",
                                itemStyle: {
                                    normal: {
                                        color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: 'rgb(56,84,203)' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: 'rgba(56,84,203, .37)' // 100% 处的颜色
                                            }]
                                        }
                                    }
                                },
                                data: pageViewData.known,
                            }
                        ]
                    }
                    }>
                </ReactEcharts>
            </div>


        );
    }
}

export default PageView;