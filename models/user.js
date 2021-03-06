module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
        userid:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        userpw:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        username:{
            type:DataTypes.STRING(10),
            allowNull:false,
        }
    },{
        timestamps:false,
        underscored:false,
        paranoid:false,
        modelName:'user',
        tableName:'user',
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'
    })

    // 1:N
    // hasMany 자식을 가진다
    // belongsTo 부모에 속한다
    User.associate = (models) => {
        User.hasMany(models.Assets, {
            foreignKey:'userid',
            onDelete:'cascade'
        })
    }

    return User
}