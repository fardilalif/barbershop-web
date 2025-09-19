import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, Clock, Scissors } from 'lucide-react'
import servicesData from '@/data/services.json'

interface Service {
  id: number
  name: string
  description: string
  price: string
  duration: string
  image: string
  category: string
}

const Services = () => {
  const [services] = useState<Service[]>(servicesData)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...new Set(services.map(service => service.category))]
  
  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const handleBookingContact = (service: Service) => {
    const message = `Hi! I'd like to book an appointment for ${service.name} (${service.price}, ${service.duration}). What's your availability?`
    const whatsappUrl = `https://wa.me/+60103802579?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">Professional grooming services tailored to your style</p>
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video bg-black flex items-center justify-center relative">
                  <Scissors className="h-16 w-16 text-white" />
                  {/* Placeholder for service image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-t-lg">
                    <span className="text-white text-xs font-medium">Service Image</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <span className="text-lg font-bold text-green-600">{service.price}</span>
                </div>
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handleBookingContact(service)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No services found in this category.</p>
          </div>
        )}

        {/* Booking Info */}
        <div className="mt-12 bg-white rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book?</h2>
          <p className="text-gray-600 mb-4">
            Contact us via WhatsApp to schedule your appointment. We'll get back to you with available time slots.
          </p>
          <Button size="lg" onClick={() => {
            const message = "Hi! I'd like to book an appointment. What's your availability?"
            const whatsappUrl = `https://wa.me/+60103802579?text=${encodeURIComponent(message)}`
            window.open(whatsappUrl, '_blank')
          }}>
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact Us on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Services
