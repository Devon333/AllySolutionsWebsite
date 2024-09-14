
import HeaderComponent from "@/components/header-component";
import FooterComponent from "@/components/footer-component";




export default function Coontact() {
  
    //console.log(posts)

  return (
    <div className="flex flex-col min-h-screen text-white max-w-xl mx-auto">
      <HeaderComponent/>
      <div className="flex-grow">
         <h1 className="text-center"> Contact Us</h1>
        
            <div>
              We’d love to hear from you! Whether you have a question
              about our services, need a quote, or want to discuss a project, 
              feel free to reach out to us.
           </div>
           <div> 
               <h2>Contact Information</h2>
                <ul className='list-disc pl-5 space-y-2 text-white'>
                  <li>Phone: 978-799-1209</li>
                  <li>Email: allysolutionsforall@gmail.com</li>
                </ul>
           </div>
           <div>
                <h2>Business Hours</h2>
                <ul className='list-disc pl-5 space-y-2 text-white'>
                  <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                  <li>Saturday: By Appointment</li>
                  <li>Sunday: Closed</li>
                </ul>
           </div>
   
           <div>
              Get in touch with us today to discuss your project requirements and get a free quote!
           </div>
        
      </div>
      <FooterComponent/>
    </div>  
  );  
}
