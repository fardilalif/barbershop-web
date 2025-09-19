import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, Package } from 'lucide-react'
import productsData from '@/data/products.json'

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
  inStock: boolean
}

const Products = () => {
  const [products] = useState<Product[]>(productsData)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...new Set(products.map(product => product.category))]
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const handleWhatsAppContact = (product: Product) => {
    const message = `Hi! I'm interested in ${product.name} (${product.price}). Is it available?`
    const whatsappUrl = `https://wa.me/+60103802579?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">Premium grooming products for the modern gentleman</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
                  <Package className="h-20 w-20 text-gray-400" />
                  {/* Placeholder for product image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-t-lg">
                    <span className="text-white text-xs font-medium">Image Placeholder</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <span className="text-lg font-bold text-green-600">{product.price}</span>
                </div>
                <CardDescription className="mb-3">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handleWhatsAppContact(product)}
                  disabled={!product.inStock}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Contact via WhatsApp' : 'Out of Stock'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
