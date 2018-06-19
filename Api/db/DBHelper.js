var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: "10.3.132.84",
    user: 'root',
    password: '',
    database: 'flipped',
    multipleStatements:true
})


module.exports = {
    select: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
        	
            if(error || results.length == 0){
                _callback({status: false, error: error})
            }else if(results.length > 0){
            	_callback({status: true, data: {results}});
            }
           
            
        })
    },

    insert: function(_sql, _sql1,_callback){
        db.query(_sql,_sql1, function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else if(results){
            _callback({status: true, data: {results}});
            }
        })
    },

    insertCart: function(_sql,_callback){
        db.query(_sql, function(error, results){//console.log('insert',results,error);
            if(error){
                _callback({status: false, error: error})
            }else if(results){
            _callback({status: true, data: {results}});
            }
        })
    },
    insertProduct: function(_sql,_callback){
        db.query(_sql,function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else if(results){
            _callback({status: true, data: {results}});
            }
        })
    },

    updateCart: function(_sql,_callback){
        db.query(_sql, function(error, results){
            if(error){
                _callback({status: false, error: error})
            }else if(results){
                _callback({status: true, data: {results}});
            }
        })
    },

    update: function(_sql,_sql1,_callback){
        db.query(_sql,_sql1, function(error, results,fields){
            if(error){
                console.log("出错了")
                _callback({status: false, error: error})
            }else if(results){
                console.log("成功了")
                _callback({status: true, data: {results}});
            }
        })
    },
    updateProduct: function(_sql,_callback){
        db.query(_sql, function(error, results,fields){
        	console.log(_sql)
            if(error){
                console.log("出错了")
                _callback({status: false, error: error})
            }else if(results){
                console.log("成功了")
                _callback({status: true, data: {results}});
            }
        })
    },

//  delete: function(_sql,_sql1,_callback){
//      db.query(_sql,_sql1, function(error, results,fields){
//          if(error){
//              _callback({status: false, error: error})
//          }else if(results){
//              _callback({status: true, data: {results}});
//          }
//      })
//  },
//  
    delete1: function(_sql,_sql1,_callback){
        db.query(_sql,_sql1, function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else if(results){
                _callback({status: true, data: {results}});
            }
        })
    },
    
    
    delete: function(_sql,_callback){
    	console.log(_sql)
        db.query(_sql,function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else if(results){
                _callback({status: true, data: {results}});
            }
        })
    },

    deleteCart: function(_sql,_callback){
        db.query(_sql,function(error, results){
            if(error){
                _callback({status: false, error: error})
            }else if(results){
                _callback({status: true, data: {results}});
            }
        })
    },
}