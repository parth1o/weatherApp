# weatherApp
A react, typescript web app utilizing the openweathermap API.

I have unhid my API key to make it easier for the marker to run and mark my web app locally.
Although both my build and release pipelines work as expected, the web app is currently not functioning as expected in the azure production environment for some unknown reason but it works perfectly on a local environment.
I created this web app as it seemed simple and easy to develop right from the on set and it seemed useful.

The API used: https://openweathermap.org/current

Live deployed web app: https://msa-weather-app.azurewebsites.net/

Build & release pipelines description:

In the azure-pipelines.yml file I have defined my YAML script for my build pipeline. My build pipeline is triggered each time a commit is made to my master or develop branches, when the pipeline is triggered, it automatically compiles and builds my project and produces a build artifact. However, I have excluded the pipeline from being triggered when commits are made to the README.md file as there is no need for the build pipeline to be triggered when the readme file is updated. Using the pool keyword I stated the operating system that will be used to build the web app. I also used variables to easily be able to use some repetitive values multiple times throughout the script. In the steps section I define a set of tasks and a script to be executed, some of the steps include downloading node js and installing the apps required packages. The main goal of the release pipeline is to use the build artifact produced by the build pipeline, to deploy the updated application onto azure app services. The release pipeline is only triggered when a new build artifact is generated by the master branch and so this allows me to create new features and add additional functionality on the develop branch and I can test and choose which updates I want to push and merge to the master branch and therefore to my live web app. 
