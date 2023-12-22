
import './Mammals.css';

const Mammals = () => {
  return ( 
    <div className="bg-pink-100">
      <div className='flex justify-center'>  
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {/* Beaver */}
          <div>
            <a href="/details/beaver">
              <img src="/images/beaver.jpg" alt="Beaver" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300'/>
            </a>
          </div>

          {/* Raccoon */}
          <div>
            <a href="/details/raccoon">
              <img src="/images/raccoon.jpg" alt="Raccoon" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div>

 {/* Rabbit */}
 <div>
            <a href="/details/rabbit">
              <img src="/images/rabbit.jpg" alt="Rabbit" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div>

          {/* Bobcat */}
          <div>
            <a href="/details/bobcat">
              <img src="/images/bobcat.jpg" alt="Bobcat" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300'/>
            </a>
          </div>

          {/* Opossum */}
          <div>
            <a href="/details/opossum">
              <img src="/images/opossum.jpg" alt="opossum" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div>

          {/* Deer */}
          <div>
            <a href="/details/deer">
              <img src="/images/deer.jpg" alt="Deer" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div>

          {/* Coyote */}
          <div>
            <a href="/details/coyote">
              <img src="/images/coyote.jpg" alt="Coyote" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div>

          {/* River Otter */}
          <div>
            <a href="/details/river otter">
              <img src="/images/riverotter.jpg" alt="River Otter" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div>


          {/* Red Fox */}
          <div>
            <a href="/details/red fox">
              <img src="/images/redfox.jpg" alt="Red Fox" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div> 
          
          {/* Squirrel */}
          <div>
            <a href="/details/squirrel">
              <img src="/images/squirrel.jpg" alt="Squirrel" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div> 



          {/* Black Bear */}
          <div>
            <a href="/details/ American black bear">
              <img src="/images/blackbear.jpg" alt=" American Black Bear" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div>  
          

          {/* Wood Chuck */}
          <div>
            <a href="/details/woodchuck">
              <img src="/images/woodchuck.jpg" alt="Wood Chuck" className='w-full h-auto rounded-lg hover:scale-110 transition-transform duration-300' />
            </a>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Mammals;
