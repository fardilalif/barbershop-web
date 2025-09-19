import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Scissors, Star, Clock, MapPin } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Amin Barbershop
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Where tradition meets modern style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/products">Shop Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Amin Barbershop?</h2>
            <p className="text-lg text-gray-600">Experience the best in traditional and modern barbering</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Scissors className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle>Expert Barbers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Our skilled barbers have years of experience in classic and modern cutting techniques.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle>Premium Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We provide exceptional service with attention to detail and customer satisfaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-black" />
                <CardTitle>Convenient Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Open 7 days a week with flexible scheduling to fit your busy lifestyle.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Jalan Sultan Idris Shah</p>
                <p className="text-gray-600 mb-4">Ipoh, Perak, Malaysia</p>
                <Button asChild variant="outline">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
