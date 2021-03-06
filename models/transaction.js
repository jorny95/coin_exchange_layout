module.exports = (sequelize,DataTypes)=>{
    const Transaction = sequelize.define('transaction',{
        a_orderid:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        a_amount:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        a_commision:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        b_orderid:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        b_amount:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        b_commision:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        txid:{
            type:DataTypes.STRING(150),
            allowNull:false,
        },
        reg_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
    },{
        timestamps:false,
        underscored:false,
        paranoid:false,
        modelName:'transaction',
        tableName:'transaction',
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'
    })

    return Transaction
}