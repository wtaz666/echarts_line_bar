import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class FlowDynamic extends Component {
    render() {
        const { flowDynamicData, chartHeight } = this.props; // 父组件传过来数据
        return (
            <div className='singleFlowDynamic' style={{height: chartHeight}}>
                <ReactEcharts option={
                    {
                    title: {
                        text: '流量动态',
                        left: 0,
                        textStyle: {
                            color: '#fff',
                            fontSize: '22',
                            fontWeight: 'normal'
                        }
                    },
                    grid: {
                        left: 50,
                        top: 80,
                        right: '20'
                    },
                    legend: {
                        x: '30%',
                        bottom: '4%',
                        textStyle: {
                            color: '#fff',
                        },
                        data: ['内网流量', '外网流量']
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
                    xAxis: [
                        {
                            type: 'category',
                            data: flowDynamicData.time,
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    width: 0
                                },
                            },
                            axisLabel: {
                                fontSize: 10
                            },
                            axisTick: {
                                show: false
                            },
                            boundaryGap: true
                        }
                    ],
                    yAxis: [{
                        type: 'value',
                        name: '单位' + flowDynamicData.unitUpName,
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                                width: 0
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitNumber: 4
                    }],
                    series: [
                        {
                            name: '外网流量',
                            type: 'line',
                            stack: '总量',
                            color: 'rgb(226,198,150)',
                            symbol: 'none',
                            areaStyle: {
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
                                        }],
                                    }
                                }
                            },
                            data: flowDynamicData.unKnown
                        },
                        {
                            name: '内网流量',
                            type: 'line',
                            stack: '总量',
                            color: 'rgb(17,114,93)',
                            symbol: 'none',
                            areaStyle: {
                                normal: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: 'rgb(10,132,106)' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: 'rgba(10,132,106, .37)' // 100% 处的颜色
                                        }],
                                    }
                                }
                            },
                            data: flowDynamicData.known
                        },

                    ]
                }
                } />
            </div>
        );
    }
}

export default FlowDynamic;