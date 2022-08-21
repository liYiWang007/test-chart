/**
 * 饼状图
 * */
export function getEchartPieOption() {
// export function getEchartPieOption(data) {
    const option = {
        color: ['#53b7f4', '#83eacd'],
        tooltip: {
            trigger: 'item',
            show: true,
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'horizontal',
            type: 'scroll',
            bottom: '40',
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 14
            }
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '45%'],
                // data: data,
                data: [
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ],
                label: {
                    formatter: '{b}： {c} ({d}%)'
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 05)'
                    }
                }
            }
        ]
    }
    return option
}


/**
 * 双柱状图
 * */
export function getEchartDoubleBarOption(bw, lw) {
// export function getEchartDoubleBarOption() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['固定期限', '无固定期限']
        },
        yAxis: {//不写的话，y轴默认就标出数字
            // value: '',
            // minInterval: 1
        },
        series: [
            {
                name: '编外',
                type: 'bar',
                // data: [50,90,90],
                data: bw || [],
                label: {
                    show: true,
                    position: 'top'
                }
            },
            {
                name: '劳务',
                type: 'bar',
                // data: [90,90,90],
                data: lw || [],
                label: {
                    show: true,
                    position: 'top'
                }
            }
        ]
    }
    return option
}
