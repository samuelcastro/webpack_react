/**
 * Created by samuelcastro on 10/15/15.
 */

require('./main.css');
var component = require('./component');
var app = document.createElement('div');


document.body.appendChild(app);

app.appendChild(component());
