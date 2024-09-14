

//<a className='hover:bg-gray-700 px-3 py-2 rounded' href='/about'>About</a> 
//<a className='hover:bg-gray-700 px-3 py-2 rounded' href='/servicest'>Services</a> 

function HeaderComponent(){
return(<div className="text-center pb-8">
    <h1 className="text-xl">Ally Solutions</h1>
    <div className='flex flex-col justify-between items-center'>
        <div className='hidden md:flex space-x-4'>
          <a className='hover:bg-gray-700 px-3 py-2 rounded' href='/'>Home</a>
          <a className='hover:bg-gray-700 px-3 py-2 rounded' href='/contact'>Contact</a>
        </div>
        
    </div>
</div>)
}
export default HeaderComponent