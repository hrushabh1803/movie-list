import { useState } from "react";
import React from "react";
import{Link} from 'react-router-dom'
import MovieDes from "./Movie-Des";
function MovieList(){
      const marvelMovies = [
            {
              id: 1,
              title: "Iron Man",
              year: 2008,
              description: "Billionaire Tony Stark builds a powered suit of armor and becomes Iron Man.",
              genre: "Action",
              director: "Jon Favreau",
              cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"],
            },
            {
              id: 2,
              title: "The Avengers",
              year: 2012,
              description: "Earth's mightiest heroes must come together and learn to fight as a team.",
              genre: "Action",
              director: "Joss Whedon",
              cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
            },
            {
              id: 3,
              title: "Black Panther",
              year: 2018,
              description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people.",
              genre: "Action",
              director: "Ryan Coogler",
              cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
            },
            {
              id: 4,
              title: "Guardians of the Galaxy",
              year: 2014,
              description: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior.",
              genre: "Action",
              director: "James Gunn",
              cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
            },
            {
              id: 5,
              title: "Thor",
              year: 2011,
              description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans.",
              genre: "Action",
              director: "Kenneth Branagh",
              cast: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
            },
            {
              id: 6,
              title: "Doctor Strange",
              year: 2016,
              description: "A former neurosurgeon embarks on a journey of healing and discovery as the Sorcerer Supreme of the mystical arts.",
              genre: "Action",
              director: "Scott Derrickson",
              cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"],
            },
            {
              id: 7,
              title: "Captain America: The Winter Soldier",
              year: 2014,
              description: "Steve Rogers teams up with Natasha Romanoff to stop a powerful enemy known as the Winter Soldier.",
              genre: "Action",
              director: "Anthony Russo, Joe Russo",
              cast: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"],
            },
            {
              id: 8,
              title: "Ant-Man",
              year: 2015,
              description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, Scott Lang must embrace his inner hero.",
              genre: "Action",
              director: "Peyton Reed",
              cast: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly"],
            },
            {
              id: 9,
              title: "Spider-Man: Homecoming",
              year: 2017,
              description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man.",
              genre: "Action",
              director: "Jon Watts",
              cast: ["Tom Holland", "Michael Keaton", "Robert Downey Jr."],
            },
            {
              id: 10,
              title: "Captain Marvel",
              year: 2019,
              description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war.",
              genre: "Action",
              director: "Anna Boden, Ryan Fleck",
              cast: ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn"],
            },
            {
              id: 11,
              title: "Avengers: Infinity War",
              year: 2018,
              description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
              genre: "Action",
              director: "Anthony Russo, Joe Russo",
              cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            },
            {
              id: 12,
              title: "Avengers: Endgame",
              year: 2019,
              description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
              genre: "Action",
              director: "Anthony Russo, Joe Russo",
              cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
            },
            {
              id: 13,
              title: "Thor: Ragnarok",
              year: 2017,
              description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
              genre: "Action",
              director: "Taika Waititi",
              cast: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"],
            },
            {
              id: 14,
              title: "Guardians of the Galaxy Vol. 2",
              year: 2017,
              description: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
              genre: "Action",
              director: "James Gunn",
              cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
            },
            {
              id: 15,
              title: "Ant-Man and The Wasp",
              year: 2018,
              description: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
              genre: "Action",
              director: "Peyton Reed",
              cast: ["Paul Rudd", "Evangeline Lilly", "Michael Peña"],
            },
          ];
          let [movieid,setMovieId] = useState()
          function submitHandler(x){
          setMovieId(x);
           marvelMovies.filter((movie)=>{
            return movie.id==x
           }).map((movie)=>{
            console.log(movie)
            return <MovieDes props={movie} id={x}/>
          
           })
          }

      return(
            <>
            <div className="search-div mt-5">
               <input type="text" className='search' />
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" >
                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
               </svg>
               </div>

            <div className="movieCart">
                  {
                        marvelMovies.map((movie)=>{
                          return(
                              <div className="movie-Cart-inner">
                              <h4 className="mt-2">Title:{movie.title}</h4>
                              <p className="mt-1">Year:{movie.year}</p>
                              <p className="mt-1">Year:{movie.description}</p>
                              {/* <button className="btn mt-2"  onClick={(e)=>submitHandler(movie.id)}> Show More</button> */}
                          <Link to="/movie-des" onClick={(e)=>submitHandler(movie.id)}> Show</Link>
                              </div>
                              
                          )
                          
                        })

                       
                  }
            </div>

            </>
      )

}
export default MovieList