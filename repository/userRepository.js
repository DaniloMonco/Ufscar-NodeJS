module.exports = function(){
 
    const sql = require('mssql') 

   
    var config = {
        user: 'sa',
        password: 'ABC123teste',
        server: 'localhost', 
        database: 'ufscar' 
    };
        
    this.insert = async (user, callback) => {
        sql.connect(config, (error)=>{
            if (error){
                callback(error)
                return
            }

                
            const request = new sql.Request()
            request.input('Login', sql.VarChar, user.login)
            request.input('Name', sql.VarChar, user.name)
            request.input('Email', sql.VarChar, user.email)
            request.input('Password', sql.VarChar, user.password)
            request.query('insert into [dbo].[USER] (Login, Name, Email, Password) values (@Login, @Name, @Email, @Password); SELECT SCOPE_IDENTITY() AS UserId', (error, result)=>{
                    sql.close()
                    callback(error, result.recordset)
                })

        })  
    }
    
    this.findByUserAndPassword = async (user, callback) => {
        sql.connect(config, (error) => {
            if (error){
                callback(error)
                return
            }

            const request = new sql.Request()
            request.input('Login', sql.VarChar, user.login)
            request.input('Password', sql.VarChar, user.password)
            request.query('select UserId, Name from [User] where Login = @Login and Password=@Password', (error, result) =>{
                sql.close()
                callback(error, result.recordset)
            })
                        
        })
    }
}