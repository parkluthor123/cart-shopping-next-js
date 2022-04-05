import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';

export default class ProductsController {

  public async store({ request }: HttpContextContract) {
    const product = new Product();
    product.name = request.input('name');
    product.price = request.input('price');
    product.description = request.input('description');
    product.image = request.input('image');
    const save = await product.save();
    
    if(save)
    {
      return{
        status: 200,
      }
    }
  }

  public async show({}: HttpContextContract) {
    const product =  await Product.all();
    return product
  }

  public async destroy({}: HttpContextContract) {}
}
