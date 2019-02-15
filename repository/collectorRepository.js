module.exports = function(){
 
    const sql = require('mssql') 

   
    var config = {
        user: 'sa',
        password: 'ABC123teste',
        server: 'localhost', 
        database: 'ufscar' 
    };
        
    this.insert = async (collector, callback) => {
        sql.connect(config, (error)=>{
            if (error){
                callback(error)
                return
            }

                
            const request = new sql.Request()
            request.input('UserId', sql.Int, collector.userId)
            request.input('MovieId', sql.Int, collector.movieId)
            request.query('insert into [dbo].[USERMOVIES] (UserId, MovieId) values (@UserId, @MovieId)', (error, result)=>{
                    sql.close()
                    callback(error, collector)
                })

        })  
    }
    
    this.delete = async (collector, callback) => {
        sql.connect(config, (error)=>{
            if (error){
                callback(error)
                return
            }

                
            const request = new sql.Request()
            request.input('UserId', sql.Int, collector.userId)
            request.input('MovieId', sql.Int, collector.movieId)
            request.query('delete from [dbo].[USERMOVIES] where UserId = @UserId AND MovieId = @MovieId', (error, result)=>{
                    sql.close()
                    callback(error, collector)
                })

        })  
    }

    this.existsCollector = async (collector, callback) => {
        sql.connect(config, (error) => {
            if (error){
                callback(error)
                return
            }

            const request = new sql.Request()
            request.input('UserId', sql.Int, collector.userId)
            request.input('MovieId', sql.Int, collector.movieId)
            request.query('select UserId, MovieId from [USERMOVIES] where UserId = @UserId and MovieId=@MovieId', (error, result) =>{
                
                callback(error, result.recordset)
                sql.close()
            })
                        
        })
    }    
}