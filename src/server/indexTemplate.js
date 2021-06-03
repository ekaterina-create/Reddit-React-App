export const indexTemplate = (content, token) => `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
     content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   
    <title>Document</title>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <script >
    window.__token__ = "${token}"
    </script>
    <div id="react_root">${content}</div>
    <div id="dropdown_root"></div>
    <div id="modal_root"></div>
    

    </body>
</html>
`