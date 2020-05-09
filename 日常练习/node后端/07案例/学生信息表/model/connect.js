const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('数据连接成功');
}).catch((err) => {
    console.log('数据库连接失败' + err);
})