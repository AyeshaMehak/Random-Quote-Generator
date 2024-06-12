"use client";
import { React, useState, useEffect } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";

const RandomQuote = () => {
 const [quote, setQuote] = useState({
  text: "The only way to do great work is to love what you do.",
  author: "Steve Jobs",
 });

 const [hex, setHex] = useState("#424242"); 
 const randomHex = () =>{
     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor)
 }

 const handleClick = () => {
    randomHex();
    random();
 }

 const [quotes, setQuotes] = useState([]);

 useEffect(() => {
  async function loadQuotes() {
   const response = await fetch("https://type.fit/api/quotes");
   const data = await response.json();
   setQuotes(data);
  }

  loadQuotes();
 }, []);

 const random = () => {
  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  setQuote(selectedQuote);
 };

 return (
  <>
   <section style={{backgroundColor: `${hex}`}} className=" h-screen w-full justify-center flex items-center">
    <div className="text-center bg-white p-14 rounded-xl shadow-2xl">
     <div className="mb-8 flex justify-center items-end"><FaQuoteLeft style={{color: `${hex}`}} className="text-6xl mr-4"/>{quote.text}</div>

     <div className="flex">
      <div>- {quote.author.split(",")[0]}</div>
      <button onClick={handleClick} className="m-auto mr-2">
       <IoReloadOutline style={{color: `${hex}`}} className="hover:rotate-45 duration-500 text-4xl" />
      </button>
     </div>
    </div>
   </section>
  </>
 );
};

export default RandomQuote;
