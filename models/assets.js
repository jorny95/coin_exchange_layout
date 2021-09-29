module.exports = (sequelize,DataTypes)=>{
    const Assets = sequelize.define('assets',{
        input:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        output:{
            type:DataTypes.STRING(10),
            allowNull:false,
        },
        regDate:{
            type:DataTypes.DATE,
            allowNull:false,
        }
    },{
        timestamps:false,
        underscored:false,
        paranoid:false,
        modelName:'assets',
        tableName:'assets',
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'
    })

    Assets.associate = (models) => {
        Assets.belongsTo(models.User, {
            onDelete:'cascade',
            foreignKey: {
                allowNull: true,
            }
        })
    }

    return Assets
}