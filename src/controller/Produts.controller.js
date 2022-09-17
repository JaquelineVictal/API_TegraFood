const Produts = require("../model/Produts.js")
const { Op } = require("sequelize");

const ProdutsController = {


    listAll: async (req, res) => {
        //select * from department
        const ListProduts = await Produts.findAll();

        return res.status(200).json(ListProduts);
    },

    GetById:  async (req, res) => {

      try {
         //select * from department where id = "id"
        const { id } = req.params;
          
        const ProdutById = await Produts.findByPk(id);

        if(!ProdutById){
          return res.status(404).json('Id não encontrado');
        }

        return res.status(200).json(ProdutById);
        
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");        
      }     
    },

    FindProdusts: async (req, res) => {

      try {

        const filters  = req.query;

        console.log(filters)

        let where = {}

        if(filters.filter){
          where = {
            [Op.or]: [
              { title: {[Op.like]:`%${filters.filter}%`} },
              { description: {[Op.like]: `%${filters.filter}%`} },
              { category: {[Op.like]:`%${filters.filter}%`} }
            ]
          }
        }

        if(filters.category){
            where.category = filters.category

        }
        if(filters.max && filters.min ){
              where.price = { 
                                [Op.and]: [
                                        { [Op.lte]: filters.max },
                                        { [Op.gte]: filters.min }
                                ]
                            }
              
        }else if(filters.max){
          where.price = {[Op.lte]: filters.max} 
        }else if(filters.min){
          where.price = {[Op.gte]: filters.min}
        }

        console.log(where)

        if(filters.order){

          let page = filters.page - 1

          const ListProduts = await Produts.findAll({
            limit: 10,
            offset: page*10,
            order: [['title', filters.order]],
            where
            },            
            );
           
            
            return res.status(200).json(ListProduts);          
            
        } else {
          let page = filters.page - 1

          const ListProduts = await Produts.findAll({
            limit: 10,
            offset: page*10          
            },            
            );
            return res.status(200).json(ListProduts);
        }
        
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }
    },

    CreatedProdut: async (req, res) => {

      try {
            //INSERT INTO...

            const { title, price, description, image, category } = req.body;
    
            const NewProdut = await Produts.create({
              title, 
              price, 
              description, 
              image, 
              category 
            });
    
            return res.status(201).json(NewProdut);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");
      }  
    },

    DeletedProdut:  async (req, res) => {

      try {

        const { id } = req.params;
           
        await Produts.destroy({
          where: {
            id,
          },
        });
    
        return res.sendStatus(204);
        
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame o batman!");        
      }
      },

      UpdateProdut:  async (req, res) => {

        try {

          const { id } = req.params;
          const { title, price, description, image, category } = req.body;
      
          const ProdutsUpdate = await Produts.update(
            {
              title, 
              price, 
              description, 
              image, 
              category 
            },
            {
              where: {
                id,
              },
            }
          );
      
          return res.status(200).json(ProdutsUpdate);
          
        } catch (error) {
          return res.status(500).json("Algo errado aconteceu, chame o batman!");            
        }
      },
    
};

module.exports = ProdutsController;