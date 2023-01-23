import Sequelize, { Model } from "sequelize";

export default class Curso  extends Model{

    static init(sequelize) {

        super.init({
            nome:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len: {
                        args: [3, 255],
                        msg: 'Campo "curso" dever ter 3 à 255 caracteres.'
                    },
                },
            },

        }, {
            sequelize,
        })

        return this;
    }


    static associate(models){
        this.hasMany(models.professores, {foreignKey: 'curso_id'})
    }
}