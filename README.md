AngularJS-Bar-Chart
===================

This is a simple example of how an ng-repeat can be used to create a simple bar chart.

## Basic Setup

* Identify a field within your data (JSON) that can be used to determine the width of each bar, in this example, "TotalAquiredPoints" is used.
* Use the ng-style directive to calculate the bars width.
* View the example project here: http://embed.plnkr.co/7mNSUxCUmypEkeHDMzIf/preview
* View source code here: http://plnkr.co/edit/7mNSUxCUmypEkeHDMzIf

## ng-repeat

      <div ng-repeat="pointsQuarter in pointsYear.Entries" class="one-whole points-bar-container">
          <div class="grid-col one-fifth">{{ pointsQuarter.Quarter }}: </div>
          <div ng-style="{background: ChartConfig.barColours[quarterColour], opacity: 1,  width: ((pointsQuarter.TotalAquiredPoints / 800) * 80) + '%'}" class="grid-col four-fifths points-bar">
              <span>{{ pointsQuarter.TotalAquiredPoints }}</span>
          </div>
      </div>

## Bugs?

Please add them to the [Issue Tracker][issues] with as much info as possible, especially source code demonstrating the issue.
