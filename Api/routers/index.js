var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('../db/db');
	db = db.mongodb;
var path = require('path');


var product = require('./product/product');
var productList = require('./productList/productList');
var topic = require('./topic/topic');
var designer = require('./designer/designer');
var detail = require('./detail/detail')
var loginIn = require('./login/login')
var AddPlace = require('./ismine/ismine')
var cart = require('./cart/cart')
var Order = require('./cart/order')
var SProduct = require('./searchList/searchList')
var order = require('./order/order')
// var product = require('./product/product');
var Home = require('./homePage/homePage');
var IsMine = require('./ismine/ismine')
var setting = require('./setting/setting')
var NextPage = require('./setNextPage/setNextPage')




var productManagement = require('./management/productManagement/productManagement');

var designerManagement = require('./management/designer/designer')




app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
        res.send(200);
    } else {
        next();
    }
}); 

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    //若要../ 用原生模块path
    app.use(express.static(path.resolve(__dirname, '../')));





module.exports = {
    start:function(port){
        order.getOrder(app,db);
        product.getProduct(app,db);
        productList.getProduct(app,db);
        topic.getProduct(app,db); 
        AddPlace.IsMine(app,db);
        designer.getProduct(app,db);
        SProduct.searchProduct(app,db);
        IsMine.IsMine(app,db);
        detail.getDetail(app,db);
        cart.addCart(app,db);
        
        Order.Order(app,db);
        Home.homePage(app,db);
        loginIn.Login(app,db);

        productManagement.getProduct(app,db); 
        setting.settingMsg(app,db);
        NextPage.setNextPage(app,db);


        // management-----------------------

        designerManagement.designerManager(app,db);

        // homePage.getProduct(app,db);
        app.listen(port);

        app.use(express.static(path.resolve(__dirname, '../')));

	}
}
