import TestimonialsComponent from "./testimonialComponent"
import type { TestimonialItem } from "./testimonialComponent";

const testimonials: TestimonialItem[] = [
  {
    name: 'Rajesh Verma',
    role: 'QA Engineer',
    company: 'Manufacturing Partner',
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Verma&background=FFEDD5&color=F97316',
    rating: 5,
    content:
      "I have been thoroughly satisfied with the work done by your team and would like to continue sending more projects your way. I’m confident that as we continue working together, the partnership will only get stronger."
  },
  {
    name: 'Deepak Mathur',
    role: 'Industrial Manufacturing',
    company: 'Automotive Supplier',
    avatar: 'https://ui-avatars.com/api/?name=Deepak+Mathur&background=FFEDD5&color=F97316',
    rating: 5,
    content:
      "I just wanted to take a moment and express how impressed we are with the quality of the parts we received from Ascent Industries. We have worked with many suppliers in the past, but Ascent stands out in terms of quality and exceptional customer service."
  },
  {
    name: 'Sumit Solanki',
    role: 'Industrial Manager',
    company: 'Production Operations',
    avatar: 'https://ui-avatars.com/api/?name=Sumit+Solanki&background=FFEDD5&color=F97316',
    rating: 5,
    content:
      "I am thrilled with the quality of the products from Ascent Industries. The product manager was equally impressed and gave great feedback on how everything looked. Thank you for delivering top-notch products!"
  },
  {
    name: 'Dipesh Mehta',
    role: 'Product Manager',
    company: 'Industrial Systems',
    avatar: 'https://ui-avatars.com/api/?name=Dipesh+Mehta&background=FFEDD5&color=F97316',
    rating: 5,
    content:
      "We are extremely pleased with the quality of the boxes produced by Ascent Industries. Even though it was a complex project, the end result exceeded our expectations. I highly recommend them for their exceptional work."
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
