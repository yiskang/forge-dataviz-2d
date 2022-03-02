# forge-dataviz-2d

This sample demonstrates how to add/remove [sprites](https://forge.autodesk.com/en/docs/dataviz/v1/developers_guide/examples/create_sprite_style/) of Autodesk Forge [Data Visualization](https://forge.autodesk.com/en/docs/dataviz/v1/developers_guide/introduction/overview/) extension.

Just navigate to any of the html files in  the [public](./public) subfolder.

## Demo Video

[![](http://img.youtube.com/vi/UZQwHleuhf0/0.jpg)](http://www.youtube.com/watch?v=UZQwHleuhf0 "Demo the possibility of adding/removing sprites of Autodesk Forge Data Visualization extension")

[Click here or click on the above picture to view the video](http://www.youtube.com/watch?v=UZQwHleuhf0)

## Running locally

1. Get your Forge app client ID and client secret (see how to [create an app](https://forge.autodesk.com/en/docs/oauth/v2/tutorials/create-app))
2. Clone this repository, and navigate to the project's folder in your terminal
3. Install npm dependencies
    - `npm install`
4. Specify env. variables `FORGE_CLIENT_ID`, `FORGE_CLIENT_SECRET`, and `PORT`
    - `export FORGE_CLIENT_ID=<your client id>`
    - `export FORGE_CLIENT_SECRET=<your client secret>`
    - `export PORT=3000`
5. Run the app
    - `npm start`

If you're using [Visual Studio Code](https://code.visualstudio.com), skip the steps 4 and 5,
and instead create a _.vscode/launch.json_ in the project's folder with the following JSON:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/server.js",
            "env": {
                "FORGE_CLIENT_ID": "<your client id>",
                "FORGE_CLIENT_SECRET": "<your client secret>",
                "PORT": 3000
            }
        }
    ]
}
```

Then you can run _and debug_ the application with `F5`, or by going to `Run` > `Start Debugging`.

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

## Written by

Eason Kang [@yiskang](https://twitter.com/yiskang), [Forge Partner Development](http://forge.autodesk.com)