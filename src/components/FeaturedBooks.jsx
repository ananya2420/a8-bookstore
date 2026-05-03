import books from "@/data/books.json"; 
import BookCard from "./BooksCard";

const FeaturedBooks = () => { 
  const featuredBooks = books.slice(0, 4); 
  const techBooks = books.filter(book => book.category === "Tech").slice(0, 4); 
  const scienceBooks = books.filter(book => book.category === "Science").slice(0, 4); 
  
  return ( 
  <> 
   <section className="max-w-7xl mx-auto px-6"> 
    
    <h2 className="text-2xl font-bold mb-6">Featured Books</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> 
      
      {featuredBooks.map((book) => ( 
        <BookCard key={book.id} book={book} 
        
        /> 
      ))}
       </div>
   </section> 
    <section className="max-w-7xl mx-auto px-6 mt-12">
      
       <h2 className="text-2xl font-bold mb-6">Tech Books</h2> 
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         {techBooks.map((book) => ( <BookCard key={book.id} book={book} 
         
         /> 
        ))} 
        </div>
   </section> 
   
   <section className="max-w-7xl mx-auto px-6 mt-12 mb-12"> 
    <h2 className="text-2xl font-bold mb-6">Science Books</h2> 
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> 
      {scienceBooks.map((book) => ( 
        
        <BookCard key={book.id} book={book} 
        /> 
    ))} 
  </div>
   </section> 
  </> 
  );
 }; 
export default FeaturedBooks;