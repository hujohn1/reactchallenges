import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import {Repository} from './components/Repository.tsx'

function Example(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState({
    name: '', 
    ipm: '10', 
    sortby: 'bestmatch', 
    order: 'asc'
  });

  const watchedFields = watch(["name", "ipm", "sortby", "order"])
  const {isPending, error, data} = useQuery({
    queryKey: ['githubdata', submittedData], 
    queryFn: () => {
      const params = new URLSearchParams({
        q: submittedData.name || 'react',
        per_page: submittedData.ipm,
        ...(submittedData.sortby !== 'bestmatch' && { sort: submittedData.sortby }),
        order: submittedData.order
      });
      return fetch(`https://api.github.com/search/repositories?${params}`, {
        headers: {
          'Accept': 'application/vnd.github.text-match+json'
        }
      }).then((res) => res.json());
    }
  })
  const onSubmit=(data)=>{
    setSubmittedData(data);
  }

  if(isPending) return <div>Loading...</div>
  if(error) return <div className="text-red-600">An error has occurred {error.message}</div>

  return (
    <div>
      <h1 className="font-bold">Github Repository Search</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input id="name" className="border rounded bg-blue-50" type="text" placeholder="nextjs" {...register("name")}/><br></br>
        <div className="border rounded border-solid inline-block bg-gray-100 m-4 px-2 py-1">
           <label>Items per page </label>
          <select id="ipm" { ...register("ipm")}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
       
        <div className="border rounded border-solid inline-block bg-gray-100 m-4 px-2 py-1">
          <label>Sort by: </label>
          <select id="sortby" {...register("sortby")}>
            <option value="bestmatch">Best match</option>
            <option value="moststars">Most stars</option>
            <option value="feweststars">Fewest stars</option>
            <option value="mostforks">Most forks</option>
            <option value="fewestforks">Fewest forks</option>
            <option value="recentlyup">Recently updated</option>
            <option value="leastrecentlyup">Least recently updated</option>
          </select>
        </div>
        
        <div className="border rounded border-solid inline-block bg-gray-100 m-4 px-2 py-1">
          <label> Order: </label>
          <select id="order" {...register("order")}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <input type="submit" className="bg-blue-500 text-white p-2 rounded" />
      </form>

      {data &&     
      <div>
        {data.items.map((repo) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </div>
      }
    </div>  
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example/>
    </QueryClientProvider>
  )
}

export default App
