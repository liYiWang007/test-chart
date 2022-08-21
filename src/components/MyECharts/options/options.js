// 指定图表的配置项和数据

export const TreeMapOptions= {
    series: [
        {
            type: 'treemap',
            data: [
                {
                    name: 'nodeA',
                    value: 10,
                    children: [
                        {
                            name: 'nodeAa',
                            value: 4
                        },
                        {
                            name: 'nodeAb',
                            value: 6
                        }
                    ]
                },
                {
                    name: 'nodeB',
                    value: 20,
                    children: [
                        {
                            name: 'nodeBa',
                            value: 20,
                            children: [
                                {
                                    name: 'nodeBa1',
                                    value: 20
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};



// barchart
// export function getOptions(){
export function BarChartOptions() {
    const options = {
        type: 'bar',
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    }
    return options
}
