//page ini berfungsi untuk movie detail karena ngambil dari id
import React from 'react'
import { getSession, useSession } from "next-auth/client";

function Movie({ result }) {
  return (
    <div>
        
    </div>
  )
}

export default Movie

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const { id } = context.query;
  
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
    ).then((response) => response.json());
  
    return {
      props: {
        session,
        result: request,
      },
    };
  }