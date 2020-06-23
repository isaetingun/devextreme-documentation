---
default: undefined
type: number
---
---
##### shortDescription
Specifies a coefficient that determines the spacing between the maximum series point and the axis.

---
When [margins are enabled](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/valueAxis/valueMarginsEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueMarginsEnabled') in a chart, the value axis extends slightly beyond its start and end values. It is required for preventing the cutting off of parts of the minimum and maximum series points.

By default, margins are calculated automatically and equal to half of an axis' [tick interval](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/050%20Axes/30%20Axis%20Ticks%20Arrangement.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Axes/Axis_Ticks_Arrangement'). If you need to specify custom margins, use the **minValueMargin** and **maxValueMargin** options. These options accept coefficients that are used to calculate the actual start and end values for an axis with applied margins. The end value is calculated using the following formula.

*endValue = max + (max - min) * **maxValueMargin***	

For example, consider that *min* is 1960 and *max* is 2010. If you set the **maxValueMargin** option to 0.1, the axis will end in 2015.

*endValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015*

![Value Margins ChartJS](/images/ChartJS/PolarValueMargins.png)

To discover how the axis' start value is calculated, refer to the **minValueMargin** option description.

[note]Margins can be added to axes of the continuous or logarithmic type only.