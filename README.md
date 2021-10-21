# TakeShape Starter Netlify Functions

The following is a guide to launching a TakeShape project that injects Ecommerce data into your React project using Netlify Functions.


## Instructions

1. Create a TakeShape project with the pattern in this repo. The button below will deploy the project:

* <a href="https://app.takeshape.io/add-to-takeshape?repo=https://github.com/takeshape/takeshape-starter-netlify-functions/tree/main/.takeshape/pattern"><img alt="Deploy To TakeShape" src="https://camo.githubusercontent.com/1b580e3ce353d235bde0f376ca35b0fb26d685f3750a3013ae4b225dd3aaf344/68747470733a2f2f696d616765732e74616b6573686170652e696f2f32636363633832352d373062652d343331632d396261302d3130616233386563643361372f6465762f38653266376264612d306530382d346564652d613534362d3664663539626536613862622f4465706c6f79253230746f25323054616b65536861706525343032782e706e673f6175746f3d666f726d6174253243636f6d7072657373" width="205" height="38" data-canonical-src="https://images.takeshape.io/2cccc825-70be-431c-9ba0-10ab38ecd3a7/dev/8e2f7bda-0e08-4ede-a546-6df59be6a8bb/Deploy%20to%20TakeShape%402x.png?auto=format%2Ccompress" style="max-width:100%;"></a>

2. Follow our documentation to [create a read-only API Key](https://app.takeshape.io/docs/api/api-keys).

3. Find your API Endpoint by navigating to your project in the TakeShape web client and clicking on the Home tab. Scroll down, and you'll see your API Endpoint in the `Useful Snippets` section on the bottom right. Refer to the image below:

![Useful Snippets](./images/useful-snippets.png)

4. In the terminal on your local machine, clone this repo with `git clone https://github.com/takeshape/takeshape-starter-netlify-functions`

5. Install the dependencies with `npm install`.

5. Install Netlify cli with `npm install netlify-cli -g`

5. Open the project directory and edit `.env.example`. Replace `Your-Endpoint-Here` with your endpoint, and `Your-Api-Key-Here` with your TakeShape project's api key. When you're done, save it and rename the file to `.env`.

6. Run `ntl dev` from the root directory of the project in your terminal.

6. Open http://localhost:8888 in your favorite browser.


## Learn More

Check out [our docs on this project](https://app.takeshape.io/docs/get-started/server/netlify) to learn how this example works.
