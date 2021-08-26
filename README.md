# Bruno's Chart Plot - Intelie Challenge

This app was developed by Bruno Oliveira as the result of Intelie's Ploting a Chart Challenge [https://github.com/intelie/challenge-chart-plot](https://github.com/intelie/challenge-chart-plot)
You can check the challenge description [here](https://github.com/brunohuffenbaecher/challenge-chart-plot#challenge-description---plotting-a-chart).

The latest app version is deployed here: [https://bruno-oliveira-challenge-chart-plot.vercel.app/](https://bruno-oliveira-challenge-chart-plot.vercel.app/)

## Installation

To install all dependencies, first run:

### `yarn`

Then, to start the app, run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How does it work?

### Basic Concepts:

The app is divided in 4 main components.

1. Header
2. Input
3. Chart
4. Footer

The goal is to process information received from user input (as detailed [here](https://github.com/brunohuffenbaecher/challenge-chart-plot#definitions)) and generate a multi series line chart based on this data.

### Project approach and considerations:

The Input component uses the [react-codemirror2 library](https://www.npmjs.com/package/react-codemirror2), which integrates [codemirror](https://www.npmjs.com/package/codemirror) with React components. This is a well documented lib that handles code editing better than a simple text input.

The component is wrapped on a [Resize](https://www.npmjs.com/package/re-resizable) component, so we could drag its bottom limit expanding or retracting its height

The user input is only processed after clicking the 'Generate Chart' button. The code is converted from string to an object using [JSON5 library](https://json5.org/). This library was chosen due to its popularity and efficiency converting text that is not on the 'strict' JSON format.

In this step, if the input is invalid, the app will generate an alert to the user, avoiding crashing.

Clicking the button also triggers an algorithm to extract data from the previously converted object in a data array to be used by the chart component later.

This data array contains one object for each series to be plotted. These objects have `name` `data` and `color` properties.

The `name` is based on `group` and `select` [guidelines](https://github.com/brunohuffenbaecher/challenge-chart-plot#start), for each data series.

The `data` property is an array with a series of objects of `{timestamp, value}`. These objects are organized in ascending order. There's a function to insert and sort new objects in the array based on their timestamp. So even if the user input is not on ordered in a sequence, the algorithm will organized it. This feature was developed considering the requisites of the chart library and also seeking ways to optimize the sort processing for huge amount of data.

The `color` property is generated after all the input processing. For each series is generated a different color to better visualization on chart.

After all the input is processed and converted to useful data, the information is plotted on the chart.

Here, it was used the [recharts](https://recharts.org/en-US/) library. This choice was based on library support, documentation and users reviews. Besides this one, is was also considered using [Chart.js](https://www.chartjs.org/) or even creating a chart from scratch. For the reasons mentioned above, these options were discarded, even though they may be an alternative for future development.

The chart component was developed based on declarative programming, so it could easily adjust it as data expands without the need of rewriting the code.

The labels of X-Axis were converted to 'HH:MM' format, considering the value of `begin` property from the `span` event. Also, all the values are not the raw timestamp of data events, but rather its difference from the initial value.

## Further Development

As we deal with a huge amount of data, it may be necessary to improve even more the sorting algorithm to increase its performance.

Based on the quantity of different timestamp values, it may be necessary to handle better the ticks on X-Axis, so they do not overlap each other.

There's also room for improvement on handling data outside the limits. Right now this is done by the chart component, but it could also be done when processing the input.

Minor adjustments to the app style proving a better user experience.

## Challenge Description - Plotting a chart

In this challenge, you will implement a web application that plots a line chart based on some manually input data.

The input data is a sequence of events. This sequence represents the output of a query, which is omitted for simplicity. The data will be manually input by the final user instead. Based on the input sequence of events, you may generate a time based line chart containing one or more series.

## Definitions

An event is a set of keys and values. For this challenge, it will be represented as a JSON.

```
{a: 1, b: 2}
```

> Although this is not a strict JSON format, we are being lenient in order to improve readability and facilitate the data input. As there are some backend libraries that support this format, you can implement that support as a bonus.

On our system, each event has two mandatory fields: timestamp and type. All other fields are optional.

- _timestamp_ field holds the moment that the event refers to. It is formatted as a regular [Javascript timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)

- _type_ field holds the definition of what is represented on each event. Its value can be one of the following:

### start

Events of type _start_ define that a new sequence of data events will follow, along with the fields that may be plotted and their grouping. A group is a category for splitting the same variable into different series.

Example:

```
{type: 'start', timestamp: 1519780251293, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
```

In this example, for each different value of the pair (os, browser), we may plot two lines: one that represents the minimum response time, and one that represents the maximum response time. That is: if there are two different values for os and two different values for browser, we should have 8 different lines plotted.

### span

Events of type _span_ define what is the visible date range for the chart. A new event of this type may make the chart update its boundaries.

Example:

```
{type: 'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201}
```

In this example the data should be plotted inside the interval between the begin and end values, that is, the timestamps 1519780251293 and 1519780260201, respectively. All data outside this range may be ignored.

### stop

Events of type _stop_ define that no more data events will follow.
A _stop_ event is generated after loading a static timespan in the past, or if the user explicitly stops the query. If the chart consumes real time data, it might never be generated.
Any events that eventually follow a _stop_ event should be ignored, except for a new _start_, which would imply the creation of a new chart.

Example:

```
{type: 'stop', timestamp: 1519780251293}
```

### data

Events of type _data_ define the content that might be displayed on the chart.

Example

```
{type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
```

> Note that absent data values for the fields defined by _select_ and _group_ also generate new series. On the other hand, fields that are not defined should be ignored.

## The challenge

We expect you to:

- Provide an input on the user interface to allow plotting different sequences of events;
- Based on an arbitrary sequence of events, plot the chart that represents the output for that sequence;
- Follow the layout indication provided on the prototype below;
- Write tests;
- Suggest and implement a protection for this application to deal with huge amount of data;
- Justify design choices, arguing about costs and benefits involved. You may write those as comments inline or, if you wish, provide a separate document summarizing those choices;
- Write all code and documentation in english

![challenge_frontend](https://github.com/intelie/challenge-chart-plot/raw/master/challenge_frontend.png 'Expected user interface')

Although you can choose any graphical library to plot the chart, we suggest that you use a declarative JS framework to build the application such as ReactJS.

## Solve this challenge

To solve this challenge, you may fork this repository, then
send us a link with your implementation. Alternatively, if you do not want to have this repo on
your profile (we totally get it), send us a
[git patch file](https://www.devroom.io/2009/10/26/how-to-create-and-apply-a-patch-with-git/)
with your changes.

There is no unique solution to this challenge. The intent is to evaluate candidate's ability and familiarity with tools and best practices.

If you are already in the hiring process, you may send it to whoever is your contact at Intelie. If you wish to apply for a job at Intelie, please send your solution to [trabalhe@intelie.com.br](mailto:trabalhe@intelie.com.br).
