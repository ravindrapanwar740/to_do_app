// import React from 'react'

// function Movie_list(props) {
//     console.log("Movie List=",props.movie)
//   function  eventHandle()
// {
//     alert("Event Handler call")
// }
//     return (
//         <div>
//             <h1>Movie_list_Data:</h1>
//             <div className="add_btn">
               
//                 <div className="show_data">
//                     <div className="show list">
//                         <input type="text" id="m_list" placeholder="Enter Movie Name...."></input><br />
//                         <button onClick={eventHandle}>Click</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Movie_list;



import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
                    <div 
					onClick={()=>props.handleFavouritesClick(movie)}
					className='overlay d-flex align-items-center justify-content-center'>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;